<template>
  <div>
    <Breadcrumbs main="Dashboard" title="e-commerce"/>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-7 xl-100">
          <div class="row">
            <div class="col-md-12">
              <carousel :perPageCustom="[[1440, 3], [1366, 4],[600, 3],[420, 2],[0,1]]"
                        :perPage=4
                        :minSwipeDistance=10
                        :mouse-drag=true
                        :speed=3000
                        :paginationEnabled=false
                        :autoplay=true>
                <slide>
                  <div class="item">
                   <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="dollar-sign"></feather>
                      <div><span>Total Earning</span></div>
                      <h4 class="font-primary mb-0 counter">72</h4>
                    </div>
                   </div>
                  </div>
                </slide>
                <slide>
                  <div class="item">
                    <div class="card">
                     <div class="card-body ecommerce-icons text-center"><feather type="map-pin"></feather>
                      <div><span>Total Web Visitor</span></div>
                      <h4 class="font-primary mb-0 counter">65</h4>
                     </div>
                   </div>
                 </div>
                </slide>
                <slide><div class="item">
                  <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="shopping-cart"></feather>
                      <div><span>Total Sale Product</span></div>
                      <h4 class="font-primary mb-0 counter">96</h4>
                    </div>
                  </div>
                </div></slide>
                <slide><div class="item">
                  <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="trending-down"></feather>
                      <div><span>Company Loss</span></div>
                      <h4 class="font-primary mb-0 counter">89</h4>
                    </div>
                  </div>
                </div></slide>
                <slide><div class="item">
                  <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="dollar-sign"></feather>
                      <div><span>Total Earning</span></div>
                      <h4 class="font-primary mb-0 counter">72</h4>
                    </div>
                  </div>
                </div></slide>
                <slide><div class="item">
                  <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="map-pin"></feather>
                      <div><span>Total Web Visitor</span></div>
                      <h4 class="font-primary mb-0 counter">65</h4>
                    </div>
                  </div>
                </div></slide>
                <slide><div class="item">
                  <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="shopping-cart"></feather>
                      <div><span>Total Sale Product</span></div>
                      <h4 class="font-primary mb-0 counter">96</h4>
                    </div>
                  </div>
                </div></slide>
                <slide><div class="item">
                  <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="trending-down"></feather>
                      <div><span>Company Loss</span></div>
                      <h4 class="font-primary mb-0 counter">89</h4>
                    </div>
                  </div>
                </div></slide>
                <slide><div class="item">
                  <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="dollar-sign"></feather>
                      <div><span>Total Earning</span></div>
                      <h4 class="font-primary mb-0 counter">72</h4>
                    </div>
                  </div>
                </div></slide>
                <slide><div class="item">
                  <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="map-pin"></feather>
                      <div><span>Total Web Visitor</span></div>
                      <h4 class="font-primary mb-0 counter">65</h4>
                    </div>
                  </div>
                </div></slide>
                <slide><div class="item">
                  <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="shopping-cart"></feather>
                      <div><span>Total Sale Product</span></div>
                      <h4 class="font-primary mb-0 counter">96</h4>
                    </div>
                  </div>
                </div></slide>
                <slide><div class="item">
                  <div class="card">
                    <div class="card-body ecommerce-icons text-center"><feather type="trending-down"></feather>
                      <div><span>Company Loss</span></div>
                      <h4 class="font-primary mb-0 counter">89</h4>
                    </div>
                  </div>
                </div></slide>
              </carousel>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Total Sale</h5>
                </div>
                <div class="card-body charts-box">
                  <div class="flot-chart-container">
                     <Salechart class="flot-chart-placeholder" id="graph123"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 xl-100">
          <div class="card">
            <div class="card-header">
              <h5>Best Sellers</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive sellers mb-0">
                <table class="table table-bordernone">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Sale</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Categories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-inline-block align-middle"><img class="img-radius img-30 align-top m-r-15 rounded-circle" :src='"../../assets/images/user/6.jpg"' alt="">
                          <div class="d-inline-block">
                            <p>Alana Slacker</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>8956</p>
                      </td>
                      <td>
                        <p>54</p>
                      </td>
                      <td>
                        <p>Product No: 1</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-inline-block align-middle"><img class="img-radius img-30 align-top m-r-15 rounded-circle" :src='"../../assets/images/user/2.png"' alt="">
                          <div class="d-inline-block">
                            <p>Alana Slacker</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>8956</p>
                      </td>
                      <td>
                        <p>54</p>
                      </td>
                      <td>
                        <p>Product No: 1</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-inline-block align-middle"><img class="img-radius img-30 align-top m-r-15 rounded-circle" :src='"../../assets/images/user/3.jpg"' alt="">
                          <div class="d-inline-block">
                            <p>Alana Slacker</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>8956</p>
                      </td>
                      <td>
                        <p>54</p>
                      </td>
                      <td>
                        <p>Product No: 1</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-inline-block align-middle"><img class="img-radius img-30 align-top m-r-15 rounded-circle" :src='"../../assets/images/user/4.jpg"' alt="">
                          <div class="d-inline-block">
                            <p>Alana Slacker</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>8956</p>
                      </td>
                      <td>
                        <p>54</p>
                      </td>
                      <td>
                        <p>Product No: 1</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-inline-block align-middle"><img class="img-radius img-30 align-top m-r-15 rounded-circle" :src='"../../assets/images/user/5.jpg"' alt="">
                          <div class="d-inline-block">
                            <p>Alana Slacker</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>8956</p>
                      </td>
                      <td>
                        <p>54</p>
                      </td>
                      <td>
                        <p>Product No: 1</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-inline-block align-middle"><img class="img-radius img-30 align-top m-r-15 rounded-circle" :src='"../../assets/images/user/15.png"' alt="">
                          <div class="d-inline-block">
                            <p>Alana Slacker</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>8956</p>
                      </td>
                      <td>
                        <p>54</p>
                      </td>
                      <td>
                        <p>Product No: 1</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
        <div class="col-xl-3 xl-50 col-sm-6">
          <div class="card">
            <div class="card-body">
              <div class="number-widgets">
                <div class="media">
                  <div class="media-body align-self-center">
                    <h6 class="mb-0">Payment Status</h6>
                  </div>
                  <div class="radial-bar radial-bar-95 radial-bar-primary" data-label="95%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 xl-50 col-sm-6">
          <div class="card">
            <div class="card-body">
              <div class="number-widgets">
                <div class="media">
                  <div class="media-body align-self-center">
                    <h6 class="mb-0">Work Process</h6>
                  </div>
                  <div class="radial-bar radial-bar-75 radial-bar-primary" data-label="75%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 xl-50 col-sm-6">
          <div class="card">
            <div class="card-body">
              <div class="number-widgets">
                <div class="media">
                  <div class="media-body align-self-center">
                    <h6 class="mb-0">Sale Completed</h6>
                  </div>
                  <div class="radial-bar radial-bar-90 radial-bar-primary" data-label="90%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 xl-50 col-sm-6">
          <div class="card">
            <div class="card-body">
              <div class="number-widgets">
                <div class="media">
                  <div class="media-body align-self-center">
                    <h6 class="mb-0">Payment Done</h6>
                  </div>
                  <div class="radial-bar radial-bar-80 radial-bar-primary" data-label="80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5>Total Income</h5>
            </div>
            <div class="card-body chart-block">
              <Incomechart id="myLineCharts" :width="719" :height="360"/>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5>Total Profit</h5>
            </div>
            <div class="card-body chart-block">
              <Profitchart id="profitchart" :width="719" :height="360"/>
            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-50 col-md-6">
          <div class="card">
            <div class="card-header">
              <h5>Profile Status</h5>
              
            </div>
            <div class="card-body height-equal">
              <div class="progress-block">
                <div class="progress-title"><span>Basic Information</span><span class="pull-right">15/18</span></div>
                <div class="progress" style="height: 3px;">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress-block">
                <div class="progress-title"><span>Portfolio</span><span class="pull-right">5/6</span></div>
                <div class="progress" style="height: 3px;">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress-block">
                <div class="progress-title"><span>Legal Document</span><span class="pull-right">12/20</span></div>
                <div class="progress" style="height: 3px;">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress-block">
                <div class="progress-title"><span>Interest</span><span class="pull-right">5/10</span></div>
                <div class="progress" style="height: 3px;">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress-block">
                <div class="progress-title"><span>Product Info</span><span class="pull-right">15/17</span></div>
                <div class="progress" style="height: 3px;">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="progress-block mb-0">
                <div class="progress-title"><span>Billing Details</span><span class="pull-right">2/5</span></div>
                <div class="progress" style="height: 3px;">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-50 col-md-6">
          <div class="card">
            <div class="card-header">
              <h5>Logs</h5>
            </div>
            <div class="card-body height-equal log-content">
              <div class="logs-element">
                <div class="circle-double-odd"></div><span>New User Registration</span><span class="pull-right">14:12</span>
              </div>
              <div class="logs-element">
                <div class="circle-double-even"></div><span>New sale: souffle.</span><span class="pull-right">19:00</span>
              </div>
              <div class="logs-element">
                <div class="circle-double-odd"></div><span>14 products added.</span><span class="pull-right">05:22</span>
              </div>
              <div class="logs-element">
                <div class="circle-double-even"></div><span>New sale: Napole.</span><span class="pull-right">08:45</span>
              </div>
              <div class="logs-element">
                <div class="circle-double-odd"></div><span>New User Registration</span><span class="pull-right">06:51</span>
              </div>
              <div class="logs-element">
                <div class="circle-double-even"></div><span>New User Registration</span><span class="pull-right">09:42</span>
              </div>
              <div class="logs-element">
                <div class="circle-double-odd"></div><span>New User Registration</span><span class="pull-right">10:45</span>
              </div>
              <div class="logs-element">
                <div class="circle-double-even"></div><span>New User Registration</span><span class="pull-right">02:05</span>
              </div>

            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-100">
          <div class="card">
            <div class="card-header">
              <h5>statics</h5>
            </div>
            <div class="card-body updating-chart height-equal">
              <div class="upadates text-center">
                <h2 class="font-primary">
                  <feather type="dollar-sign"></feather>
                  <span class="counter"> 89.68 </span><feather type="arrow-up"></feather></h2>
                <p>Week2 +<span class="counter">15.44</span></p>
              </div>
              <div class="flot-chart-container">
                <Staticschart class="flot-chart-placeholder" id="updating-data-morris-chart"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 xl-100">
          <div class="card">
            <div class="card-header">
              <h5>Shopping Cart</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive shopping-table text-center mb-0">
                <table class="table table-bordernone">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Status</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Computer</td>
                      <td>5</td>
                      <td>
                        <button class="btn btn-primary btn-pill">Active</button>
                      </td>
                      <td>15000</td>
                      <td><feather type="x" class="middle"></feather></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Headphone</td>
                      <td>8</td>
                      <td>
                        <button class="btn btn-primary btn-pill">Disable</button>
                      </td>
                      <td>8000</td>
                      <td><feather type="x" class="middle"></feather></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Furniture</td>
                      <td>3</td>
                      <td>
                        <button class="btn btn-primary btn-pill">Paused</button>
                      </td>
                      <td>12000</td>
                      <td><feather type="x" class="middle"></feather></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>shoes</td>
                      <td>9</td>
                      <td>
                        <button class="btn btn-primary btn-pill">On Way</button>
                      </td>
                      <td>5500</td>
                      <td><feather type="x" class="middle"></feather></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-100">
          <div class="card">
            <div class="card-header">
              <h5>Review</h5>
            </div>
            <div class="card-body">
              <div class="text-center ecommerce-knob">
                <div class="knob" id="review"></div>
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
var primary = localStorage.getItem('primary_color') || '#4466f2';

var Knob = require('knob')
  var review = Knob({
      value: 35,
      angleOffset: 180,
      className: "review",
      thickness: 0.1,
      width: 287,
      height: 287,
      fgColor: primary
    })
  import Salechart from './chartjs/salechart'
  import Incomechart from './chartjs/incomechart'
  import Profitchart from './chartjs/profitchart'
  import Staticschart from './chartjs/statics'
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
      Carousel,
      Slide,
      Salechart,
      Incomechart,
      Profitchart,
      Staticschart
    },
    mounted () {
      document.getElementById('review').append(review)
    }
  };

</script>
<style>
div.review canvas {
  position: relative !important;
}
div.review input {
  z-index: 1;
}
</style>