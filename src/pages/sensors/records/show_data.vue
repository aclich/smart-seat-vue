<template>
<div>
    <Breadcrumbs main="seats" title="Show Record"/>
    <loading
    loader="dots"
    :active.sync="loading_state"
    :can-cancel="false"
    :is-full-page="true"
    ></loading>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <p class="h4 txt-primary">量測記錄</p>
                <span>顯示紀錄的資訊並告訴您坐姿的分布。</span>
            </div>
            <div class="card-body">
                <b-row>
                    <b-col>
                        <p class="h6 txt-danger"><label class="txt-dark">已選坐墊:</label> {{ record_data_info.seat_name }}</p>
                    </b-col>
                    <b-col>
                        <p class="h6 txt-danger"><label class="txt-dark">資料類別:</label> {{ type_map[record_data_info.type] }}</p>
                    </b-col>
                    <b-col>
                        <p class="h6 txt-danger"><label class="txt-dark">紀錄時間:</label> {{ record_data_info.time }}</p>
                    </b-col>
                    <b-col>
                        <p class="h6 txt-danger"><label class="txt-dark">總資料筆數:</label> {{ record_data_info.count }}</p>
                    </b-col>
                </b-row>
            </div>
        </div>
        <b-row align-v="stretch">
            <b-col>
                <div class="card">
                    <div class="card-header">
                        <p class="h5 txt-success">壓力分佈圖</p>
                        <span>壓力分佈圖像化</span>
                    </div>
                    <div class="card-body my-gallery" align="center">
                    <div class="col" itemscope itemprop="thumbnail" align='center'>
                        <b-row>
                            <b-col md="7">
                                <a>
                                    <img :src="getpath()" class="img-thumbnail" alt="Image description" />
                                </a>
                            </b-col>
                            <b-col align='left' align-self="end">
                                <div class="caption">
                                    <h5 v-text="`坐姿情況: ${posture_map[select_record.posture]}`"></h5>
                                    <p v-text="`紀錄時間: ${select_record.time}`"></p>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row align-v="center">
                            <label class="col-md-2 control-label sm-left-text" for="u-range-06">記錄滑軌</label>
                            <div class="col-md-9 col-11">
                                <VueSlideBar v-model="slider.value" :data="slider.data" :range="slider.range" class="month-range"></VueSlideBar>
                            </div>
                        </b-row>
                    </div>
                    <br/>
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="card">
                    <div class="card-header">
                        <p class="h5 txt-success">坐姿統計</p>
                        <span>統計整體坐姿的情況</span>
                    </div>
                    <div class="card-body chart-block">
                     <GChart
                      class="chart-overflow" 
                      id="pie-chart2"
                      type="PieChart"
                      :data="pie_chart.chartData"
                      :options="pie_chart.options"
                    />
                  </div>
                </div>
            </b-col>
        </b-row>
        <div class="card">
            <div class="card-header">
                <h5>詳細記錄列表</h5>
            </div>
            <div class="card-body">
                <div class="datatable-vue m-0">
                    <h6>篩選條件</h6>
                    <div class="row filter-smart">
                        <div class="col-sm-2">
                            <input class="form-control" v-model="filters.time.value" placeholder="紀錄時間"/>
                        </div>
                        <div class="col-sm-2">
                            <b-form-select class="form-control" v-model="filters.posture.value" :options="posture_map" placeholder="坐姿情況" />
                        </div>
                    </div>
                    <div class='table-responsive vue-smart'>
                        <v-table
                            :data="records_list" class="table"
                            :currentPage.sync="filter.currentPage"
                            :pageSize="10"
                            @totalPagesChanged="filter.totalPages = $event"
                            :filters="filters">
                        <thead slot="head" align="center">
                            <v-th sortKey="time">紀錄時間</v-th>
                            <v-th sortKey="data">壓力數值</v-th>
                            <v-th sortKey="posture">坐姿情況</v-th>
                            <v-th sortKey="id">操作</v-th>
                        </thead>
                        <tbody slot="body" slot-scope="{displayData}" align='center'>
                            <tr v-for="row in displayData" :key="row.id">
                                <td>{{ row.time }}</td>
                                <td>{{ row.data }}</td>
                                <td>{{ posture_map[row.posture] }}</td>
                                <td>
                                    <!-- <label>{{ row.id }}</label> -->
                                    <b-button class="btn btn-danger btn-xs m-1" @click="delete_record(row)" ><i class="icofont icofont-trash"></i></b-button>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                    </div>
                    <smart-pagination
                    :currentPage.sync="filter.currentPage"
                    :totalPages="filter.totalPages"
                    />
                </div> 
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { GChart } from 'vue-google-charts'
import VueSlideBar from 'vue-slide-bar'
import { api_server } from '@/main'
var posture_map = {
                "": "所有坐姿情況",
                regular: "標準",
                bias_left:"偏左",
                bias_right:"偏右",
                cross_left:"左腳翹二郎腿",
                cross_right:"右腳翹二郎腿",
                stand_on:"雙腳在椅子上",
            }
