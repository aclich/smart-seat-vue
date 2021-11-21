<template>
<!-- Container-fluid starts-->
    <div class="container-fluid">
        <loading
            loader="dots"
            :active.sync="isLoading"
            :can-cancel="false"
            :is-full-page="true"
        ></loading>
        <div class="card">
        <label> hello {{ this.username }} ! </label>
        <b-button type="button" v-on:click="Loading" variant="primary">Loading</b-button>
        </div>
    </div>
</template>

<script>
export default {    
    data(){
        return{
            username: 'test',
            isLoading: false
        }
    },
    methods:{
        Loading(){
            this.username = 'loding1'
            this.isLoading = true
            setTimeout(() => {
                this.isLoading = false
            }, 2000);
        }
    }
}
</script>

<style>

</style>