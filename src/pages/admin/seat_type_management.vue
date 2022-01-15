<template>
    <div>
        <Breadcrumbs title="Seat Type Management"/>
        <loading
        loader="dots"
        :active.sync="isloading"
        :can-cancel="false"
        :is-full-page="true"
        ></loading>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h5>坐墊型號管理</h5><span>查看與修改坐墊型號</span>
                </div>
                <div class="card-body">
                    <b-table hover striped :fields="fields" :items="type_list" responsive='sm'>
                        <template #cell(操作)="data">
                            <b-button class="btn btn-success btn-xs m-1" @click="show_mod_modal(data)"><i class="fa fa-pencil"></i>修改</b-button>
                            <b-button class="btn btn-danger btn-xs m-1" @click="del_type(data)"><i class="icofont icofont-trash"></i>刪除</b-button>
                        </template>
                    </b-table>
                    <b-button class="btn btn-info btn-ms m-1" @click="show_add_modal()"><i class="fa fa-plus-square"></i>新增</b-button>
                </div>
            </div>
            <!--彈出視窗-->
            <b-modal ref='typemodal' ok-title="Modify" :title="modal_title" hide-footer>
            <div class="card">
                <div class="card-body">
                    <b-form class="needs-validation" @submit="SubmitTypeChange">
                        <div class="form-row">
                            <div v-if="modal_type == 'mod'" class="col-md-4 mb-3">
                                <label for="c_form_seat_name">型號ID: <label class="txt-danger">{{ type_data.c_id }}</label> </label>
                            </div>
                            <div class="col-md-5 mb-3">
                                <label for="type_data_res">型號名稱</label>
                                <b-form-input type="text" id="c_form_seat_name" v-model="type_data.type_name" :state="type_data_res.type_name" placeholder="請輸入型號名稱...."></b-form-input>
                                <b-form-invalid-feedback :state="type_data_res.type_name">請輸入坐墊名稱</b-form-invalid-feedback>
                                <b-form-valid-feedback :state="type_data_res.type_name">Look Good</b-form-valid-feedback>
                            </div>
                        </div>
                        <b-button v-if="modal_type == 'add'" @click="add_type" class='m-1' variant="primary">新增</b-button>
                        <b-button v-else type="submit" class='m-1' variant="primary">修改</b-button>
                        <b-button @click="hideModal" class='btn btn-light m-1'>取消</b-button>
                    </b-form>
                </div>
            </div>
            </b-modal>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
import {api_server} from '@/main'
import {clone} from '@/main'
export default {
    data(){
        return{
            isloading: false,
            fields:[{key: 'c_id', label: '編號'},
                    {key: 'type_name', label: '型號名稱'}, '操作'],
            // type_list:[{c_id: 1, type_name:"A-0001"},
            //            {c_id: 2, type_name:'C-8763'}],
            type_list:[],
            type_data:{c_id: 1, type_name: "A-0001"},
            type_data_res:{type_name: null},
            modal_type: 'add',
            modal_title: '編輯型號名稱'

        }
    },
    created(){
        this.get_type_list()
    },
    methods:{
        get_type_list(){
            this.isloading = true
            api_server.get('/admin/seat_type_management')
            .then(res=>{
                console.log(res)
               this.type_list = res.data.data
            }).catch(err=>{
                console.log(err)
                // let err_txt = err.response.status != 500 ? err.response.data.message : '連線不穩定，請重新整理!'
                let err_txt = '連線不穩定，請重新整理!'
                this.$swal({
                    title: '錯誤',
                    type: 'error',
                    text: err_txt
                })
            }).finally(()=>{
                this.isloading = false
            })
        },
        show_add_modal(){
            this.modal_type = 'add'
            this.modal_title = '新增坐墊型號'
            this.type_data.type_name = ''
            this.$refs.typemodal.show()
        },
        show_mod_modal(data){
            this.type_data = clone(data.item)
            this.modal_type = 'mod'
            this.modal_title = '編輯型號名稱'
            this.$refs.typemodal.show()
        },
        hideModal(){
            this.type_data_res.type_name = null
            this.$refs.typemodal.hide()
        },
        SubmitTypeChange(evt){
            evt.preventDefault()
            this.type_data_res.type_name = this.type_data.type_name != ''
            if(this.type_data_res.type_name){
                this.send_modify_request()
            }
        },
        add_type(){
            this.type_data_res.type_name = this.type_data.type_name != ''
            if(this.type_data_res.type_name){
                this.send_add_request()
            }
        },
        send_modify_request(){
            this.isloading = true
            console.log('modify:', this.type_data)
            api_server.put('/admin/seat_type_management', this.type_data)
            .then(res=>{
                this.hideModal()
                this.$swal({
                    title: '成功',
                    type: 'success',
                    text: res.data.message
                })
                this.get_type_list()
            }).catch(err=>{
                console.log(err)
                this.$swal({
                    title: '錯誤',
                    type: 'error',
                    text: err.response.data.message
                })
            }).finally(()=>{
                this.isloading = false
            })
        },
        send_add_request(){
            console.log('add:', this.type_data)
            this.isloading = true
            api_server.post('/admin/seat_type_management', this.type_data)
            .then(res=>{
                this.hideModal()
                this.$swal({
                    title: '成功',
                    type: 'success',
                    text: res.data.message
                })
                this.get_type_list()
            }).catch(err=>{
                this.$swal({
                    title: '錯誤',
                    type: 'error',
                    text: err.response.data.message
                })
            }).finally(()=>{
                this.isloading = false
            })
        },
        del_type(data){
            console.log("delete: c_id=", data.item.c_id)
            this.$swal({
                showCancelButton: true,
                title: '確認刪除',
                type: 'warning',
                text: '確定要刪除此型號? (若該型號已被使用過則會無法刪除!)',
                cancelButtonText: '取消',
                confirmButtonText: '確認'
            }).then(res=>{
                if(res.value){
                    this.isloading = true
                    api_server.delete(`/admin/seat_type_management?c_id=${data.item.c_id}`)
                    .then(res=>{
                        this.$swal({
                            title: '完成',
                            type: 'info',
                            text: res.data.message
                        })
                        this.get_type_list()
                    }).catch(err=>{
                        this.$swal({
                            title: '失敗',
                            type: 'error',
                            text: err.response.data.message
                        })
                    }).finally(()=>{
                        this.isloading=false
                    })
                }
            })
        }
    }
}
</script>