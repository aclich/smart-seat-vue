<template>
  <div>
    <Breadcrumbs main="Dashboard" title="Crypto"/>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">

        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="media bitcoin-graph"><img src="../../assets/images/bitcoin/graph-icon-1.png" alt="">
                <div class="top-bitcoin">
                  <h5>BTC</h5><span>Bitcoin</span>
                </div>
                <div class="media-body">
                  <div class="bitcoin-content text-right">
                    <div class="bitcoin-numbers d-inline-block">
                      <h6 class="mb-0">% 1h</h6>
                      <h6 class="mb-0 font-primary"><span><feather type="arrow-down"></feather></span> 0.12</h6>
                    </div>
                    <div class="bitcoin-numbers d-inline-block">
                      <h6 class="mb-0">% 24h</h6>
                      <h6 class="mb-0 font-primary"><span><feather type="arrow-up"></feather></span> +0.30</h6>
                    </div>
                    <div class="bitcoin-numbers d-inline-block">
                      <h6 class="mb-0">% 7d</h6>
                      <h6 class="mb-0 font-primary"><span><feather type="arrow-down"></feather></span> -0.20</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dashboard-chart-container">
              <chartist
              class="bitcoinchart-1"
              ratio="ct-major-second"
              type="Line"
              :data="chart1.data"
              :options="chart1.options"
              >
            </chartist>
          </div>
        </div>
      </div>

      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <div class="media bitcoin-graph"><img src="../../assets/images/bitcoin/graph-icon-2.png" alt="">
              <div class="top-bitcoin">
                <h5>DASH</h5><span>Tranding</span>
              </div>
              <div class="media-body">
                <div class="bitcoin-content text-right">
                  <div class="bitcoin-numbers d-inline-block">
                    <h6 class="mb-0">% 1h</h6>
                    <h6 class="mb-0 font-primary"><span><feather type="arrow-down"></feather></span> 0.12</h6>
                  </div>
                  <div class="bitcoin-numbers d-inline-block">
                    <h6 class="mb-0">% 24h</h6>
                    <h6 class="mb-0 font-primary"><span><feather type="arrow-up"></feather></span> +0.30</h6>
                  </div>
                  <div class="bitcoin-numbers d-inline-block">
                    <h6 class="mb-0">% 7d</h6>
                    <h6 class="mb-0 font-primary"><span><feather type="arrow-down"></feather></span> -0.20</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dashboard-chart-container">
            <chartist
            class="bitcoinchart-2"
            ratio="ct-major-second"
            type="Line"
            :data="chart2.data"
            :options="chart2.options"
            >
          </chartist>
        </div>
      </div>
    </div>

    <div class="col-xl-4">
      <div class="card">
        <div class="card-body">
          <div class="media bitcoin-graph"><img src="../../assets/images/bitcoin/graph-icon-3.png" alt="">
            <div class="top-bitcoin">
              <h5>ETH</h5><span>Ethereum</span>
            </div>
            <div class="media-body">
              <div class="bitcoin-content text-right">
                <div class="bitcoin-numbers d-inline-block">
                  <h6 class="mb-0">% 1h</h6>
                  <h6 class="mb-0 font-primary"><span><feather type="arrow-down"></feather></span> 0.12</h6>
                </div>
                <div class="bitcoin-numbers d-inline-block">
                  <h6 class="mb-0">% 24h</h6>
                  <h6 class="mb-0 font-primary"><span><feather type="arrow-up"></feather></span> +0.30</h6>
                </div>
                <div class="bitcoin-numbers d-inline-block">
                  <h6 class="mb-0">% 7d</h6>
                  <h6 class="mb-0 font-primary"><span><feather type="arrow-down"></feather></span> -0.20</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dashboard-chart-container">
          <chartist
          class="bitcoinchart-3"
          ratio="ct-major-second"
          type="Line"
          :data="chart3.data"
          :options="chart3.options"
          >
        </chartist>
      </div>
    </div>
  </div>

  <div class="col-xl-4 xl-100">
    <div class="card">
      <div class="card-header b-l-primary">
        <h5>Market Value</h5>
      </div>
      <div class="card-body">
          <chartist
          class="market-chart"
          type="Bar"
          :data="barchart.data"
          :options="barchart.options" />
      </div>
    </div>
  </div>

  <div class="col-xl-4 xl-50">
    <div class="card">
      <div class="card-header b-l-primary">
        <div class="row">
          <div class="col-sm-5">
            <h5 class="bitcoin-header">Buy</h5>
          </div>
          <div class="col-sm-7">
            <div class="text-right right-header-color">
              <p class="mb-0">USD Balance: $ 5000.00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="bitcoin-form">
          <div class="form-row">
            <div class="col-xl-4 mb-3 col-sm-3">
              <label class="f-w-600">Parchase</label>
              <div class="bitcoin-form-dropdown">
                <div class="onhover-dropdown">
                  <button class="btn f-12" type="button">Amount <span class="pr-0"><i class="fa fa-angle-down"></i></span></button>
                  <div class="onhover-show-div"><a class="d-block" href="#">Link 1</a><a class="d-block" href="#">Link 2</a><a class="d-block" href="#">Link 3</a></div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 mb-3 col-sm-9">
              <label class="f-w-600" for="validationCustomUsername">Units</label>
              <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text" id="inputGroupPrepend"><i class="fa fa-btc font-primary"></i></span></div>
                <input class="form-control" id="validationCustomUsername" type="text" aria-describedby="inputGroupPrepend" required="">
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-xl-4 mb-3 col-sm-3">
              <label class="f-w-600">Bid</label>
              <div class="bitcoin-form-dropdown">
                <div class="onhover-dropdown">
                  <button class="btn f-12" type="button">Limit <span class="pr-0"><i class="fa fa-angle-down"></i></span></button>
                  <div class="onhover-show-div"><a class="d-block" href="#">Link 1</a><a class="d-block" href="#">Link 2</a><a class="d-block" href="#">Link 3</a></div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 mb-3 col-sm-9">
              <label class="f-w-600" for="validationCustomUsername">Bid</label>
              <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text" id="inputGroupPrepend1"><i class="fa fa-btc font-primary"></i></span></div>
                <input class="form-control" id="validationCustomUsername1" type="text" aria-describedby="inputGroupPrepend" required="">
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <label class="f-w-600" for="validationCustomUsername">Total</label>
              <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text" id="inputGroupPrepend2"><i class="fa fa-btc font-primary"></i></span></div>
                <input class="form-control" id="validationCustomUsername2" type="text" aria-describedby="inputGroupPrepend" required="">
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="btn-bottom">
                <button class="btn btn-primary" type="button">Buy Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-4 xl-50">
    <div class="card">
      <div class="card-header b-l-primary">
        <div class="row">
          <div class="col-sm-5">
            <h5 class="bitcoin-header">Sell</h5>
          </div>
          <div class="col-sm-7">
            <div class="text-right right-header-color">
              <p class="mb-0">BTC Balance: $ 5000.00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="bitcoin-form">
          <div class="form-row">
            <div class="col-xl-4 mb-3 col-sm-3">
              <label class="f-w-600">Sell</label>
              <div class="bitcoin-form-dropdown">
                <div class="onhover-dropdown">
                  <button class="btn f-12" type="button">Amount  <span class="pr-0"><i class="fa fa-angle-down"></i></span></button>
                  <div class="onhover-show-div"><a class="d-block" href="#">Link 1</a><a class="d-block" href="#">Link 2</a><a class="d-block" href="#">Link 3</a></div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 mb-3 col-sm-9">
              <label class="f-w-600" for="validationCustomUsername">Units</label>
              <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text" id="inputGroupPrepend3"><i class="fa fa-btc font-primary"></i></span></div>
                <input class="form-control" id="validationCustomUsername3" type="text" aria-describedby="inputGroupPrepend" required="">
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-xl-4 mb-3 col-sm-3">
              <label class="f-w-600">Bid</label>
              <div class="bitcoin-form-dropdown">
                <div class="onhover-dropdown">
                  <button class="btn f-12" type="button">Limit <span class="pr-0"><i class="fa fa-angle-down"></i></span></button>
                  <div class="onhover-show-div"><a class="d-block" href="#">Link 1</a><a class="d-block" href="#">Link 2</a><a class="d-block" href="#">Link 3</a></div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 mb-3 col-sm-9">
              <label class="f-w-600" for="validationCustomUsername">Bid</label>
              <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text" id="inputGroupPrepend5"><i class="fa fa-btc font-primary"></i></span></div>
                <input class="form-control" id="validationCustomUsername5" type="text" aria-describedby="inputGroupPrepend" required="">
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <label class="f-w-600" for="validationCustomUsername">Total</label>
              <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text" id="inputGroupPrepend6"><i class="fa fa-btc font-primary"></i></span></div>
                <input class="form-control" id="validationCustomUsername6" type="text" aria-describedby="inputGroupPrepend" required="">
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="btn-bottom">
                <button class="btn btn-primary" type="button">Sell Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-8 xl-50">
    <div class="card">
      <div class="card-header b-l-primary">
        <h5>Active Order</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive active-order-table mb-0">
          <table class="table table-bordernone">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Type</th>
                <th scope="col">Customer</th>
                <th scope="col">Price</th>
                <th scope="col">USD</th>
                <th scope="col">Fee(%)</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>2018-01-31</p>
                  <p class="mb-0">6:51:51</p>
                </td>
                <td>
                  <button class="btn btn-primary btn-pill" type="button">Buy</button>
                </td>
                <td>
                  <div class="customers">
                    <ul>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/3.jpg" alt=""></li>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/5.jpg" alt=""></li>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/1.jpg" alt=""></li>
                      <li class="d-inline-block">
                        <p class="f-12">+10 More</p>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <p>11900.12</p>
                </td>
                <td>
                  <p>$ 6979.78</p>
                </td>
                <td>
                  <p>0.2</p>
                </td>
                <td>
                  <button class="btn btn-primary btn-pill" type="button">Status</button>
                </td>
              </tr>
              <tr>
                <td>
                  <p>2018-01-31</p>
                  <p class="mb-0">06:50:50</p>
                </td>
                <td>
                  <button class="btn btn-secondary btn-pill" type="button">Sell</button>
                </td>
                <td>
                  <div class="customers">
                    <ul>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/3.jpg" alt=""></li>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/5.jpg" alt=""></li>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/1.jpg" alt=""></li>
                      <li class="d-inline-block">
                        <p class="f-12">+10 More</p>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <p>11900.12</p>
                </td>
                <td>
                  <p>$ 6979.78</p>
                </td>
                <td>
                  <p>0.2</p>
                </td>
                <td>
                  <button class="btn btn-primary btn-pill" type="button">Status</button>
                </td>
              </tr>
              <tr>
                <td>
                  <p>2018-01-31</p>
                  <p class="mb-0">06:49:51</p>
                </td>
                <td>
                  <button class="btn btn-primary btn-pill" type="button">Buy</button>
                </td>
                <td>
                  <div class="customers">
                    <ul>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/3.jpg" alt=""></li>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/5.jpg" alt=""></li>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/1.jpg" alt=""></li>
                      <li class="d-inline-block">
                        <p class="f-12">+10 More</p>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <p>11900.12</p>
                </td>
                <td>
                  <p>$ 6979.78</p>
                </td>
                <td>
                  <p>0.2</p>
                </td>
                <td>
                  <button class="btn btn-primary btn-pill" type="button">Status</button>
                </td>
              </tr>
              <tr>
                <td>
                  <p>2018-01-31</p>
                  <p class="mb-0">06:50:50</p>
                </td>
                <td>
                  <button class="btn btn-secondary btn-pill" type="button">Sell</button>
                </td>
                <td>
                  <div class="customers">
                    <ul>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/3.jpg" alt=""></li>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/5.jpg" alt=""></li>
                      <li class="d-inline-block"><img class="img-40 rounded-circle" src="../../assets/images/user/1.jpg" alt=""></li>
                      <li class="d-inline-block">
                        <p class="f-12">+10 More</p>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <p>11900.12</p>
                </td>
                <td>
                  <p>$ 6979.78</p>
                </td>
                <td>
                  <p>0.2</p>
                </td>
                <td>
                  <button class="btn btn-primary btn-pill" type="button">Status</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>

  <div class="col-xl-4 xl-50">
    <div class="card">
      <div class="card-header b-l-primary">
        <h5>Market News</h5>
      </div>
      <div class="card-body">
        <div class="media markets"><img src="../../assets/images/bitcoin/market-1.jpg" alt="">
          <div class="media-body">
            <h5 class="font-primary">03 Jan</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum
            </p>
          </div>
        </div>
        <div class="media markets"><img src="../../assets/images/bitcoin/market-2.jpg" alt="">
          <div class="media-body">
            <h5 class="font-primary">03 Jan</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum
            </p>
          </div>
        </div>
        <div class="media markets"><img src="../../assets/images/bitcoin/market-3.jpg" alt="">
          <div class="media-body">
            <h5 class="font-primary">03 Jan</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum
            </p>
          </div>
        </div>
        <div class="media markets mb-0"><img src="../../assets/images/bitcoin/market-4.jpg" alt="">
          <div class="media-body">
            <h5 class="font-primary">03 Jan</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-6">
    <div class="card">
      <div class="card-header b-l-primary">
        <h5>Sales Statistics</h5>
      </div>
      <div class="card-body">
        <div class="show-value-top d-flex pull-right">
          <div class="value-left d-inline-block">
            <div class="circle-graph bg-primary d-inline-block m-r-5"></div><span>Total Earning</span>
          </div>
          <div class="value-right d-inline-block">
            <div class="circle-graph d-inline-block bg-secondary m-r-5"></div><span>Total Tax</span>
          </div>
        </div>
        <div class="chart-block bitcoin-chart">
          <chartist
          ratio="ct-golden-section"
          type="Line"
          :data="chart10.data"
          :options="chart10.options">
        </chartist>
      </div>
      <div class="row chart-bottom">
        <div class="col text-center">
          <div class="d-inline-block">
            <h5 class="font-primary counter">75,000</h5>
            <h6 class="mb-0">Total Sale</h6>
          </div>
        </div>
        <div class="col text-center">
          <div class="d-inline-block">
            <h5 class="font-primary counter">40,000</h5>
            <h6 class="mb-0">Bitcoin Sale</h6>
          </div>
        </div>
        <div class="col text-center">
          <div class="d-inline-block">
            <h5 class="font-primary counter">35,000</h5>
            <h6 class="mb-0">Ethereum Sale</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="col-xl-6">
  <div class="card">
    <div class="card-header b-l-primary">
      <h5>Datatables Market</h5>
    </div>
    <div class="card-body tab-content p-0 market-tabcontent">

      <b-tabs pills bottom nav-wrapper-class="card-footer b-t-primary market-tabs p-0">

        <b-tab title="User" active>
          <div class="market-table table-responsive tab-pane">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Market</th>
                  <th scope="col">Price</th>
                  <th scope="col">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>+16.23%</p>
                    <div class="text-center"><feather class="font-primary" type="arrow-up"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 02157</p>
                  </td>
                  <td>
                    <p>0.025486854</p>
                  </td>
                  <td>
                    <p>-05.15%</p>
                    <div class="text-center"><feather class="font-secondary" type="arrow-down"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>+16.23%</p>
                    <div class="text-center"><feather class="font-primary" type="arrow-up"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>-18.23%</p>
                    <div class="text-center"><feather class="font-secondary" type="arrow-down"></feather></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-tab>

        <b-tab title="Email" active>
          <div class="market-table table-responsive tab-pane">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Market</th>
                  <th scope="col">Price</th>
                  <th scope="col">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>+16.23%</p>
                    <div class="text-center"><feather class="font-primary" type="arrow-up"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 02157</p>
                  </td>
                  <td>
                    <p>0.025486854</p>
                  </td>
                  <td>
                    <p>-05.15%</p>
                    <div class="text-center"><feather class="font-secondary" type="arrow-down"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>+16.23%</p>
                    <div class="text-center"><feather class="font-primary" type="arrow-up"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>-18.23%</p>
                    <div class="text-center"><feather class="font-secondary" type="arrow-down"></feather></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-tab>

        <b-tab title="Blog" active>
          <div class="market-table table-responsive tab-pane">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Market</th>
                  <th scope="col">Price</th>
                  <th scope="col">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>+16.23%</p>
                    <div class="text-center"><feather class="font-primary" type="arrow-up"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 02157</p>
                  </td>
                  <td>
                    <p>0.025486854</p>
                  </td>
                  <td>
                    <p>-05.15%</p>
                    <div class="text-center"><feather class="font-secondary" type="arrow-down"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>+16.23%</p>
                    <div class="text-center"><feather class="font-primary" type="arrow-up"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>-18.23%</p>
                    <div class="text-center"><feather class="font-secondary" type="arrow-down"></feather></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-tab>

        <b-tab title="Chat" active>
          <div class="market-table table-responsive tab-pane">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Market</th>
                  <th scope="col">Price</th>
                  <th scope="col">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>+16.23%</p>
                    <div class="text-center"><feather class="font-primary" type="arrow-up"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 02157</p>
                  </td>
                  <td>
                    <p>0.025486854</p>
                  </td>
                  <td>
                    <p>-05.15%</p>
                    <div class="text-center"><feather class="font-secondary" type="arrow-down"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>+16.23%</p>
                    <div class="text-center"><feather class="font-primary" type="arrow-up"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>-18.23%</p>
                    <div class="text-center"><feather class="font-secondary" type="arrow-down"></feather></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-tab>

        <b-tab title="Ecommerce" active>
          <div class="market-table table-responsive tab-pane">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Market</th>
                  <th scope="col">Price</th>
                  <th scope="col">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>+16.23%</p>
                    <div class="text-center"><feather class="font-primary" type="arrow-up"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 02157</p>
                  </td>
                  <td>
                    <p>0.025486854</p>
                  </td>
                  <td>
                    <p>-05.15%</p>
                    <div class="text-center"><feather class="font-secondary" type="arrow-down"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>+16.23%</p>
                    <div class="text-center"><feather class="font-primary" type="arrow-up"></feather></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="font-primary">BTC - 12458</p>
                  </td>
                  <td>
                    <p>0.002548548</p>
                  </td>
                  <td>
                    <p>-18.23%</p>
                    <div class="text-center"><feather class="font-secondary" type="arrow-down"></feather></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-tab>

      </b-tabs>

    </div>

  </div>
