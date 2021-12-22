<template>
<div class="container-fluid">
    <EditModal :modal_data="modal_data" ref="editmodal"/>
    <div class="card">
        <div class="card-header"><h5>已註冊的坐墊</h5><span>檢視您已註冊的坐墊!</span></div>
        <div class="card-body">

            <div class="datatable-vue m-0">
                <h6>篩選條件</h6>
                <div class="row filter-smart">
                    <div class="col-sm-2">
                        <input class="form-control" v-model="filters.seat_name.value" placeholder="坐墊名稱"/>
                    </div>
                    <div class="col-sm-2">
                        <input class="form-control" v-model="filters.seat_type.value" placeholder="坐墊型號" />
                    </div>
                    <div class="col-sm-2">
                        <input class="form-control" v-model="filters.created.value" placeholder="註冊時間" />
                    </div>
                </div>
            <div class='table-responsive vue-smart'>
                <v-table
                    :data="get_seat_data" class="table"
                    :currentPage.sync="filter.currentPage"
                    :pageSize="10"
                    @totalPagesChanged="filter.totalPages = $event"
                    :filters="filters">
                <thead slot="head" align="center">
                    <v-th sortKey="seat_name">坐墊名稱</v-th>
                    <v-th sortKey="seat_type">坐墊型號</v-th>
                    <v-th sortKey="created">註冊時間</v-th>
                    <v-th sortKey="note">備註</v-th>
                    <v-th sortKey="id">操作</v-th>
                </thead>
                <tbody slot="body" slot-scope="{displayData}" align='center'>
                    <tr v-for="row in displayData" :key="row.id">
                        <td>{{ row.seat_name }}</td>
                        <td>{{ type_map[row.seat_type] }}</td>
                        <td>{{ row.created }}</td>
                        <td>{{ row.note }}</td>
                        <td>
                            <!-- <label>{{ row.id }}</label> -->
                            <b-button class="btn btn-light btn-xs m-1" @click="swal_generate_data(row)"><i class="fa fa-plus-square"></i></b-button>
                            <b-button class="btn btn-info btn-xs m-1" @click="call_editmodal(row)"><i class="fa fa-pencil"></i></b-button>
                            <b-button class="btn btn-danger btn-xs m-1" @click="delete_seat(row)" ><i class="icofont icofont-trash"></i></b-button>
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
import EditModal from './modal'
import { clone } from '@/main'
import { api_server } from '@/main'

export default {
    data(){
        return{
            // update_flag: this.get_update_flag,
            isbusy: true,
            filter:{
				currentPage: 1,
				totalPages: 0,
			},

            filters:{
                seat_name: { value: '', keys: ['seat_name'] },
                seat_type: { value: '', keys: ['seat_type'] },
                created: { value: '', keys: ['created'] }
            },
            modal_data:{
                id: "",
                seat_name: "default",
                seat_type: "",
                created: "",
                note:""
            },
            type_map:{}
        }
    },
    created(){
        // console.log('created manage')
        this.get_user_seat_list()
        this.get_type_map()
    },
    components:{
        EditModal
    },
    computed:{
        update_flag: function() {
            console.log('listened vuex state update_flag updated!')
            // this.get_user_seat_list()
            return this.$store.state.update_flag
        },
        get_seat_data: function () {
            console.log("computed get seat")
            return this.$store.state.seat_list
        }
    },
    watch:{
        update_flag(){
            this.get_user_seat_list()
        }
    },
    methods:{
        get_type_map(){
            api_server.get('/seat/get-type-list')
            .then(res =>{
                this.type_map = res.data.data.type_map
            }).catch(err => {
                console.log(err.response)
                this.$swal({
                    title:'錯誤',
                    type:'error',
                    text:err.response.data.message
                })
            })
        },
        get_user_seat_list(){
            // var tmp_data = [
            //     {
            //         "id": 1,
            //         "seat_name": "office seat",
            //         "seat_type": "A-0001",
            //         "created": '2021-12-05',
            //         "note":""
            //     },
            //     {
            //         "id": 2,
            //         "seat_name": "home seat",
            //         "seat_type": "C-8763",
            //         "created": '2021-12-01',
            //         "note": "測試坐墊"
            //     }
            // ]
            api_server.get('/seat/manage').then(res=> {
                var seat_list = res.data.data
                this.$store.commit('set_seat_list', seat_list)
            }).catch(err =>{
                console.log(err)
                this.$swal({
                    title: "獲取資料失敗",
                    type: "error",
                    text: err.response.data.message
                })
            })
        },

        call_editmodal(row_data){
            this.copy_row(row_data)
            console.log(this.modal_data)
            this.$refs.editmodal.showmodal()
        },
        copy_row(row_data){
            this.modal_data = clone(row_data)
        },
        delete_seat(row_data){
            this.$swal({
                type:'warning',
                title:"刪除確認",
                text:'確定要刪除此坐墊與其紀錄的所有資料嗎?',
				showCancelButton: true,
				confirmButtonText: '確定',
				confirmButtonColor: '#4466f2',
				cancelButtonText: '取消',
				cancelButtonColor: '#efefef',
				reverseButtons: true
			}).then(result => {
                if (result.value){
                    this.$store.commit('change_loading_state', true)
                    // this.$store.commit('remove_seat_list', row_data.id)
                    api_server.delete('/seat/manage', {data: row_data})
                    .then(res => {
                        if (res.data.message == 'success'){
                            this.$swal({
                                title:'刪除成功',
                                type:'info',
                                text: res.data.err_msg
                            })
                        this.$store.commit('trigger_update_flag')
                        this.$store.commit('change_loading_state', false)
                        }
                    }).catch(err => {
                        console.log(err.response)
                        var err_msg = (err.response.data.err_msg == '') ? err.response.data.message : err.response.data.err_msg
                        this.$swal({
                            title:"刪除失敗!",
                            type:'error',
                            text: err_msg
                        })
                        this.$store.commit('change_loading_state', false)
                    })
                }
            })
        },
        swal_generate_data(row_data){
            console.log(row_data)
            this.$swal({
                type:'info',
                title:"產生資料",
                text:'(Demo Function)要為此坐墊生成量測資料嗎?',
				showCancelButton: true,
				confirmButtonText: '確定',
				confirmButtonColor: '#4466f2',
				cancelButtonText: '取消',
				cancelButtonColor: '#efefef',
				reverseButtons: true
			}).then(result => {
                if(result.value){
                    this.generate_data(row_data)
                }
            })
        },
        generate_data(row_data){
            this.$swal({
                title:'哭阿',
                type:'error',
                text:'還沒做好拉🙃🥺🥺🥺'
            })
            console.log(row_data)
            // api_server.post('generate_data')
        }
    },

}
</script>