<template>
    <div>
        <Breadcrumbs title="Bootstrap Tabs"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Basic Tabs</h5>
                      </div>
                      <div class="card-body">
                        <b-tabs>
                            <b-tab title="Home" active>
                                <p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                                
                            </b-tab>
                            <b-tab title="Profile">
                                <p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                            <b-tab title="Contact">
                                <p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                        </b-tabs>
                      </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Tabs bottom left Align</h5>
                      </div>
                      <div class="card-body">
                        <b-tabs bottom>
                            <b-tab title="Home" active>
                                <template slot="title">
                                    <i class="fa fa-home"></i>Home
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
                        <h5>Tabs With Icon </h5>
                      </div>
                      <div class="card-body">
                        <b-tabs>
                            <b-tab title="Home" active>
                                <template slot="title">
                                    <i class="fa fa-home"></i>Home
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
                        <h5>Tabs Right Align</h5>
                      </div>
                      <div class="card-body">
                        <b-tabs nav-class="nav-right">
                            <b-tab title="Home" active>
                                <template slot="title">
                                    <i class="fa fa-home"></i>Home
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
                        <h5>Tabs Vertical</h5>
                      </div>
                      <div class="card-body">
                        <b-tabs pills card vertical>
                            <b-tab title="Home" active>
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                            <b-tab title="Profile">
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                            <b-tab title="Contact">
                                <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                        </b-tabs>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Pill Tabs</h5>
                      </div>
                      <div class="card-body">
                        <b-tabs pills>
                            <b-tab title="Home" active>
                                <p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                                
                            </b-tab>
                            <b-tab title="Profile">
                                <p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                            <b-tab title="Contact">
                                <p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </b-tab>
                        </b-tabs>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-xl-6 xl-100">
                    <div class="card">
                      <div class="card-header">
                        <h5>Pill Tabs With Icon</h5>
                      </div>
                      <div class="card-body">
                        <b-tabs pills>
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
                    <div class="card height-equal">
                      <div class="card-header">
                        <h5>Pill Dark color</h5><span>Add <code>.nav-*</code> class with nav class</span><span>remove  <code>nav-pill</code> class from pill style Tab</span>
                      </div>
                      <div class="card-body">
                        <b-tabs nav-class="nav-dark">
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
                        <h5>Primary Color</h5><span>Add <code>.nav-primary</code> class with nav class</span>
                      </div>
                      <div class="card-body">
                        <b-tabs nav-class="nav-primary">
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
                        <h5>Secondary Color</h5><span>Add <code>.nav-secondary</code> class with nav class</span>
                      </div>
                      <div class="card-body">

                        <b-tabs pills nav-class="nav-secondary">
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
                        <h5>Success Color</h5><span>Add <code>.nav-success</code> class with nav class</span>
                      </div>
                      <div class="card-body">

                        <b-tabs pills nav-class="nav-success">
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
                        <h5>Info Color</h5><span>Add <code>.nav-info</code> class with nav class</span>
                      </div>
                      <div class="card-body">

                        <b-tabs pills nav-class="nav-info">
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
                        <h5>Warning Color</h5><span>Add <code>.nav-warning</code> class with nav class</span>
                      </div>
                      <div class="card-body">

                        <b-tabs pills nav-class="nav-warning">
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
                        <h5>Danger Color</h5><span>Add <code>.nav-danger</code> class with nav class</span>
                      </div>
                      <div class="card-body">

                        <b-tabs pills nav-class="nav-danger">
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

            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
    export default {
    }
</script>