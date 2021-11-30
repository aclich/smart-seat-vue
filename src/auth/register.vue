<template>
   <!-- page-wrapper Start-->
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- sign up page start-->
            <div class="authentication-main">
                <loading
                    loader="dots"
                    :active.sync="isLoading"
                    :can-cancel="false"
                    :is-full-page="true"
                ></loading>
                <div class="row">
                    <div class="col-sm-12 p-0">
                        <div class="auth-innerright">
                            <div class="authentication-box">
                                <div class="text-center"><img width=250 src="../assets/images/1280px-Sword_Art_Online_anime_logo.svg.png" alt=""></div>
                                <div class="card mt-4 p-4">
                                    <h4 class="text-center">NEW USER</h4>
                                    <h6 class="text-center">Enter your Username and Password For Signup</h6>
                                    <form class="theme-form">
                                        <!-- <div class="form-row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="col-form-label">First Name</label>
                                                    <input class="form-control" type="text" placeholder="John">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="col-form-label">Last Name</label>
                                                    <input class="form-control" type="text" placeholder="Deo">
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="form-group">
                                            <label class="col-form-label">User Name</label>
                                            <input v-model="form.username" class="form-control" type="text" placeholder="Asuna">
                                        </div>
                                        <div class="form-group">
                                            <label class="col-form-label">Email</label>
                                            <input v-model="form.email" class="form-control" type="email" placeholder="kirito99@saomail.com">
                                        </div>
                                        <div class="form-group">
                                            <label class="col-form-label">Password</label>
                                            <input v-model="form.password" autocomplete="" class="form-control" type="password" placeholder="**********">
                                        </div>
                                        <!-- <div class="form-group"> -->
                                            <!-- <label class="col-form-label">DOB</label>
                                            <div class="form-row">
                                                <div class="col-sm-4">
                                                    <select class="form-control mb-1">
                                                        <option>DD</option>
                                                        <option>01</option>
                                                        <option>02</option>
                                                        <option>03</option>
                                                        <option>04</option>
                                                    </select>
                                                </div>
                                                <div class="col-sm-4">
                                                    <select class="form-control mb-1">
                                                        <option>MM</option>
                                                        <option>01</option>
                                                        <option>02</option>
                                                        <option>03</option>
                                                        <option>04</option>
                                                    </select>
                                                </div>
                                                <div class="col-sm-4">
                                                    <select class="form-control mb-1">
                                                        <option>YYYY</option>
                                                        <option>1990</option>
                                                        <option>1991</option>
                                                        <option>1992</option>
                                                        <option>1993</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="form-row">
                                            <div class="col-sm-4">
                                                <button @click="signUp" class="btn btn-primary" type="button">Sign Up</button>
                                            </div>
                                            <div class="col-sm-8">
                                                <div class="text-left mt-2 m-l-20">Are you already user?  <a class="btn-link text-capitalize" href="login">Login</a></div>
                                            </div>
                                        </div>
                                        <!-- <div class="form-divider"></div>
                                        <div class="social mt-3">
                                            <div class="form-group btn-showcase d-flex">
                                                <button class="btn social-btn btn-fb d-inline-block"> <i class="fa fa-facebook"></i></button>
                                                <button class="btn social-btn btn-twitter d-inline-block"><i class="fa fa-google"></i></button>
                                                <button class="btn social-btn btn-google d-inline-block"><i class="fa fa-twitter"></i></button>
                                                <button class="btn social-btn btn-github d-inline-block"><i class="fa fa-github"></i></button>
                                            </div>
                                        </div> -->
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- sign up page ends-->
        </div>
    </div>
    <!-- page-wrapper Ends-->
</template>

<script>
    import { api_server } from '@/main'
    export default {
        name: 'signUp',
        data(){
            return{
                isLoading: false,
                form:{
                    username: "",
                    email: "",
                    password: ""
                },
            }
        },
        methods:{
            signUp(){
                this.isLoading = true;
                api_server.post('/auth/register', JSON.stringify(this.form))
                .then(response =>{
                    console.log(response)
                    if (response.status == 200){
                     console.log('success')
                     this.$toasted.show('registration success!',{
                         theme: 'bubble',
                         position: "top-right",
                         type: 'success',
                         duration: 2000
                     })
                     this.isLoading = false
                     this.$router.push('/auth/login')
                    }
                }).catch(err => {
                    console.log(err.response.data)
                    this.$swal({
                        title: 'register failed',
                        type: 'error',
                        text: err.response.data.message
                    })
                    this.isLoading = false
                })
            },
        }
    }

</script>
