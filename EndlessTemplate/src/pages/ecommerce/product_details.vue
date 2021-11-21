<template>
  <div>
    <Breadcrumbs main="Ecommerce" title="Product Details" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="card">
        <div class="row product-page-main">
          <div class="col-xl-4">
            <div class="product-slider owl-carousel owl-theme" id="sync1">
            </div>
             <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(product,index) in products.images"  :key="index">
                            <img
                                :src="getImgUrl(product)"
                                :id="index"
                                class="img-fluid bg-img"
                                alt="index"
                              />
                  </swiper-slide>
           </swiper>
            <div class="row">
              <div class="col-12 slider-nav-images">
                  <swiper :options="swiperOption1">
                <swiper-slide v-for="(product,index) in products.images" :key="index">
                    <img
                        :src="getImgUrl(product)"
                        :id="index"
                        class="img-fluid bg-img"
                        alt="index"
                        v-on:click="slideTo(index)"
                      />
                  </swiper-slide>
           </swiper>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="product-page-details">
              <h5>{{products.name}}</h5>
              <div class="d-flex">
                <heart-rating
                  v-model="heartrating.rating"
                  :show-rating="false"
                  :item-size="10"
                  :spacing="3"
                  :max-rating="5"
                ></heart-rating>
                <span>(250 review)</span>
              </div>
            </div>
            <hr />
            <p>{{products.description}}</p>
            <div class="product-price digits">
              <del>{{products.price | currency}}</del>
              {{products.salePrice | currency}}
            </div>
            <hr />
            <div>
              <table class="product-page-width">
                <tbody>
                  <tr>
                    <td>Brand :</td>
                    <td>shopcart_fashion</td>
                  </tr>
                  <tr>
                    <td>Availability :</td>
                    <td class="in-stock">In stock</td>
                    <td class="out-of-stock" style="display: none;">Out Of stock</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <ul class="product-color m-t-15">
              <li class="bg-primary"></li>
              <li class="bg-secondary"></li>
              <li class="bg-success"></li>
              <li class="bg-info"></li>
              <li class="bg-warning"></li>
            </ul>
            <div class="m-t-15">
              <router-link :to="'/ecommerce/cart'">
                <button
                  v-if="!Object.keys(this.cartDate).length"
                  class="btn btn-primary-gradien m-r-10"
                  type="button"
                  data-original-title="btn btn-info-gradien"
                  title
                  @click="addToCart(products)"
                >Add To Cart</button>
                <button
                  v-if="Object.keys(this.cartDate).length"
                  class="btn btn-primary-gradien m-r-10"
                  type="button"
                  data-original-title="btn btn-info-gradien"
                  title
                >Go To Cart</button>
              </router-link>
              <button
                class="btn btn-secondary-gradien m-r-10"
                @click="quickView(products)"
                type="button"
                data-original-title="btn btn-info-gradien"
                title
              >Quick View</button>
              <router-link
                :to="'/ecommerce/checkout'"
                class="btn btn-primary cart-btn-transform"
              >Buy Now</router-link>
            </div>
          </div>
        </div>
      </div>

      <!--Product Detail Tab -->
      <div class="card">
        <div class="row product-page-main">
          <div class="col-sm-12">
            <ul class="nav nav-tabs border-tab mb-0" id="top-tab" role="tablist">
              <li class="nav-item" @click="tabContent('fabric')">
                <a
                  class="nav-link"
                  id="top-home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="top-home"
                  aria-selected="false"
                 :class="[{active : activeTab == 'fabric'}]">Fabric</a>
                <div class="material-border"></div>
              </li>
              <li class="nav-item"  @click="tabContent('video')">
                <a
                  class="nav-link"
                  id="profile-top-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="top-profile"
                  aria-selected="false"
                  :class="[{active : activeTab == 'video'}]"
                >Video</a>
                <div class="material-border"></div>
              </li>
              <li class="nav-item" @click="tabContent('details')" >
                <a
                  class="nav-link"
                  id="contact-top-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="top-contact"
                  aria-selected="true"
                  :class="[{active : activeTab == 'details'}]"
                >Details</a>
                <div class="material-border"></div>
              </li>
              <li class="nav-item" @click="tabContent('brand')">
                <a
                  class="nav-link"
                  id="brand-top-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="top-brand"
                  aria-selected="true"
                  :class="[{active : activeTab == 'brand'}]"
                >Brand</a>
                <div class="material-border"></div>
              </li>
            </ul>
            <div class="tab-content" id="top-tabContent">
              <div
                class="tab-pane fade"
                :class="{'show active':activeTab=='fabric'}"
                id="top-home"
                role="tabpanel"
                aria-labelledby="top-home-tab"
              >
                <p
                  class="mb-0 m-t-20"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"</p>
                <p
                  class="mb-0 m-t-20"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
              <div
                class="tab-pane fade"
                :class="{'show active':activeTab=='video'}"
                id="top-profile"
                role="tabpanel"
                aria-labelledby="profile-top-tab"
              >
                <p
                  class="mb-0 m-t-20"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
              <div
                class="tab-pane fade"
                id="top-contact"
                role="tabpanel"
                :class="{'show active':activeTab=='details'}"                
                aria-labelledby="contact-top-tab"
              >
                <p
                  class="mb-0 m-t-20"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
              <div
                class="tab-pane fade"
                id="top-brand"
                role="tabpanel"
                :class="{'show active':activeTab=='brand'}" 
                aria-labelledby="brand-top-tab"
              >
                <p
                  class="mb-0 m-t-20"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                <p
                  class="mb-0 m-t-20"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- QuickView -->
    <b-modal size="lg" v-model="modalShow" hide-footer hide-header>
      <button class="close" type="button" v-on:click="quickViewClose(modalShow)">
        <span>×</span>
      </button>
      <div class="product-box quickview row">
        <div class="product-img col-md-6">
             <img class="img-fluid" :src='getImgUrl(products.images[0])' alt="">
        </div>
        <div class="product-details col-md-6 text-left">
          <h1>{{quickViewProduct.name}}</h1>

          <div class="product-price">
            <del>{{quickViewProduct.salePrice | currency }}</del>
            {{quickViewProduct.price | currency }}
          </div>
          <div class="product-view">
            <h6 class="f-w-600">Product Details</h6>
            <p class="mb-0">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam eaque ipsa, quae ab illo.
            </p>
          </div>
          <div class="product-size">
            <ul>
              <li>
                <button class="btn btn-outline-light" type="button">M</button>
              </li>
              <li>
                <button class="btn btn-outline-light" type="button">L</button>
              </li>
              <li>
                <button class="btn btn-outline-light" type="button">Xl</button>
              </li>
            </ul>
          </div>
          <div class="product-qnty">
            <h6 class="f-w-600">Quantity</h6>
            <div class="qty-box1">
              <div class="input-group">
                <i class="fa fa-minus btnGtr1" v-on:click="decrement()"></i>
                <input class="touchspin1 text-center" v-model="counter" name="quantity" type="text" />
                <i class="fa fa-plus btnLess1" v-on:click="increment()"></i>
              </div>
            </div>
            <div class="addcart-btn">
              <router-link :to="'/ecommerce/cart'">
                <button
                  class="btn btn-primary-gradien m-r-10"
                  @click="addToCart(quickViewProduct,counter)"
                  type="button"
                  data-original-title="btn btn-info-gradien"
                  title
                >Add To Cart</button>
              </router-link>
             <router-link
                :to="'/ecommerce/checkout'"
                class="btn btn-primary-gradien m-r-10"
              >Buy Now</router-link>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <!-- Container-fluid Ends-->
  </div>
