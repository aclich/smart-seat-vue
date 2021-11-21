<template>
  <div>
    <Breadcrumbs main="Base" title="navs" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5>Default Nav</h5>
            </div>
            <div class="card-body">
              <ul class="icon-lists border navs-icon">
                <li>
                  <a href="#">
                    <feather type="home"></feather>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="airplay"></feather>
                    <span>Widgets</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="box"></feather>
                    <span>Base</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="file-text"></feather>
                    <span>Forms</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="server"></feather>
                    <span>Tables</span>
                  </a>
                </li>
              </ul>

              <ul>
                <li class="onhover-dropdown navs-dropdown">
                  <b-button id="default-primary" variant="primary">
                    Dropdown Example
                    <i class="icon-arrow-down pl-1"></i>
                  </b-button>
                  <ul class="icon-lists navs-icon onhover-show-div">
                    <li>
                      <a href="#">
                        <feather type="home"></feather>
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="airplay"></feather>
                        <span>Widgets</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="box"></feather>
                        <span>Base</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="file-text"></feather>
                        <span>Forms</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="server"></feather>
                        <span>Tables</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5>Item Bullets</h5>
            </div>
            <div class="card-body">
              <div class="border nav-list">
                <ul class="nav-list-disc">
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      <span>Widgets</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      <span>Base</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      <span>Forms</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      <span>Tables</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div class="onhover-dropdown navs-dropdown">
                  <b-button id="default-primary-1" variant="primary">
                    Dropdown Example
                    <i class="icon-arrow-down pl-1"></i>
                  </b-button>
                  <div class="nav-list onhover-show-div">
                    <ul class="nav-list-disc">
                      <li>
                        <a href="#">
                          <i class="fa fa-angle-right"></i>
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-angle-right"></i>
                          <span>Widgets</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-angle-right"></i>
                          <span>Base</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-angle-right"></i>
                          <span>Forms</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-angle-right"></i>
                          <span>Tables</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card height-equal">
            <div class="card-header">
              <h5>Section and Separator</h5>
            </div>
            <div class="card-body">
              <ul class="icon-lists border navs-icon">
                <li>
                  <h5 class="mb-0">General</h5>
                </li>
                <li>
                  <a href="#">
                    <feather type="home"></feather>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li class="pb-0">
                  <a href="#">
                    <feather type="airplay"></feather>
                    <span>Widgets</span>
                  </a>
                </li>
                <li class="main-section">
                  <h5 class="mb-0">Layout</h5>
                </li>
                <li>
                  <a href="#">
                    <feather type="sidebar"></feather>
                    <span>Sidebar</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="layout"></feather>
                    <span>Page Layout</span>
                  </a>
                </li>
                <li class="pb-0">
                  <a href="#">
                    <feather type="cloud-lightning"></feather>
                    <span>Footers</span>
                  </a>
                </li>
                <li class="separator"></li>
                <li class="pt-0">
                  <button class="btn btn-pill btn-outline-primary">Log Out</button>
                </li>
              </ul>
              <ul>
                <li class="onhover-dropdown navs-dropdown">
                  <b-button id="default-primary-2" variant="primary">
                    Dropdown Example
                    <i class="icon-arrow-down pl-1"></i>
                  </b-button>
                  <ul class="icon-lists navs-icon onhover-show-div">
                    <li>
                      <h5 class="mb-0">General</h5>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="home"></feather>
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li class="pb-0">
                      <a href="#">
                        <feather type="airplay"></feather>
                        <span>Widgets</span>
                      </a>
                    </li>
                    <li class="main-section">
                      <h5 class="mb-0">Layout</h5>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="sidebar"></feather>
                        <span>Sidebar</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="layout"></feather>
                        <span>Page Layout</span>
                      </a>
                    </li>
                    <li class="pb-0">
                      <a href="#">
                        <feather type="cloud-lightning"></feather>
                        <span>Footers</span>
                      </a>
                    </li>
                    <li class="separator"></li>
                    <li class="pt-0">
                      <button class="btn btn-pill btn-outline-primary">Log Out</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card height-equal">
            <div class="card-header">
              <h5>Active and Disabled Links</h5>
            </div>
            <div class="card-body">
              <ul class="icon-lists border navs-icon">
                <li>
                  <a class="active" href="#">
                    <feather type="home"></feather>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="airplay"></feather>
                    <span>Widgets</span>
                  </a>
                </li>
                <li>
                  <a class="disabled" href="#">
                    <feather type="box"></feather>
                    <span>Base</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="file-text"></feather>
                    <span>Forms</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="server"></feather>
                    <span>Tables</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="credit-card"></feather>
                    <span>Cards</span>
                  </a>
                </li>
                <li>
                  <a class="disabled" href="#">
                    <feather type="sliders"></feather>
                    <span>Timeline</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="bar-chart"></feather>
                    <span>Charts</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="map"></feather>
                    <span>Maps</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <feather type="git-pull-request"></feather>
                    <span>Editors</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="onhover-dropdown navs-dropdown">
                  <b-button id="default-primary-3" variant="primary">
                    Dropdown Example
                    <i class="icon-arrow-down pl-1"></i>
                  </b-button>
                  <ul class="icon-lists border navs-icon onhover-show-div">
                    <li>
                      <a class="active" href="#">
                        <feather type="home"></feather>
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="airplay"></feather>
                        <span>Widgets</span>
                      </a>
                    </li>
                    <li>
                      <a class="disabled" href="#">
                        <feather type="box"></feather>
                        <span>Base</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="file-text"></feather>
                        <span>Forms</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="server"></feather>
                        <span>Tables</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="credit-card"></feather>
                        <span>Cards</span>
                      </a>
                    </li>
                    <li>
                      <a class="disabled" href="#">
                        <feather type="sliders"></feather>
                        <span>Timeline</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="bar-chart"></feather>
                        <span>Charts</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="map"></feather>
                        <span>Maps</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="git-pull-request"></feather>
                        <span>Editors</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-xl-6 xl-40 col-lg-12">
          <div class="card">
            <div class="card-header">
              <h5>Inline Nav</h5>
            </div>
            <div class="card-body">
              <ul class="icon-lists border navs-icon inline-nav">
                <li>
                  <a href="#">
                    <feather type="box"></feather>
                    <span>Base</span>
                  </a>
                </li>
                <li class="pl-navs-inline">
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    <span>State Color</span>
                  </a>
                </li>
                <li class="pl-navs-inline">
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    <span>Typography</span>
                  </a>
                </li>
                <li class="pl-navs-inline">
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    <span>Grid</span>
                  </a>
                </li>
                <li class="pl-navs-inline">
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    <span>Tags & Pills</span>
                  </a>
                </li>
                <li class="pl-navs-inline">
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    <span>Progress</span>
                  </a>
                </li>
                <li class="pl-navs-inline">
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    <span>Modal</span>
                  </a>
                </li>
                <li class="pl-navs-inline">
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    <span>Alert</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-xl-6 xl-60 col-lg-12">
          <div class="card">
            <div class="card-header">
              <h5>Sub Nav</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <div>
                    <h5>Static Sub Nav</h5>
                  </div>
                  <ul class="icon-lists border navs-icon">
                    <li>
                      <a href="#">
                        <feather type="box"></feather>
                        <span>Base</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="folder-plus"></feather>
                        <span>Advance</span>
                      </a>
                      <ul>
                        <li class="pl-navs-inline">
                          <a href="#">
                            <i class="fa fa-angle-right"></i>Scrollable
                          </a>
                        </li>
                        <li class="pl-navs-inline">
                          <a href="#">
                            <i class="fa fa-angle-right"></i>Tree View
                          </a>
                        </li>
                        <li class="pl-navs-inline">
                          <a href="#">
                            <i class="fa fa-angle-right"></i>Rating
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="file-text"></feather>
                        <span>Forms</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="server"></feather>
                        <span>Tables</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 nav-md-mt">
                  <div>
                    <h5>Toggle Sub Nav</h5>
                  </div>
                  <!-- <ul
                    class="icon-lists border navs-icon default-according style-1"
                    id="accordionoc" role="tablist">
                    <li>
                      <a href="#">
                        <feather type="box"></feather>
                        <span>Base</span>
                      </a>
                    </li>
                    <li header-tag="header" class="p-1" role="tab">
                      <button
                        type="button"
                        v-b-toggle.accordion-1
                        class="btn btn-link text-muted active"
                      >
                        <feather type="folder-plus"></feather>
                        <span>Advance</span>
                      </button>
                      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                        <ul>
                          <li class="pl-navs-inline">
                            <a href="#">
                              <i class="fa fa-angle-right"></i>Scrollable
                            </a>
                          </li>
                          <li class="pl-navs-inline">
                            <a href="#">
                              <i class="fa fa-angle-right"></i>Tree View
                            </a>
                          </li>
                          <li class="pl-navs-inline">
                            <a href="#">
                              <i class="fa fa-angle-right"></i>Rating
                            </a>
                          </li>
                        </ul>
                      </b-collapse>
                    </li>
                    <li>
                      <a href="#">
                        <feather type="file-text"></feather>
                        <span>Forms</span>
                      </a>
                    </li>
                    <li header-tag="header" class="p-1" role="tab">
                      <button block
                        type="button"
                        v-b-toggle.accordion-2
                        class="btn btn-link text-muted collapsed pb-0"
                      >
                        <feather type="server"></feather>Tables
                      </button>
                      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <ul>
                          <li class="pl-navs-inline">
                            <a href="#">
                              <i class="fa fa-angle-right"></i>New
                            </a>
                          </li>
                          <li class="pl-navs-inline">
                            <a href="#">
                              <i class="fa fa-angle-right"></i>Replied
                            </a>
                          </li>
                          <li class="pl-navs-inline">
                            <a href="#">
                              <i class="fa fa-angle-right"></i>Panding
                            </a>
                          </li>
                        </ul>
                      </b-collapse>
                    </li>
                  </ul> -->
                  <div class="default-according style-1 toggle-accordion border">
                        
                        <b-card no-body>
                          <b-card-header header-tag="div">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_icon_open_close_1 >
                                  <feather type="box" class="middle"></feather>
                                  <span>Base</span>
                                </b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_icon_open_close_1" visible accordion="my-accordion-icon-open-close" role="tabpanel">
                            <b-card-body class="py-0">
                              <b-card-text>
                                <ul>
                                  <li class="pl-navs-inline">
                                    <a href="#">
                                      <i class="fa fa-angle-right"></i>New
                                    </a>
                                  </li>
                                  <li class="pl-navs-inline">
                                    <a href="#">
                                      <i class="fa fa-angle-right"></i>Replied
                                    </a>
                                  </li>
                                  <li class="pl-navs-inline">
                                    <a href="#">
                                      <i class="fa fa-angle-right"></i>Panding
                                    </a>
                                  </li>
                                </ul>
                              </b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body>
                          <b-card-header header-tag="div">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_icon_open_close_2 ><feather type="folder-plus" class="middle"></feather> Advance</b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_icon_open_close_2" accordion="my-accordion-icon-open-close" role="tabpanel">
                            <b-card-body class="py-0">
                              <b-card-text>
                                <ul>
                                <li class="pl-navs-inline">
                                  <a href="#">
                                    <i class="fa fa-angle-right"></i>Scrollable
                                  </a>
                                </li>
                                <li class="pl-navs-inline">
                                  <a href="#">
                                    <i class="fa fa-angle-right"></i>Tree View
                                  </a>
                                </li>
                                <li class="pl-navs-inline">
                                  <a href="#">
                                    <i class="fa fa-angle-right"></i>Rating
                                  </a>
                                </li>
                              </ul>
                              </b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body>
                          <b-card-header header-tag="div">
                            <h5 class="mb-0">
                                <b-button v-b-toggle.primary_icon_open_close_3 ><feather type="server" class="middle"></feather> Tables</b-button>
                            </h5>
                          </b-card-header>
                          <b-collapse id="primary_icon_open_close_3" accordion="my-accordion-icon-open-close" role="tabpanel">
                            <b-card-body class="py-0">
                              <b-card-text>
                                <ul>
                                <li class="pl-navs-inline">
                                  <a href="#">
                                    <i class="fa fa-angle-right"></i>New
                                  </a>
                                </li>
                                <li class="pl-navs-inline">
                                  <a href="#">
                                    <i class="fa fa-angle-right"></i>Replied
                                  </a>
                                </li>
                                <li class="pl-navs-inline">
                                  <a href="#">
                                    <i class="fa fa-angle-right"></i>Panding
                                  </a>
                                </li>
                              </ul>
                              </b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>
                      </div>
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
export default {
  data() {
    return {
      advancecollapse: true,
      tablescollapse: false
    };
  }
};
</script>
