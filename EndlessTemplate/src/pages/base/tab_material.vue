<template>
    <div>
        <Breadcrumbs title="Line Tabs"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Simple Material style tab</h5><span>Add <code>.border-tab</code> class with nav class</span>
                      </div>
                      <div class="card-body">
                        <b-tabs nav-class="border-tab">
                            <b-tab title="Home" active>
                                <template slot="title">
                                    <i class="fa fa-home"></i> Home
                                </template>
                                <p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                                
                            </b-tab>
                            <b-tab title="Profile">
                                <template slot="title">
                                    <i class="fa fa-user"></i>Profile
                                </template>
                                <p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                            <b-tab title="Contact">
                                <template slot="title">
                                    <i class="fa fa-address-book"></i>Contact
                                </template>
                                <p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                        </b-tabs>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Material style bottom tab</h5><span>Add <code>.border-tab</code> class with nav class</span>
                      </div>
                      <div class="card-body">
                        <b-tabs nav-class="border-tab" bottom>
                            <b-tab title="Home" active>
                                <template slot="title">
                                    <i class="fa fa-home"></i> Home
                                </template>
                                <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                                
                            </b-tab>
                            <b-tab title="Profile">
                                <template slot="title">
                                    <i class="fa fa-user"></i>Profile
                                </template>
                                <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                            <b-tab title="Contact">
                                <template slot="title">
                                    <i class="fa fa-address-book"></i>Contact
                                </template>
                                <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                        </b-tabs>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Material style left tab</h5><span>Add <code>.border-tab</code> class with nav class</span>
                      </div>
                      <div class="card-body">
                        <div class="row">

                            <b-tabs nav-class="border-tab nav-left" vertical>
                                <b-tab title="Home" active>
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                                
                                </b-tab>
                                <b-tab title="Profile">
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                            </b-tabs>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Material style right tab</h5><span>Add <code>.border-tab</code> class with nav class</span>
                      </div>
                      <div class="card-body">
                        <div class="row">

                            <b-tabs nav-class="border-tab nav-right" vertical>
                                <b-tab title="Home" active>
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                                
                                </b-tab>
                                <b-tab title="Profile">
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                            </b-tabs>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Material color tab</h5><span>Add <code>.nav-primary</code> class with nav class</span>
                      </div>
                      <div class="card-body">
                        <div class="row">

                            <b-tabs nav-class="border-tab nav-primary">
                                <b-tab title="Home" active>
                                    <template slot="title">
                                        <i class="fa fa-home"></i> Home
                                    </template>
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                                
                                </b-tab>
                                <b-tab title="Profile">
                                    <template slot="title">
                                        <i class="fa fa-user"></i> Home
                                    </template>
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template slot="title">
                                        <i class="fa fa-address-book"></i> Home
                                    </template>
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                            </b-tabs>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Material color tab</h5><span>Add <code>.nav-secondary</code> class with nav class</span>
                      </div>
                      <div class="card-body">
                        <div class="row">

                            <b-tabs nav-class="border-tab nav-secondary">
                                <b-tab title="Home" active>
                                    <template slot="title">
                                        <i class="fa fa-home"></i> Home
                                    </template>
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                                
                                </b-tab>
                                <b-tab title="Profile">
                                    <template slot="title">
                                        <i class="fa fa-user"></i> Home
                                    </template>
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template slot="title">
                                        <i class="fa fa-address-book"></i> Home
                                    </template>
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                            </b-tabs>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Material style left tab</h5><span>Add <code>.nav-success</code> class with nav class</span>
                      </div>
                      <div class="card-body">
                        <div class="row">

                            <b-tabs nav-class="border-tab nav-left nav-success" vertical>
                                <b-tab title="Home" active>
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                                
                                </b-tab>
                                <b-tab title="Profile">
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                            </b-tabs>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Material style right tab</h5><span>Add <code>.nav-info</code> class with nav class</span>
                      </div>
                      <div class="card-body">
                        <div class="row">

                            <b-tabs nav-class="border-tab nav-right nav-info" vertical>
                                <b-tab title="Home" active>
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                                
                                </b-tab>
                                <b-tab title="Profile">
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </b-tab>
                            </b-tabs>
                          
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
    export default {
    }
</script>