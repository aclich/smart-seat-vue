<template>
    <div>
        <Breadcrumbs main="Superuser" title="SQL Injection"/>
        <!-- Container-fluid starts-->
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
                            <label> {{ sql_data }} </label>
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
                sql_data: "",
                sql_cmd: ""
            }
        },
        methods:{
            send_sql_cmd(){
                console.log(this.sql_cmd)
                api_server.post('s/mdkp4ga', JSON.stringify({sql_cmd: this.sql_cmd}))
                .then(response =>{
                    console.log(response)
                    this.sql_data = response.data.message
                }).catch(err =>{
                    console.log(err)
                    this.$swal({
                        title: "Command Running Failed!",
                        type: "error",
                        text: err.data.message
                    })
                })
            }
        }
    }
</script>
