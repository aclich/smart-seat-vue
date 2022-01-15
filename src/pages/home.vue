<template>
<div>
    <Breadcrumbs title="Home" />
<!-- Container-fluid starts-->
    <div class="container-fluid">
        <loading
            loader="dots"
            :active.sync="isLoading"
            :can-cancel="false"
            :is-full-page="true"
        ></loading>
        <!-- <h1>Smart Sensor Seats</h1> -->
        <div class='row'>
            <div class='col-xl-8 xl-100'>
                <div class="card">
                    <div class="card-header typography">
                        <p class="h5 txt-primary">歡迎來到壓力坐墊紀錄系統, <small>{{ userinfo.username }} !</small></p>
                        <p>您一共有 <span class="txt-danger">{{ seat_info.seat_count }}</span> 個坐墊，共記錄了 <span class="txt-danger">{{ seat_info.record_count }}</span> 筆記錄!</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import {api_server} from '@/main'
export default {    
    data(){
        return{
            userinfo: JSON.parse(window.sessionStorage.getItem('userInfo')),
            seat_info: {seat_count: '-', record_count: '-'},
            isLoading: false
        }
    },
    created(){
        api_server.get("/dashboard").then(res=>{
            this.seat_info = res.data.data
        }).catch(err=>{
            console.log(err)
            let err_text = (err.response.status == 500 ? '連線不穩定，請重新整理!' : err.response.data.message)
            this.$swal({
                title: '發生錯誤',
                type: 'error',
                text: err_text
            })
        })
    },
    methods:{

    }
}
</script>

<style>

</style>