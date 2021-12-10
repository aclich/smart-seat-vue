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
                        <p class="h5 txt-primary">Welcome to Smart Seats Management System,<small>{{ userinfo.username }} !</small></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {    
    data(){
        return{
            userinfo: JSON.parse(window.sessionStorage.getItem('userInfo')),
            isLoading: false
        }
    },
    methods:{

    }
}
</script>

<style>

</style>