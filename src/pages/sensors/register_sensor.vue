<template>
    <div>
    <Breadcrumbs main="Seats" title="Seats Management"/>
    <!--container-fluid starts -->
        <loading
        loader="dots"
        :active.sync="loading_state"
        :can-cancel="false"
        :is-full-page="true"
        ></loading>
        <div class="container-fluid">
            <div><RegisterSensor /></div>
            <div><ManageSensor /></div>
        </div>
    </div>
</template>

<script>
import RegisterSensor from './component/register'
import ManageSensor from './component/manage'

export default {
    data(){
        return{
            
        }
    },
    components:{
        RegisterSensor,
        ManageSensor
    },
    created(){

    },
    computed:{
        loading_state: function(){
            console.log('listen vuex isLoading...')
            return this.$store.state.isLoading
        }
    },
    watch:{
        loading_state(){
            console.log('watched loading state changed')
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>