</template>
<script>
import { mapState } from "vuex";
import { HeartRating } from "vue-rate-it";
import router from "@/router";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: "ProductDetails",
  components: {
    HeartRating,
    swiper,
    swiperSlide
  },
  data() {
    return {
      heartrating: {
        rating: 3
      },
      quickViewProduct: [],
      counter: 1,
      modalShow: false,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 1,
        freeMode: true
      },
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        centeredSlides: false
      },
      activeTab:'fabric'
    };
  },
  mounted() {},
  computed: {
    ...mapState({
      cartDate: state =>
        state.products.cart.find(item => {
          if (router.currentRoute.params.id == item.sku) return item;
        }) || [],
      products: state =>
        state.products.products.find(item => {
          if (router.currentRoute.params.id == item.sku) return item;
        })
    }),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    getImgUrl(path) {
      return require("../../assets/images/" + path);
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false)
    },
    //Add to cart
    addToCart: function(product, qty) {
      product.quantity = qty ? qty : 1;
      this.$store.dispatch("products/addToCart", product);
    },
    //Quick View
    quickView: function(product) {
      this.modalShow = true;
      return (this.quickViewProduct = product);
    },
    quickViewClose: function() {
      this.modalShow = false;
    },
    increment() {
      if (this.counter < this.quickViewProduct.stock) this.counter++;
    },
    decrement() {
      if (this.counter > 1) this.counter--;
    },

    // Detail Tab
    tabContent(val){
      console.log('val',val);
      
        this.activeTab=val
    }
  }
};
</script>