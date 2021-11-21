<template>
  <div>
    <Breadcrumbs main title="Knowledge Base" />

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 xl-50 col-sm-6">
          <div class="card bg-primary">
            <div class="card-body">
              <div class="media faq-widgets">
                <div class="media-body">
                  <h5>Articles</h5>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <feather type="book-open"></feather>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-50 col-sm-6">
          <div class="card bg-primary">
            <div class="card-body">
              <div class="media faq-widgets">
                <div class="media-body">
                  <h5>Knowledgebase</h5>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <feather type="aperture"></feather>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-100">
          <div class="card bg-primary">
            <div class="card-body">
              <div class="media faq-widgets">
                <div class="media-body">
                  <h5>Support</h5>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <feather type="file-text"></feather>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-6">
              <div class="header-faq">
                <h5 class="mb-0">Browse articles by category</h5>
              </div>
            </div>

            <div class="col-sm-6">
              <form class="form-inline search-form pull-right search-knowledge">
                <div class="form-group mr-0">
                  <input
                    class="form-control-plaintext"
                    name="search"
                    placeholder="Search.."
                    type="text"
                    v-model="searchtxt"
                  />
                </div>
              </form>
            </div>
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h5>Browse Articles</h5>
                </div>
                <div class="card-body">
                  <div class="row browse">
                    <div
                      class="col-xl-4 xl-50"
                      v-for="(kbcate,index) in filteredList"
                      :key="'kbcate'+index"
                    >
                      <div class="browse-articles">
                        <h6>
                          <span>
                            <feather type="archive"></feather>
                          </span>
                          {{ kbcate.title }}
                        </h6>
                        <ul v-html="kbcate.desc"></ul>
                      </div>
                    </div>
                    <div v-if="!filteredList.length" class="col-12">
                      <div class="search-not-found knowledge-search-height text-center">
                        <div>
                          <img
                            src="../../assets/images/search-not-found.png"
                            alt
                            class="second-search"
                          />
                          <p>Sorry, We didn't find any results matching this search</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="header-faq">
            <h5 class="mb-0">Featured Tutorials</h5>
          </div>
          <div class="row">
            <div class="col-xl-3 xl-50 col-md-6">
              <div class="card features-faq product-box">
                <div class="faq-image product-img">
                  <img class="img-fluid" src="../../assets/images/faq/1.jpg" alt />
                  <div class="product-hover">
                    <ul>
                      <li>
                        <i class="icon-link"></i>
                      </li>
                      <li>
                        <i class="icon-import"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <h6>Web Design</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <div class="card-footer">
                  <span>Dec 15, 2019</span>
                  <span class="pull-right">
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 xl-50 col-md-6">
              <div class="card features-faq product-box">
                <div class="faq-image product-img">
                  <img class="img-fluid" src="../../assets/images/faq/2.jpg" alt />
                  <div class="product-hover">
                    <ul>
                      <li>
                        <i class="icon-link"></i>
                      </li>
                      <li>
                        <i class="icon-import"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <h6>Web Development</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <div class="card-footer">
                  <span>Dec 15, 2019</span>
                  <span class="pull-right">
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star-o font-primary"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 xl-50 col-md-6">
              <div class="card features-faq product-box">
                <div class="faq-image product-img">
                  <img class="img-fluid" src="../../assets/images/faq/3.jpg" alt />
                  <div class="product-hover">
                    <ul>
                      <li>
                        <i class="icon-link"></i>
                      </li>
                      <li>
                        <i class="icon-import"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <h6>UI Design</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <div class="card-footer">
                  <span>Dec 15, 2019</span>
                  <span class="pull-right">
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xl-3 xl-50 col-md-6">
              <div class="card features-faq product-box">
                <div class="faq-image product-img">
                  <img class="img-fluid" src="../../assets/images/faq/4.jpg" alt />
                  <div class="product-hover">
                    <ul>
                      <li>
                        <i class="icon-link"></i>
                      </li>
                      <li>
                        <i class="icon-import"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <h6>UX Design</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <div class="card-footer">
                  <span>Dec 15, 2019</span>
                  <span class="pull-right">
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star font-primary"></i>
                    <i class="fa fa-star-half-o font-primary"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="header-faq">
            <h5 class="mb-0">Latest articles and videos</h5>
          </div>
          <div class="row">
            <div class="col-xl-4 col-md-6">
              <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <feather type="codepen" class="m-r-30"></feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Using Video</h6>
                          <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <feather type="codepen" class="m-r-30"></feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Vel illum qu</h6>
                          <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <feather type="codepen" class="m-r-30"></feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Cum sociis natoqu</h6>
                          <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <feather type="file-text" class="m-r-30"></feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Donec pede justo</h6>
                          <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <feather type="file-text" class="m-r-30"></feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Nam quam nunc</h6>
                          <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <feather type="file-text" class="m-r-30"></feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Using Video</h6>
                          <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="row">
                <div class="col-xl-12 col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <feather type="youtube" class="m-r-30"></feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Vel illum qu</h6>
                          <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-12 col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <feather type="youtube" class="m-r-30"></feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Cum sociis natoqu</h6>
                          <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <feather type="youtube" class="m-r-30"></feather>
                        <div class="media-body">
                          <h6 class="f-w-600">Donec pede justo</h6>
                          <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Knowledgebase",
  data() {
    return {
      searchtxt: "",
      kbcategory: [
        {
          title: "Quick Questions are answered",
          desc:
            "<li><a href='javascript:void(0)'><span>Lorem Ipsum is simply dummy text of the printing</span></a></li><li><a href='javascript:void(0)'><span>Lorem Ipsum has been the industry's standard dummy </span><span class='badge badge-primary pull-right'>New</span></a></li><li><a href='javascript:void(0)'><span>When an unknown printer took a galley </span></a></li><li><a href='javascript:void(0)'><span>But also the leap into electronic typesetting, </span></a></li><li><a href='javascript:void(0)'><span><feather type='arrow-right'></feather></span><span>See More (40)</span></a></li>"
        },
        {
          title: "Integrating WordPress with Your Website",
          desc:
            "<li><a href='javascript:void(0)'><span>It was popularised in the 1960s with the release</span><span class='badge badge-primary pull-right'>Review</span></a></li><li><a href='javascript:void(0)'><span>Etraset sheets containing Lorem Ipsum passages</span></a></li><li><a href='javascript:void(0)'><span>Desktop publishing software like Aldus PageMaker </span><span class='badge badge-primary pull-right'>Articles</span></a></li><li><a href='javascript:void(0)'><span>Making this the first true generator on the Internet.</span></a></li><li><a href='javascript:void(0)'><span><feather type='arrow-right'></feather></span><span>See More (90)</span></a></li>"
        },
        {
          title: "WordPress Site Maintenance",
          desc:
            "<li><a href='javascript:void(0)'><span>The point of using Lorem Ipsum is that it has a more-or-less </span></a></li><li><a href='javascript:void(0)'><span>Normal distribution of letters, as opposed to using </span><span class='badge badge-primary pull-right'>Closed</span></a></li><li><a href='javascript:void(0)'><span>Lorem Ipsum, you need to be sure there isn't anything </span></a></li><li><a href='javascript:void(0)'><span>Repetition, injected humour, or non-characteristic words etc</span></a></li><li><a href='javascript:void(0)'><span><feather type='arrow-right'></feather></span><span>See More (50)</span></a></li>"
        },
        {
          title: "Meta Tags in WordPress",
          desc:
            "<li><a href='javascript:void(0)'><span>Nemo enim ipsam voluptatem quia voluptas sit </span><span class='badge badge-primary pull-right'>Popular</span></a></li><li><a href='javascript:void(0)'><span>Ipsum quia dolor sit amet, consectetur</span></a></li><li><a href='javascript:void(0)'><span>Sed quia non numquam eius modi tempora incidunt</span></a></li><li><a href='javascript:void(0)'><span>Lorem eum fugiat quo voluptas nulla pariatu</span></a></li><li><a href='javascript:void(0)'><span><feather type='arrow-right'></feather></span><span>See More (90)</span></a></li>"
        },
        {
          title: "WordPress in Your Language",
          desc:
            "<li><a href='javascript:void(0)'><span>Desktop publishing software like Aldus PageMaker</span></a></li><li><a href='javascript:void(0)'><span>Etraset sheets containing Lorem Ipsum passages</span></a></li><li><a href='javascript:void(0)'><span>It was popularised in the 1960s with the release</span></a></li><li><a href='javascript:void(0)'><span>Making this the first true generator on the Internet</span><span class='badge badge-primary pull-right'>Closed</span></a></li><li><a href='javascript:void(0)'><span><feather type='arrow-right'></feather></span><span>See More (50)</span></a></li>"
        },
        {
          title: "Know Your Sources",
          desc:
            "<li><a href='javascript:void(0)'><span>The point of using Lorem Ipsum </span></a></li><li><a href='javascript:void(0)'><span>It has a more-or-less normal distribution of letters</span></a></li><li><a href='javascript:void(0)'><span>Et harum quidem rerum facilis est et expedita</span><span class='badge badge-primary pull-right'>Article</span></a></li><li><a href='javascript:void(0)'><span>Nam libero tempore, cum soluta nobis est eligendi </span></a></li><li><a href='javascript:void(0)'><span><feather type='arrow-right'></feather></span><span>See More (26)</span></a></li>"
        },
        {
          title: "Validating a Website",
          desc:
            "<li><a href='javascript:void(0)'><span>When our power of choice is untrammelled </span><span class='badge badge-primary pull-right'>Review</span></a></li><li><a href='javascript:void(0)'><span>It will frequently occur that pleasures </span></a></li><li><a href='javascript:void(0)'><span>who fail in their duty through weakness </span><span class='badge badge-primary pull-right'>Closed</span></a></li><li><a href='javascript:void(0)'><span> At vero eos et accusamus et iusto </span></a></li><li><a href='javascript:void(0)'><span><feather type='arrow-right'>feather></span><span>See More (10)</span></a></li>"
        },
        {
          title: "Quick Questions are answered",
          desc:
            "<li><a href='javascript:void(0)'><span>Quis autem vel eum iure reprehenderit </span></a></li><li><a href='javascript:void(0)'><span>Ducimus blanditiis praesentium voluptatum</span><span class='badge badge-primary pull-right'>Popular</span></a></li><li><a href='javascript:void(0)'><span>Omnis voluptas assumenda est</span><span class='badge badge-primary pull-right'>Review</span></a></li><li><a href='javascript:void(0)'><span>Produces no resultant pleasure</span></a></li><li><a href='javascript:void(0)'><span><feather type='arrow-right'></feather></span><span>See More (21)</span></a></li>"
        },
        {
          title: "Integrating WordPress with Your Website",
          desc:
            "<li><a href='javascript:void(0)'><span>Lorem Ipsum passage, and going through</span></a></li><li><a href='javascript:void(0)'><span>The first line of Lorem Ipsum, Lorem ipsum </span></a></li><li><a href='javascript:void(0)'><span>Thus comes from a line in section</span></a></li><li><a href='javascript:void(0)'><span>First true generator on the Internet</span><span class='badge badge-primary pull-right'>On hold</span></a></li><li><a href='javascript:void(0)'><span><feather type='arrow-right'></feather></span><span>See More (34)</span></a></li>"
        }
      ]
    };
  },
  computed: {
    filteredList() {
      return this.kbcategory.filter(kbcat => {
        if (kbcat.title.toLowerCase().includes(this.searchtxt.toLowerCase())) {
          return kbcat.title
            .toLowerCase()
            .includes(this.searchtxt.toLowerCase());
        } else if (
          kbcat.desc.toLowerCase().includes(this.searchtxt.toLowerCase())
        ) {
          return kbcat.desc
            .toLowerCase()
            .includes(this.searchtxt.toLowerCase());
        }
      });
    }
  }
};
</script>

<style>
.search-form.search-knowledge .form-group {
  position: relative;
}
.search-form.search-knowledge .form-group:after {
  position: absolute;
  content: "\F002";
  font-family: FontAwesome;
  top: 10px;
  left: 30px;
}
</style>
