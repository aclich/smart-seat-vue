<template>
    <div>
        <Breadcrumbs title="User Management"/>
        <loading
        loader="dots"
        :active.sync="isloading"
        :can-cancel="false"
        :is-full-page="true"
        ></loading>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h5>使用者管理</h5><span>查看與管理使用者資訊</span>
                </div>
                <div class="card-body">
                    <b-table hover striped :fields="fields" :items="user_list" responsive='sm'>
                        <template v-if="userinfo.userrole=='sa'" #cell(user_role)="data">
                            <span v-if="data.value == 'sa'">Super Admin</span>
                            <b-form-select v-else v-model="data.item.user_role" :options="options" class="w-75"></b-form-select>
                        </template>
                    </b-table>
                    <b-button class="btn btn-success btn-ms m-1" @click="save_change()"><i class="fa fa-pencil"></i>儲存</b-button>
                </div>
            </div>
            </div>               
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
import {api_server} from '@/main'
export default {
    data(){
        return{
        isloading: false,
        userinfo: JSON.parse(window.sessionStorage.getItem('userInfo')),
        options: [{value: 'user', text: 'user'},
                  {value: 'admin', text: 'admin'}],
        fields:[{key:'id', label:'使用者ID'},
                {key: 'username', label:'使用者名稱'},
                {key: 'email', label: '登入信箱'},
                {key: 'password', label: '密碼'},
                {key: 'user_role', label: '角色'},
                {key: 'created', label: '註冊時間'},
                ],
        user_list: [
    ]
        }
    },
    created(){
        this.get_user_list()
    },
    methods:{
        role_change(data){
            console.log(data)
            // this.userinfo[data.index] = data.value
        },
        get_user_list(){
            this.isloading = true
            api_server.get('/admin/user_management')
            .then(res=>{
                this.user_list = res.data.data
            }).catch(err=>{
                console.log(err.response)
                this.$swal({
                    title: '錯誤',
                    type: 'error',
                    text:'連線不穩定，請重新整理!'
                })
            }).finally(()=>{
                this.isloading = false
            })
        },
        save_change(){
            this.$swal({
                title: "確定儲存變更嗎?",
                type: 'info',
                showCancelButton: true,
                cancelButtonText: '取消',
                confirmButtonText: '確定'
            }).then(result=>{
                if (result.value){
                    this.isloading = true
                    api_server.post('/admin/user_management', {data: this.user_list})
                    .then(res=>{
                        this.$swal({
                            title: '修改成功',
                            type: 'success',
                            text: `成功修改 ${res.data.data} 位使用者的權限`
                        })
                        this.get_user_list()
                    }).catch(err=>{
                        console.log(err.response)
                        this.$swal({
                            title: '錯誤',
                            type: 'error',
                            text: '連線不穩定，請重新整理後在試一次!'
                        })
                    }).finally(()=>{
                        this.isloading = false
                    })
                }
            })
        }
    }
}
</script>