</div>

<div class="col-md-12 xl-100">
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body bg-primary">
          <div class="icons-section text-center"><img src="../../assets/images/bitcoin/1.png" alt="">
            <h6>Bitcoin</h6>
            <h5><span><feather type="dollar-sign"></feather></span>760.03 <span><feather type="arrow-down" class="middle"></feather></span></h5>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body bg-secondary">
          <div class="icons-section text-center"><img src="../../assets/images/bitcoin/2.png" alt="">
            <h6>Ethereum</h6>
            <h5><span><feather type="dollar-sign"></feather></span>750.03 <span><feather type="arrow-up" class="middle"></feather></span></h5>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body bg-primary">
          <div class="icons-section text-center"><img src="../../assets/images/bitcoin/3.png" alt="">
            <h6>Balance</h6>
            <h5><span><feather type="dollar-sign"></feather></span>9,980 <span><feather type="arrow-down" class="middle"></feather></span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="col-xl-4 xl-50">
  <div class="card">
    <div class="card-header b-l-primary">
      <h5>Chat</h5>
    </div>
    <div class="card-body chat-box">
      <div class="chat-right-aside bitcoin-chat">
        <div class="chat">
          <div class="chat-history chat-msg-box custom-scrollbar">
            <ul>
              <li>
                <div class="message my-message"><img class="rounded-circle float-left chat-user-img" src="../../assets/images/bitcoin/chat-1.jpg" alt="">
                  <div class="message-data text-right"><span class="message-data-time">1:00 pm</span></div>                                                        Project has been already finished and
                  I have results to show you.
                </div>
              </li>
              <li class="clearfix">
                <div class="message other-message pull-right"><img class="rounded-circle float-right chat-user-img" src="../../assets/images/bitcoin/chat-2.jpg" alt="">
                  <div class="message-data"><span class="message-data-time">1:08 pm</span></div>                                                        Well I am not sure. The rest of the
                  team is not here yet.
                </div>
              </li>
              <li>
                <div class="message my-message mb-0"><img class="rounded-circle float-left chat-user-img" src="../../assets/images/bitcoin/chat-1.jpg" alt="">
                  <div class="message-data text-right"><span class="message-data-time">1:12 pm</span></div>                                                        Actually everything was fine. I'm very
                  excited to show this to our team.
                </div>
              </li>
            </ul>
          </div>
          <div class="bitcoin-message clearfix">
            <div class="row">
              <div class="col-xl-12 d-flex">
                <div class="smiley-box bg-primary">
                  <div class="picker"><img src="../../assets/images/smiley.png" alt=""></div>
                </div>
                <div class="input-group text-box">
                  <input class="form-control input-txt-bx" id="message-to-send" type="text" name="message-to-send" placeholder="Type a message......">
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">SEND</button>
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