export default {
    components: { GChart, VueSlideBar },
    created(){
        this.get_record_data()
        this.adjust_pie_chart()
    },
    computed:{
        loading_state: function(){
            return this.$store.state.isLoading
        },
        selected_slider: function(){
            return this.slider.value
        }
    },
    watch:{
        selected_slider: function(){
            this.select_record = this.records_slider[this.slider.value]
        }
    },
    data(){
        return {
            record_data_info:{
                seat_id: this.$route.params.id,
                // seat_name: "test seat",
                // type: "2",
                // time: "2021-12-12 08:12:34~08:17:17",
                // count: 36
            },
            select_record:{
                // data_id:0 ,time:"2021-12-12 08:12:34", data:[], posture:"bias_right"
            },
            records_list:[
                // {data_id:0, time:"08:12:34", data:[187, 356, 388, 142, 591, 862, 831, 431, 444, 980, 974, 660, 591, 783, 989, 599, 352, 721, 789, 671, 320, 623, 689, 311], posture:"regular"},
                // {data_id:3, time:"08:17:17", data:[], posture:"stand_on"}
            ],
            records_slider:{
                // "08:12:34": {data_id:0, time:"2021-12-12 08:12:34", data:[], posture:"regular"},
                // "08:17:17": {data_id:3, time:"2021-12-12 08:17:17", data:[], posture:"stand_on"},
            },
            pie_chart: {
                chartData: [
                    // ['Task', 'Hours per Day'],
                    // ['標準',     5],
                    // ['偏左',      10],
                    // ['偏右',  15],
                    // ['左腳翹二郎腿', 20],
                    // ['右腳翹二郎腿',    25],
                    // ['雙腳在椅子上', 25]
                ],
                options: { 
                    title: '我的坐姿分布',
                    is3D: true,
                    width:'100%',
                    height: 1,
                    colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", '#B87070', "#FF5370"]
                },
            },
            slider:{
				// value:"08:12:34",
				// data:[
                //     "08:12:34",
                //     "08:17:17"
				// ],
				// range:[
                //     {
                //         label: "08:12"
                //     },
                //     {
                //         label: "08:13"
                //     },
                //     {
                //         label: "08:14"
                //     },
                //     {
                //         label: "08:15"
                //     },
                //     {
                //         label: "08:17"
                //     },
				// ]
			},
            posture_map: posture_map,
            filter:{
				currentPage: 1,
				totalPages: 0,
			},
            filters:{
                time: { value: '', keys: ['time'] },
                posture: { value: '', keys: ['posture'] },
            },
            type_map:{
                1:'A-0001',
                2:'C-8763'
            }
        }
    },
    methods:{
        setimagesparth() {
            for (var i = 0; i < this.biglightgallery.length; i++) {
                this.biglightgallery[i] = this.getbigimgpath(this.biglightgallery[i]);
            }
        },
        getpath() {
            let seat_type = (this.record_data_info.type > 2) ? 1 : this.record_data_info.type 
            let filename = `${seat_type}_${this.select_record.posture}.png` 
            return require("@/assets/images/smart_seat_img/" + filename);
        },
        adjust_pie_chart(){
            this.pie_chart.options.height = (this.record_data_info.type == 1) ? 494 : 494
        },
        get_record_data(){
            let data_type = this.$route.params.data_type
            let seat_id = this.$route.params.id
            let search_date = this.$route.params.date
            this.$store.commit("change_loading_state", true)
            api_server.get(`/seat/get-data/${data_type}/${seat_id}/${search_date}`)
            .then(res =>{
                if (res.data.message == '無資料'){
                    this.$swal({
                        title:'無資料',
                        type: 'info',
                        text:'此坐墊在該日期無紀錄資料'
                    })
                    this.$router.push(`/sensor/records/${seat_id}`)
                }
                else{
                    this.record_data_info = res.data.data.record_data_info
                    this.records_slider = res.data.data.records_slider
                    this.records_list = res.data.data.records_list
                    this.slider = res.data.data.slider
                    this.pie_chart.chartData = res.data.data.chartData
                    this.type_map = res.data.data.type_map
                }
            }).catch(err =>{
                this.$swal({
                    title:'獲取資料失敗!',
                    type: 'error',
                    text: err.response.message
                })
            }).finally(() =>{
                this.$store.commit("change_loading_state", false)
            })
        },
        delete_record(row_data){
            this.$swal({
                type:'warning',
                title:"確認刪除",
                text: `確定要刪除${row_data.time}此筆資料嗎?`,
				showCancelButton: true,
				confirmButtonText: '確定',
				confirmButtonColor: '#4466f2',
				cancelButtonText: '取消',
				cancelButtonColor: '#efefef',
				reverseButtons: true
			}).then(result => {
                if(result.value){
                    this.$store.commit('change_loading_state', true)
                    api_server.delete(`/seat/delete-data`, {params: {mode:'s', data_id: row_data.data_id}})
                        .then(res =>{
                        if (res.data.status == 'success'){
                            this.$toasted.show('刪除成功!',{
                                theme: 'bubble',
                                position: "top-right",
                                type: 'success',
                                duration: 2000
                            })
                            this.get_record_data()
                        } else {
                            throw res.data.message
                        }
                    }).catch(err =>{
                        this.$swal({
                            title: "刪除失敗",
                            type: 'error',
                            text: err.response.data.message
                        })
                    }).finally(() =>{
                    })
                }
            })
        }
    }
}
</script>