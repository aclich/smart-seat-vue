<template>
    <!-- page-wrapper Start-->
    <div class="page-wrapper">
        <div class="container-fluid p-0">
            <!-- login page start-->
            <div class="authentication-main">
                <!-- <loading
                    loader="dots"
                    :active.sync="isLoading"
                    :can-cancel="false"
                    :is-full-page="true"
                ></loading> -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="auth-innerright">
                            <div class="authentication-box">
                                <div class="text-center"><img alt="" width="250" height="" src="../assets/images/1280px-Sword_Art_Online_anime_logo.svg.png"></div>
                                <div class="card mt-4">
                                    <div class="card-body">
                                        <div class="text-center">
                                            <h4>LOGIN</h4>
                                            <h6>Enter your Username and Password </h6>
                                        </div>
                                        <form class="theme-form">
                                            <div class="form-group">
                                                <label class="col-form-label pt-0">Your Name</label>
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

import Userauth from '../auth/js/index'
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
                console.log(this.form.email, this.form.password)
                // this.isLoading = true
                api_server.post("/auth/login",JSON.stringify(this.form))
                .then(response => {
                console.log(response)
                 if (response.data == 'success'){
                     console.log('success')
                     }
                }).catch( err=>{
                    console.log(err)
                    this.$swal({
                        title: "登入失敗",
                        type: "error",
                        text: "帳號或密碼錯誤!"
                    })
                })
            }
                // firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                //     (result) => {
                //         Userauth.localLogin(result)
                //         this.$router.replace('/')
                    // },
                    // (err) => {
                    //     this.email = "test@admin.com",
                    //     this.password = "test@123456"
                    //     this.$toasted.show('Oops...' + err.message, {theme: 'bubble',   position: "bottom-right",   type: 'error', duration: 2000});
                    // }
                // );
        },

        signUp () {
            Userauth.login()
        }
    }
}
</script>