<div class="col-xl-4 xl-50">
  <div class="card">
    <div class="default-according style-1 bitcoin-accordion" id="accordionoc">

      <b-card no-body class="mb-1">
        <b-card-header header-tag="div" class="bg-primary">
          <h5 class="mb-0">
            <b-button v-b-toggle.primary_1 variant="primary" >BTC</b-button>
          </h5>
        </b-card-header>
        <b-collapse id="primary_1" visible accordion="my-accordion-primary" role="tabpanel">
          <b-card-body class="p-0">
            <div class="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
              <div class="media-accordion">
                <div class="media">
                  <div>
                    <h6>BTC/USD</h6>
                    <p>24h Change</p>
                    <p>24h Volume</p>
                  </div>
                  <div class="media-body text-right">
                    <p>11916.9</p>
                    <p class="font-primary">283.1 USD (+2.33%)</p>
                    <p class="font-secondary">1029.1906 BTC</p>
                  </div>
                </div>
                <div class="media">
                  <div>
                    <h6>BTC/EUR</h6>
                    <p>24h Change</p>
                    <p>24h Volume</p>
                  </div>
                  <div class="media-body text-right">
                    <p>9213.9</p>
                    <p class="font-primary">200.1 EUR (+2.33%)</p>
                    <p class="font-secondary">1599.1906 BTC</p>
                  </div>
                </div>
                <div class="media">
                  <div>
                    <h6>BTC/GBP</h6>
                    <p>24h Change</p>
                    <p>24h Volume</p>
                  </div>
                  <div class="media-body text-right">
                    <p>1459.9</p>
                    <p class="font-primary">-283.1 USD (-2.33%)</p>
                    <p class="font-secondary">350.1906 BTC</p>
                  </div>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="div" class="bg-primary">
          <h5 class="mb-0">
            <b-button v-b-toggle.primary_2 variant="primary" >DASH</b-button>
          </h5>
        </b-card-header>
        <b-collapse id="primary_2" accordion="my-accordion-primary" role="tabpanel">
          <b-card-body class="p-0">
            <div class="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
              <div class="media-accordion">
                <div class="media">
                  <div>
                    <h6>BTC/USD</h6>
                    <p>24h Change</p>
                    <p>24h Volume</p>
                  </div>
                  <div class="media-body text-right">
                    <p>11916.9</p>
                    <p class="font-primary">283.1 USD (+2.33%)</p>
                    <p class="font-secondary">1029.1906 BTC</p>
                  </div>
                </div>
                <div class="media">
                  <div>
                    <h6>BTC/EUR</h6>
                    <p>24h Change</p>
                    <p>24h Volume</p>
                  </div>
                  <div class="media-body text-right">
                    <p>9213.9</p>
                    <p class="font-primary">200.1 EUR (+2.33%)</p>
                    <p class="font-secondary">1599.1906 BTC</p>
                  </div>
                </div>
                <div class="media">
                  <div>
                    <h6>BTC/GBP</h6>
                    <p>24h Change</p>
                    <p>24h Volume</p>
                  </div>
                  <div class="media-body text-right">
                    <p>1459.9</p>
                    <p class="font-primary">-283.1 USD (-2.33%)</p>
                    <p class="font-secondary">350.1906 BTC</p>
                  </div>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body>
        <b-card-header header-tag="div" class="bg-primary">
          <h5 class="mb-0">
            <b-button v-b-toggle.primary_3 variant="primary" >ETH</b-button>
          </h5>
        </b-card-header>
        <b-collapse id="primary_3" accordion="my-accordion-primary" role="tabpanel">
          <b-card-body class="p-0">
            <div class="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
              <div class="media-accordion">
                <div class="media">
                  <div>
                    <h6>BTC/USD</h6>
                    <p>24h Change</p>
                    <p>24h Volume</p>
                  </div>
                  <div class="media-body text-right">
                    <p>11916.9</p>
                    <p class="font-primary">283.1 USD (+2.33%)</p>
                    <p class="font-secondary">1029.1906 BTC</p>
                  </div>
                </div>
                <div class="media">
                  <div>
                    <h6>BTC/EUR</h6>
                    <p>24h Change</p>
                    <p>24h Volume</p>
                  </div>
                  <div class="media-body text-right">
                    <p>9213.9</p>
                    <p class="font-primary">200.1 EUR (+2.33%)</p>
                    <p class="font-secondary">1599.1906 BTC</p>
                  </div>
                </div>
                <div class="media">
                  <div>
                    <h6>BTC/GBP</h6>
                    <p>24h Change</p>
                    <p>24h Volume</p>
                  </div>
                  <div class="media-body text-right">
                    <p>1459.9</p>
                    <p class="font-primary">-283.1 USD (-2.33%)</p>
                    <p class="font-secondary">350.1906 BTC</p>
                  </div>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>


    </div>
  </div>
