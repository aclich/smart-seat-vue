<template>
    <div class="container-fluid">
    <div class='card'>
        <div class='card-header'>
            <h5>註冊新坐墊</h5><span>註冊您的新壓力感測坐墊，開始監控您的坐姿!</span>
        </div>
        <div class='card-body'>
            <b-form class="needs-validation" @submit="onCustomStyleSubmit">
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="c_form_seat_name">坐墊名稱</label>
                        <b-form-input type="text" id="c_form_seat_name" v-model="c_form.seat_name" :state="c_form_result.seat_name" placeholder="ex.辦公室座位"></b-form-input>
                        <b-form-invalid-feedback :state="c_form_result.seat_name">請輸入坐墊名稱</b-form-invalid-feedback>
                        <b-form-valid-feedback :state="c_form_result.seat_name">Look Good</b-form-valid-feedback>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="c_form_seat_type">坐墊型號</label>
                        <b-form-select v-model="c_form.seat_type" :options="seat_type_select_options" :state="c_form_result.seat_type"></b-form-select>
                        <b-form-invalid-feedback :state="c_form_result.seat_type">請選擇對應的型號</b-form-invalid-feedback>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-8 mb-3">
                        <label for="c_form_note">備註 (選填)</label>
                        <b-form-textarea type="text" id="c_form_note" v-model="c_form.note" placeholder="describe this sensor"></b-form-textarea>
                    </div>
                </div>
                <b-button type="submit" variant="primary">註冊</b-button>
            </b-form>      
        </div>
    </div>
    </div>
</template>

<script>
import { api_server } from '@/main'

export default {
    data() {
        return{
            c_form:{
                seat_name:'',
                seat_type:'',
                note:'',
            },
            c_form_result:{
                seat_name:null,
                seat_type:null,
            },
            seat_type:{
                selected: null,
            },
            seat_type_select_options: [
            //   { value: '', text:'請選擇型號...'},
            //   { value: 1, text:'A-0001型' },
            //   { value: 2, text:'C-8763型' }
            ],
        }
    },
    created(){
        this.get_type_list()
    },

    methods:{
        allTrue(obj){
            for(var o in obj)
                if(!obj[o]) return false;
            return true;
        },
        onCustomStyleSubmit(evt){            
            evt.preventDefault()
            this.c_form_result.seat_name = this.c_form.seat_name != ''
            this.c_form_result.seat_type = this.c_form.seat_type != ''
            if (this.allTrue(this.c_form_result)){
                this.creat_new_seat()
            }
        },
        creat_new_seat(){
            this.$store.commit('change_loading_state', true)
            console.log(this.c_form)
            // this.$store.commit('add_seat_list', this.c_form)
            api_server.post("/seat/manage", JSON.stringify({data: this.c_form}))
            .then(res => {
                if(res.data.message == 'success'){
                    this.$toasted.show('註冊成功!',{
                        theme: 'bubble',
                        position: "top-right",
                        type: 'success',
                        duration: 2000
                    })
                    this.after_req()
                    }
                else {
                    this.$swal({
                    title: "註冊失敗",
                    type: "error",
                    text: res.data.err_msg})
                    this.after_req()
                }
            }).catch(err =>{
                var error_text = err.response.data.message
                if (error_text == 'failed'){
                    error_text = err.response.data.err_msg
                }
                this.$swal({
                    title: "註冊失敗",
                    type: "error",
                    text: error_text
                })
                this.after_req()
            })
        },
        after_req(){
            this.reset_form()
            this.$store.commit('trigger_update_flag')
            this.$store.commit('change_loading_state', false)
        },
        reset_form(){
            this.c_form={
                seat_name:'',
                seat_type:'',
                note:'',
            }
            this.c_form_result={
                seat_name:null,
                seat_type:null,
            }
            this.seat_type={
                selected: null,
            }
        },
        get_type_list(){
            api_server.get('/seat/get-type-list').then(res => {
                this.seat_type_select_options = res.data.data
            }).catch(err => {
                console.log(err)
                this.$swal({
                    title: "獲取型號列表失敗!",
                    type: "error",
                    text: err.response.data.message
                })
            })
        }
    }
}
</script>