<template>
    <div class="container-fluid">
        <b-modal ref='edit-modal' ok-title="Modify" title="編輯坐墊資訊" hide-footer>
        <div class="card">
            <div class="card-body">
                <b-form class="needs-validation" @submit="onCustomStyleSubmit">
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="c_form_seat_name">坐墊名稱</label>
                            <b-form-input type="text" id="c_form_seat_name" v-model="modal_data.seat_name" :state="c_form_result.seat_name" placeholder="ex.辦公室座位"></b-form-input>
                            <b-form-invalid-feedback :state="c_form_result.seat_name">請輸入坐墊名稱</b-form-invalid-feedback>
                            <b-form-valid-feedback :state="c_form_result.seat_name">Look Good</b-form-valid-feedback>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="c_form_seat_type">坐墊型號</label>
                            <b-form-select v-model="modal_data.seat_type" :options="seat_type_select_options" :state="c_form_result.seat_type"></b-form-select>
                            <b-form-invalid-feedback :state="c_form_result.seat_type">請選擇對應的型號</b-form-invalid-feedback>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-8 mb-3">
                            <label for="c_form_note">備註 (選填)</label>
                            <b-form-textarea type="text" id="c_form_note" v-model="modal_data.note" placeholder="describe this seat"></b-form-textarea>
                        </div>
                    </div>
                    <b-button type="submit" class='m-1' variant="primary">修改</b-button>
                    <b-button @click="hideModal" class='btn btn-light m-1'>取消</b-button>
                </b-form>
            </div>
        </div>
    </b-modal>
    </div>
</template>

<script>
import { api_server } from '@/main'
export default {
    name: "EditModal",
    props:['modal_data'],

    data(){
        return{
            c_form_result:{
                seat_name:null,
                seat_type:null,
            },
            seat_type:{
                selected: '',
            },
            seat_type_select_options: [
            ],
        }
    },
    created(){
        this.get_type_list()
    },
    methods:{
        showmodal(){
            this.$refs['edit-modal'].show()
        },
        hideModal(){
            this.$refs['edit-modal'].hide()
        },
        allTrue(obj){
            for(var o in obj)
                if(!obj[o]) return false;
                
            return true;
        },
        onCustomStyleSubmit(evt){            
            evt.preventDefault()
            this.c_form_result.seat_name = this.modal_data.seat_name != ''
            this.c_form_result.seat_type = this.modal_data.seat_type != ''
            if (this.allTrue(this.c_form_result)){
                console.log('modify:'+this.modal_data)
                this.send_modify_request()
            }
        },
        get_type_list(){
            api_server.get('/seat/get-type-list').then(res => {
                this.seat_type_select_options = res.data.data.type_list 
            }).catch(err => {
                console.log(err)
                this.$swal({
                    title: "獲取型號列表失敗!",
                    type: "error",
                    text: err.response.data.message
                })
            })
        },
        send_modify_request(){
            // this.$store.commit('modify_seat_list', this.modal_data)
            this.$store.commit('change_loading_state', true)
            api_server.put('/seat/manage', {data: this.modal_data})
            .then(res => {
                console.log(res)
                this.$store.commit('trigger_update_flag')
                if (res.data.err_msg != ''){
                    this.$swal({
                        title:'資訊',
                        type:'info',
                        text:res.data.err_msg})
                }
                else{
                    this.$toasted.show('修改成功!',{
                        theme: 'bubble',
                        position: 'top-right',
                        type: 'success',
                        duration: 2000
                    })
                }
                this.$store.commit('change_loading_state', false)
                this.hideModal()
            }).catch(err => {
                var err_msg = err.response.data.message
                if (err_msg == 'failed'){
                    err_msg = err.response.data.err_msg
                }
                this.$swal({
                    title: "修改失敗!",
                    type: "error",
                    text: err_msg
                })
                this.$store.commit('change_loading_state', false)
            })
        }
    }
}
</script>