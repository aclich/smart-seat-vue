<template>
    <div>
    <Breadcrumbs main="Seats" title="History Record"/>
        <loading
        loader="dots"
        :active.sync="loading_state"
        :can-cancel="false"
        :is-full-page="true"
        ></loading>
        <!--container-fluid starts -->
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h5>選擇坐墊</h5>
                    <span>請選擇您想要查詢的坐墊</span>
                </div>
                <div class="card-body">
                    <div class='row'>
                        <div class="col-md-3">
                            <label for="seat_selection">坐墊名稱 / 型號 : </label>
                            <b-form-select id="seat_selection" v-model="selected" :options="seat_options"></b-form-select>
                        </div>
                        <div class = "col-md-3">
                            <br/>
                            <b-button @click="search" :disabled="selected == null" variant="primary">查詢</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
import { api_server } from "@/main"
export default {
    data(){
        return {
            seat_options:[
                {value: null, text:"請選擇坐墊......"}
                ],
            selected: null,
        }
    },
    created(){
        this.get_seat_list()
    },
    computed:{
        loading_state: function(){
            return this.$store.state.isLoading
        }
    },
    watch:{
    },
    methods:{
        get_seat_list(){
            api_server.get('/seat/get-seat-list')
            .then(res =>{
                var seat_list = res.data.data
                seat_list.forEach(element => {
                    this.seat_options.push(element)
                });
            }).catch(err =>{
                console.log(err.response)
                this.$swal({
                    title: "獲取註冊坐墊列表失敗",
                    type: "error",
                    text: err.response.statusText
                })
            })
        },
        search(){
            let to =  `/sensor/records/${ this.selected }`
            console.log(this.$route.path)
            if(to == this.$route.path){
                this.$store.commit('trigger_update_flag')
            }
            else{
                this.$router.push(to)
            }
        }
    }
}
</script>