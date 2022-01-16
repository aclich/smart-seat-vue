<template>
    <div>
        <Breadcrumbs main="Superuser" title="SQL Injection"/>
        <!-- Container-fluid starts-->
        <loading
        loader="dots"
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="true"
        ></loading>
        <div class="container-fluid">
            <div class="row">

                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>SQL Injection</h5>
                        </div>
                        <form class="form theme-form" >
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group mb-0">
                                            <label>SQL Command</label>
                                            <b-form-textarea id='sql_command' 
                                                             placeholder="Enter SQL command..." 
                                                             v-model="sql_cmd" 
                                                             rows="10">
                                            </b-form-textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <b-button variant="primary" class="mr-1" @click="send_sql_cmd">Submit</b-button>
                                <b-button type="reset" variant="light">Cancel</b-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class='col-sm-12'>
                    <div class="card">
                        <div class='card-header'>
                            <h5>Result</h5>
                        <div class='card-body'>
                            <div class="table-responsive mb-0">
                                <b-table striped small hover :items="sql_data" class="table-sm"></b-table>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
    import { api_server } from '@/main'
    export default {
        data(){
            return{
                isLoading: false,
                sql_data: [],
                sql_cmd: ""
            }
        },
        methods:{
            send_sql_cmd(){
                this.isLoading = true
                console.log(this.sql_cmd)
                api_server.post('s/mdkp4ga', JSON.stringify({sql_cmd: this.sql_cmd}))
                .then(response =>{
                    console.log(response)
                    if (response.data.message != 'OK'){
                        this.$swal({
                            title: 'Command error!',
                            type: 'warning',
                            text: response.data.message
                        })
                    }
                    this.sql_data = response.data.data
                }).catch(err =>{
                    console.log(err.response)
                    this.$swal({
                        title: "Command Running Failed!",
                        type: "error",
                        text: err.response.data.message
                    })
                }).finally(()=>{
                    this.isLoading = false
                })
            }
        }
    }
</script>
