<template>
<div>
<Breadcrumbs main="Sensors" title="Register Sensor"/>
  <!--container-fluid starts -->
<div class="container-fluid">
<loading
    loader="dots"
    :active.sync="isLoading"
    :can-cancel="false"
    :is-full-page="true"
></loading>
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
                        <b-form-valid-feedback :state="c_form_result.seat_name">Look Good</b-form-valid-feedback>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="c_form_username">Username</label>
                        <b-input-group prepend="@">
                            <b-form-input type="text" id="c_form_username" v-model="c_form.username" :state="c_form_result.username" placeholder="Username"></b-form-input>
                        </b-input-group>
                        <b-form-invalid-feedback :state="c_form_result.username">Please choose a unique and valid username.</b-form-invalid-feedback>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <label for="c_form_city">City</label>
                        <b-form-input type="text" id="c_form_city" v-model="c_form.city" :state="c_form_result.city" placeholder="City"></b-form-input>
                        <b-form-invalid-feedback :state="c_form_result.city">Please provide a valid city.</b-form-invalid-feedback>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="c_form_state">State</label>
                        <b-form-input type="text" id="c_form_state" v-model="c_form.state" :state="c_form_result.state" placeholder="State"></b-form-input>
                        <b-form-invalid-feedback :state="c_form_result.state">Please provide a valid state.</b-form-invalid-feedback>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="c_form_zipcode">Zip</label>
                        <b-form-input type="text" id="c_form_zipcode" v-model="c_form.zip" :state="c_form_result.zip" placeholder="Zip"></b-form-input>
                        <b-form-invalid-feedback :state="c_form_result.zip">Please provide a valid zip.</b-form-invalid-feedback>
                    </div>
                </div>
                <b-button type="submit" variant="primary">Submit Form</b-button>
            </b-form>      
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    data(){
        return{
            isLoading: false,
            c_form:{
                seat_name:'',
                last_name:'',
                username:'',
                city:'',
                state:'',
                zip:''
            },
            c_form_result:{
                seat_name:null,
                last_name:null,
                username:null,
                city:null,
                state:null,
                zip:null
            },
        }
    },
    created(){

    },
    methods:{
        onCustomStyleSubmit(evt){            
            evt.preventDefault()
            if(this.c_form.seat_name != '')
            {
                console.log("custom stylr", this.c_form.seat_name);
                this.c_form_result.seat_name = true
            }
            else
            {
                this.c_form_result.seat_name = false
            }

            if(this.c_form.last_name != '')
            {
                this.c_form_result.last_name = true
            }
            else
            {
                this.c_form_result.last_name = false
            }

            if(this.c_form.username != '')
            {
                this.c_form_result.username = true
            }
            else
            {
                this.c_form_result.username = false
            }

            if(this.c_form.city != '')
            {
                this.c_form_result.city = true
            }
            else
            {
                this.c_form_result.city = false
            }

            if(this.c_form.state != '')
            {
                this.c_form_result.state = true
            }
            else
            {
                this.c_form_result.state = false
            }

            if(this.c_form.zip != '')
            {
                this.c_form_result.zip = true
            }
            else
            {
                this.c_form_result.zip = false
            }
        },
    }
}
</script>

<style>

</style>