</div>

<div class="col-xl-4 xl-100">
  <div class="card">
    <div class="card-header b-l-primary">
      <h5>Invest</h5>
    </div>
    <div class="card-body chart-block">
      <div class="pull-right right-header invest-dropdown">
        <div class="onhover-dropdown">
          <button class="btn" type="button">Today <span class="pr-0"><i class="fa fa-angle-down"></i></span></button>
          <div class="onhover-show-div right-header-dropdown"><a class="d-block" href="#">Link 1</a><a class="d-block" href="#">Link 2</a><a class="d-block" href="#">Link 3</a></div>
        </div>
      </div>
      <div class="invest-pie">
        <InvestChart/>
      </div>
      <div class="show-value-top d-flex mb-0 bottom-morris-chart">
        <div class="value-left d-inline-block">
          <div class="circle-graph bg-primary d-inline-block m-r-5"></div><span>Bitcoin</span>
        </div>
        <div class="value-right d-inline-block">
          <div class="circle-graph d-inline-block bg-secondary m-r-5"></div><span>Ripple</span>
        </div>
        <div class="value-third d-inline-block">
          <div class="circle-graph d-inline-block bg-light m-r-5"></div><span>Invest</span>
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
import InvestChart from './chartjs/invest'
export default {
 data(){
  return{
    barchart : {
      data: {
        labels: ['100', '200', '300', '400', '500', '600', '700', '800'],
        series: [
        [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
        [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8]
        ]
      },
      options: {
        seriesBarDistance: 12,
        chartPadding: {
          left: -10,
          right: 0,
          bottom: -15,
        },
        axisX: {
          showGrid: false,
        },
      },
    },

    chart1: {
      data:{
        labels: ['01', '02', '03', '04', '05', '06'],
        series: [
        [8, 3, 7.5, 4, 7, 4]
        ]
      },
      options: {
        lineSmooth: true,
        fullWidth: true,
        showArea: !0,
        showPoint: false,
        chartPadding: {
          right: 0,
          left: 0,
          bottom: 0,
          top:0
        },
        axisY: {
          low: 0,
          showGrid: false,
          showLabel: false,
          offset: 0
        },
        axisX: {
          showGrid: false,
          showLabel: false,
          offset: 0
        }
      },
    },

    chart2: {
      data:{
        labels: ['01', '02', '03', '04', '05', '06'],
        series: [
        [8, 3, 7.5, 4, 7, 4]
        ]
      },
      options: {
        lineSmooth: true,
        fullWidth: true,
        showArea: !0,
        showPoint: false,
        chartPadding: {
          right: 0,
          left: 0,
          bottom: 0,
          top:0
        },
        axisY: {
          low: 0,
          showGrid: false,
          showLabel: false,
          offset: 0
        },
        axisX: {
          showGrid: false,
          showLabel: false,
          offset: 0
        }
      },
    },

    chart3: {
      data:{
        labels: ['01', '02', '03', '04', '05', '06'],
        series: [
        [8, 3, 7.5, 4, 7, 4]
        ]
      },
      options: {
        lineSmooth: true,
        fullWidth: true,
        showArea: !0,
        showPoint: false,
        chartPadding: {
          right: 0,
          left: 0,
          bottom: 0,
          top:0
        },
        axisY: {
          low: 0,
          showGrid: false,
          showLabel: false,
          offset: 0
        },
        axisX: {
          showGrid: false,
          showLabel: false,
          offset: 0
        }
      },
    },

    chart10 : {
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        series: [
        [1, 2.5, 1.5, 3, 1.3, 2, 4, 4.5],
        [ 0, 1, 0.5, 1, 0.3, 1.6, 1.4, 2]
        ]
      },
      options: {
        fullWidth: true,
        chartPadding: {
          right: 5,
          bottom: 0,
          left: 0
        },
        axisY: {
          onlyInteger: true,
          offset: 20
        },
        lineSmooth: false,
      },
    },
  }
},
components: {
  InvestChart
}
}
</script>
