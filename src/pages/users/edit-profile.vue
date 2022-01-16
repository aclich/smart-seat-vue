<template>
    <div>
        <Breadcrumbs main="Users" title="Edit Profile"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
          <loading
            loader="dots"
            :active.sync="isloading"
            :can-cancel="false"
            :is-full-page="true"
          ></loading>
            <div class="edit-profile">
              <div class="row">
                <div class="col-xl-4">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title mb-0">My Profile</h4>
                      <div class="card-options"><a class="card-options-collapse" href="#" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-toggle="card-remove"><i class="fe fe-x"></i></a></div>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="row mb-2">
                          <div class="col">
                            <h3 class="mb-1">{{ user_info.username }}</h3>
                            <p class="mb-4">{{ user_role_map[user_info.userrole] }}</p>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="form-label">Email</label>
                          <input v-model="user_data.email" class="form-control" type="email" placeholder="your-email@domain.com">
                        </div>
                        <div class="form-group">
                          <label class="form-label">姓名</label>
                          <input id='uname' v-model="user_data.username" class="form-control" type="text" placeholder="Your name">
                          <b-tooltip ref="tool_tip_0" target="uname" placement="right" variant="danger">{{ tool_tip_0_text }}</b-tooltip>
                        </div>
                        <div class="form-group">
                          <label class="form-label">新密碼 (空白為不修改)</label>
                          <input id='pwd1' v-model="new_password" class="form-control" type="password" value="">
                          <b-tooltip ref="tool_tip_1" target="pwd1" placement="right" variant="danger">{{ tool_tip_1_text }}</b-tooltip>
                        </div>
                        <div class="form-group">
                          <label class="form-label">新密碼確認</label>
                          <input id="pwd2" v-model="new_password2" class="form-control" type="password" value="">
                          <b-tooltip ref="tool_tip_2" target="pwd2" placement="right" variant="danger">{{ tool_tip_2_text }}</b-tooltip>
                        </div>
                        <div class="form-footer">
                          <button @click="confirm_change" class="btn btn-primary btn-block">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b-modal ref='typemodal' ok-title="Modify" title="確認密碼" hide-footer>
            <div class="card">
                <div class="card-body">
                    <div class="form-group">
                      <label class="form-label">請輸入原始密碼</label>
                      <input v-model="old_password" id="pwd3" class="form-control" type="password" value="">
                      <b-tooltip ref="tool_tip_3" target="pwd3" placement="right" variant="danger">{{ tool_tip_3_text }}</b-tooltip>
                    </div>
                    <b-button @click="edit_user_data" class='m-1' variant="primary">確認</b-button>
                    <b-button @click="hideModal" class='btn btn-light m-1'>取消</b-button>
                </div>
            </div>
            </b-modal>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
import {api_server} from '@/main'
export default {
  data(){
    return{
      user_info: JSON.parse(window.sessionStorage.getItem('userInfo')),
      user_role_map: {user: '一般使用者', admin:'管理員', sa: '超級管理員'},
      isloading: false,
      user_data: {},
      new_password:'',
      new_password2:'',
      old_password:'',
      pwd_check: true,
      tool_tip_0_text: '',
      tool_tip_1_text: '',
      tool_tip_2_text: '',
      tool_tip_3_text: '',
    }
  },
  created(){
    this.get_user_data()
  },
  methods:{
    get_user_data(){
      this.isloading = true
      api_server.get('/user/edit')
      .then(res=>{
        this.user_data = res.data.data
      }).catch(err=>{
        this.$swal({
          title: '錯誤',
          type: 'error',
          text: err.response.data.message
        })
      }).finally(()=>{
        this.isloading = false
      })
    },
    confirm_change(){
      let email = this.user_data.email
      let check = true
      if(email.indexOf("@") == -1 
         || email.indexOf('@') != email.lastIndexOf('@')
         || email.endsWith('@') || email.startsWith('@')){
        check = false
      }
      if(this.user_data.username.length == 0){
        this.tool_tip_0_text = "請輸入名稱"
        this.$refs.tool_tip_0.$emit('open')
        check = false
      }
      if (this.new_password.length < 6 && this.new_password.length != 0 ){
        this.tool_tip_1_text = "密碼至少需6碼"
        this.$refs.tool_tip_1.$emit('open')
        check = false
      }
      if (this.new_password != this.new_password2){
        this.tool_tip_2_text = "密碼不相符"
        this.$refs.tool_tip_2.$emit('open')
        check = false
      }
      if (!check){
        return
      }
      this.$swal({
        title:'確認修改使用者資訊嗎?',
        type:'info',
        text:'',
        showCancelButton:true,
        cancelButtonText:'取消',
        confirmButtonText:'確認'
      }).then(res=>{
        if(res.value){
          this.showmodal()
        }
      })
    },
    edit_user_data(){
      if(this.old_password.length < 6){
        this.tool_tip_3_text = '密碼至少需6碼'
        this.$refs.tool_tip_3.$emit('open')
        return
      }
      this.isloading = true
      let data = {"user_data": this.user_data, "new_password": this.new_password, "old_password": this.old_password}
      api_server.put('/user/edit', data)
      .then(res=>{
        console.log(res.data.message)
        window.sessionStorage.removeItem('userInfo')
        this.$swal({
          title: '成功', 
          type: 'success', 
          text: '修改成功，請重新登入!'});
        this.$router.push('/auth/login')
      }).catch(err=>{
        console.log(err)
        this.$swal({
          title:'錯誤',
          type:'error',
          text:err.response.data.message
        })
      }).finally(()=>{
        this.isloading = false
      })
    },
    showmodal(){
      this.$refs.typemodal.show()
    },
    hideModal(){
      this.$refs.typemodal.hide()
    },
  }
}
</script>