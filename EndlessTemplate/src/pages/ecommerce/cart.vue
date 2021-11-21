<template>
  <div>
    <Breadcrumbs main="Ecommerce" title="Cart"/>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>Cart</h5>
            </div>
            <div class="card-body cart">
               <div class="col-sm-12 empty-cart-cls text-center"  v-if="!cart.length">
                  <img :src='getImgUrl("ecommerce/icon-empty-cart.png")' class="img-fluid mb-4">
                  <h3><strong>Your Cart is Empty</strong></h3>
                  <h4>Add something to make me happy :)</h4>
                  <router-link :to="'/ecommerce/product'" class="btn btn-primary cart-btn-transform m-t-15">continue shopping</router-link>
                </div>
              <div class="order-history table-responsive wishlist" v-if="cart.length">
                <table class="table table-bordernone">
                  <thead>
                    <tr>
                      <th>Prdouct</th>
                      <th>Prdouct Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Action</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    <tr class="title-orders">
                      <td colspan="12">New Orders</td>
                    </tr>
                    <tr v-for="(item,index) in cart" :key="index">
                      <td><img class="img-fluid img-60" :src='getImgUrl(item.images[0])' alt=""></td>
                      <td>
                        <div class="product-name">
                          <router-link :to="'/ecommerce/details/'+item.sku">{{item.name}}</router-link>
                        </div>
                      </td>
                      <td>{{item.price | currency}}</td>
                      <td class="cart">
                         <div class="qty-box1">
          <div class="input-group addToCart">
            <i class="fa fa-minus btnGtr1"  v-on:click="decrement(item)"></i>
            <input class="touchspin1 text-center" v-model="item.quantity" name="item.quantity" type="text" >
            <i class="fa fa-plus btnLess1"  v-on:click="increment(item)"></i>
          </div>
        </div>
                      </td>
                      <td><a href="javascript:void(0)" @click='removeProduct(item)'><feather type="x-circle"></feather></a></td>
                      <td>{{item.price * item.quantity | currency}}</td>
                    </tr>
                    <tr>
                      <td class="total-amount" colspan="5"> 
                        <h6 class="m-0"> <span class="f-w-600">Total Price:</span></h6>
                      </td>
                      <td><span>{{getAmount | currency}}</span></td>
                    </tr>
                    <tr>
                      <td colspan="5">
                        <router-link :to="'/ecommerce/product'" class="btn btn-primary cart-btn-transform">continue shopping</router-link>
                      </td>
                      <td>
                        <router-link :to="'/ecommerce/checkout'" class="btn btn-primary cart-btn-transform"> check out</router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import { mapState } from "vuex";
export default {
  name:'Product',
  data(){
    return{
          counter: 1
    }
  },
  computed: {
    ...mapState({
      cart: state => state.products.cart,
      getAmount() {
        return this.totalAmount = this.$store.getters['products/getTotalAmount']
      }
    })
  },
  methods: {
    getImgUrl(path) {
      return require('../../assets/images/'+path)
    },
    removeProduct: function(product) {
      this.$store.dispatch('products/removeProduct', product)
    },
    increment(product,qty=1) {      
     this.$store.dispatch('products/updateCartQuantity', {"product":product,'qty':qty})
    },
    decrement(product,qty = -1) {
      this.$store.dispatch('products/updateCartQuantity', {"product":product,'qty':qty})
    }
  }
}
</script>