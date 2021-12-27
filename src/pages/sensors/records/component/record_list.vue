<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <h5>紀錄列表</h5>
                <span>請選擇您想要查看的資料日期</span>
            </div>
            <div class="card-body">
                <div class='form-row' align='left'>
                    <div class="col-md-2">
                         <p class="h6 txt-danger"><label class="txt-dark">已選坐墊:</label> {{ seat_data.name }}</p>
                    </div>
                    <div class="col-md-2">
                         <p class="h6 txt-danger"><label class="txt-dark">型號:</label> {{ seat_data.type }}</p>
                    </div>
                </div>
                <div class="datatable-vue m-0">
                <br/>
                <h6>篩選條件</h6>
                <div class="row filter-smart">
                     <div class="col-sm-2">
                        <input class="form-control" v-model="filters.type.value" placeholder="坐墊型號"/>
                    </div>
                    <div class="col-sm-2">
                        <input class="form-control" v-model="filters.created.value" placeholder="紀錄日期"/>
                    </div>
                    <div class="col-sm-2">
                        <input class="form-control" v-model="filters.time.value" placeholder="時間區間"/>
                    </div>
                    <div class="col-sm-2">
                        <input class="form-control" v-model="filters.count.value" placeholder="紀錄筆數"/>
                    </div>
                </div>
            <div class='table-responsive vue-smart'>
                <v-table
                    :data="record_list" class="table"
                    :currentPage.sync="filter.currentPage"
                    :pageSize="10"
                    @totalPagesChanged="filter.totalPages = $event"
                    :filters="filters">
                    <thead slot="head" align="center">
                        <v-th sortKey="type">坐墊型號</v-th>
                        <v-th sortKey="created">紀錄日期</v-th>
                        <v-th sortKey="time">時間區間</v-th>
                        <v-th sortKey="count">紀錄筆數</v-th>
                        <v-th sortKey="created">操作</v-th>
                    </thead>
                    <tbody slot="body" slot-scope="{displayData}" align='center'>
                        <tr v-for="row in displayData" :key="row.id">
                            <td>{{ row.type }}</td>
                            <td>{{ row.created }}</td>
                            <td>{{ row.time }}</td>
                            <td>{{ row.count }}</td>
                            <td>
                                <b-button class="btn btn-success btn-xs m-1" @click="check_data(row)"><i class="fa fa-history"></i> 查看紀錄</b-button>
                                <b-button class="btn btn-danger btn-xs m-1" @click="delete_data(row)"><i class="icofont icofont-trash"></i></b-button>
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
</template>
<script>
import { api_server } from "@/main"
export default {
    data(){
        return{
            seat_data:{
                // id:99,
                // name:"test_seat",
                // type:"C-8763"
            },
            filter:{
				currentPage: 1,
				totalPages: 0,
			},
            filters:{
                type: {value: '', keys: ['type']},
                created: { value: '', keys: ['created'] },
                time: { value: '', keys: ['time'] },
                count: { value: '', keys: ['count'] }
            },
            record_list:[
                // {type: 'C-8763', created: "2020-12-18", time:"13:13:13~14:00:05" ,count:36},
                // {type: 'A-0001', created: "2020-12-20", time:"18:42:03~21:07:35" ,count:17},
            ]
        }
    },
    created(){
        this.get_seat_info_and_record_list()
    },
    updated(){
        // this.get_seat_info_and_record_list()
    },
    components:{

    },
    computed:{
        seat_id(){
            return this.$route.params.id
        },
        update_flag(){
            return this.$store.state.update_flag
        }
    },
    watch:{
        seat_id(){
            this.get_seat_info_and_record_list()
        },
        update_flag(){
            this.get_seat_info_and_record_list()
        }
    },
    methods:{
        get_seat_info_and_record_list(){
            console.log(this.$route.params.id)
            this.$store.commit('change_loading_state', true)
            api_server.get(`seat/get-record-list/${this.$route.params.id}`)
            .then(res => {
                this.seat_data = res.data.seat_info
                this.record_list = res.data.record_list
            }).catch(err =>{
                console.log(err.response)
                this.$swal({
                    title:"獲取記錄失敗",
                    type:'error',
                    text:err.response.statusText
                })
            }).finally(()=>{
                this.$store.commit("change_loading_state", false)
            })
        },
        check_data(row){
            this.$swal({
                type:'info',
                title:"確認查詢",
                text: `確定要查詢${row.created}的資料嗎?`,
				showCancelButton: true,
				confirmButtonText: '確定',
				confirmButtonColor: '#4466f2',
				cancelButtonText: '取消',
				cancelButtonColor: '#efefef',
				reverseButtons: true
			}).then(result => {
                if(result.value){
                    let seat_id = this.$route.params.id
                    let data_type = row.type
                    let date = row.created
                    this.$router.push(`/sensor/records/show/${data_type}/${seat_id}/${date}`)
                }
            })
        },
        delete_data(row){
            this.$swal({
                type:'warning',
                title:"確認刪除",
                text: `確定要刪除${row.created}的資料嗎?`,
				showCancelButton: true,
				confirmButtonText: '確定',
				confirmButtonColor: '#4466f2',
				cancelButtonText: '取消',
				cancelButtonColor: '#efefef',
				reverseButtons: true
			}).then(result => {
                if(result.value){
                    this.$store.commit('change_loading_state', true)
                    let del_params = { mode:'md',
                                       seat_id: this.seat_data.id,
                                       type: row.type,
                                       date: row.created}
                    api_server.delete('/seat/delete-data', {params: del_params})
                        .then(res=>{
                        this.$swal({
                            title: '刪除成功',
                            type: 'success',
                            text: res.data.message
                        })
                    }).catch(err =>{
                        console.log(err)
                        console.log(err.response)
                        this.$swal({
                            title:'刪除失敗',
                            type: 'error',
                            text: err.response.data.message
                        })
                    }).finally(()=>{
                        this.get_seat_info_and_record_list()
                    })
                }
            })
        }
    }
}
</script>