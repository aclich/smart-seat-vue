<template>
    <!-- page-wrapper Start-->
    <div class="page-wrapper">
        <div class="container-fluid p-0">
            <!-- login page start-->
            <div class="authentication-main">
                <loading
                    loader="dots"
                    :active.sync="isLoading"
                    :can-cancel="false"
                    :is-full-page="true"
                ></loading>
                <div class="row">
                    <div class="col-md-12">
                        <div class="auth-innerright">
                            <div class="authentication-box">
                                <div class="text-center"><img alt="" width="250" height="" src="../assets/images/1280px-Sword_Art_Online_anime_logo.svg.png"></div>
                                <div class="card mt-4">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <h4>LOGIN</h4>
                                            <h6>Enter your email and Password </h6>
                                        </div>
                                        <form class="theme-form">
                                            <div class="form-group">
                                                <label class="col-form-label pt-0">Your email</label>
                                                <input v-model="form.email" class="form-control" required="" type="email">
                                            </div>
                                            <div class="form-group">
                                                <label class="col-form-label">Password</label>
                                                <input v-model="form.password" autocomplete="" class="form-control" required="" type="password">
                                            </div>
                                            <div class="checkbox p-0">
                                                <input id="checkbox1" type="checkbox">
                                                <label for="checkbox1">Remember me</label>
                                            </div>
                                            <div class="form-group form-row mt-3 mb-0">
                                                <button @click="login" class="btn btn-primary btn-block" type="button">Login</button>
                                            </div>
                                            <div class="form-group form-row mt-3 mb-0">
                                                <!-- <button @click="login" class="btn btn-secondary btn-block" type="button">Login With
                                                    Auth0
                                                </button> -->
                                                <button @click="signUp" class="btn btn-secondary btn-block" type="button">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- login page end-->
        </div>
    </div>
    <!-- latest jquery-->
</template>

<script>
// import firebase from 'firebase';

// import Userauth from '../auth/js/index'
import {api_server} from "@/main"
export default {
    name: 'login',
    data() {
        return {
            isLoading: false,
            form:{
                email: 'example@example.com',
                password: 'example_password'
            }
        }
    },
    methods: {
        login: function () {
            if (this.email == "" && this.password == '') {
                    this.email = "test@admin.com",
                    this.password = "test@123456"
            } else {
                this.isLoading = true;
                console.log(this.form.email, this.form.password)
                api_server.post("/auth/login",JSON.stringify(this.form))
                .then(response => {
                console.log(response)
                var user_info = JSON.stringify(response.data)
                console.log(user_info)
                console.log(response.status)
                 if (response.status == 200){
                     console.log(response)
                     this.$toasted.show('login success!',{
                         theme: 'bubble',
                         position: "top-right",
                         type: 'success',
                         duration: 2000
                     })
                    //  this.$store.commit('setusername', response.data.username)
                    //  this.$store.commit('setpermission', response.data.permission)
                    this.$store.commit('setUser_info', response.data)
                    window.sessionStorage.setItem("userInfo", user_info)
                    this.isLoading = false
                    this.$router.push('/')
                     }
                }).catch( err=>{
                    console.log(err)
                    this.$swal({
                        title: "登入失敗",
                        type: "error",
                        text: err.response.data.message
                    })
                    this.isLoading = false
                })
            }
        },

        signUp () {
            // Userauth.login()
            this.isLoading = true;
            this.$router.push('/auth/register')
            this.isLoading = false;
            // setTimeout(() => {
            //     this.isLoading = false
            // }, 2000);
        }
    }
}
</script>