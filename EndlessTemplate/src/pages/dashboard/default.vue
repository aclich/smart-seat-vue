<template>
    <div>
        <Breadcrumbs main="Dashboard" title="default"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-8 xl-100">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="chart-widget-dashboard">
                                        <div class="media">
                                            <div class="media-body">
                                                <h5 class="mt-0 mb-0 f-w-600"><feather type="dollar-sign"/><span class="counter">5789</span></h5>
                                                <p>Total Visits</p>
                                            </div><feather type="tag" />
                                        </div>
                                        <div class="dashboard-chart-container">
                                            <div class="small-chart-gradient-1">
                                                <chartist
                                                        ratio="ct-major-second"
                                                        type="Line"
                                                        :data="chart.chartData_1"
                                                        :options="chart.chartOptions" 
                                                        :event-handlers="chart.eventHandlers" >
                                                </chartist>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="chart-widget-dashboard">
                                        <div class="media">
                                            <div class="media-body">
                                                <h5 class="mt-0 mb-0 f-w-600"><feather type="dollar-sign"/><span class="counter">4986</span></h5>
                                                <p>Total Sale</p>
                                            </div><feather type="shopping-cart" />
                                        </div>
                                        <div class="dashboard-chart-container">
                                            <div class="small-chart-gradient-1">
                                                <chartist
                                                        ratio="ct-major-second"
                                                        type="Line"
                                                        :data="chart.chartData_2"
                                                        :options="chart.chartOptions"
                                                        :event-handlers="chart.eventHandlers" >
                                                </chartist>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="chart-widget-dashboard">
                                        <div class="media">
                                            <div class="media-body">
                                                <h5 class="mt-0 mb-0 f-w-600"><feather type="dollar-sign"/><span class="counter">8568</span></h5>
                                                <p>Total Value</p>
                                            </div><feather type="sun" />
                                        </div>
                                        <div class="dashboard-chart-container">
                                            <div class="small-chart-gradient-1">
                                                <chartist
                                                        ratio="ct-major-second"
                                                        type="Line"
                                                        :data="chart.chartData_3"
                                                        :options="chart.chartOptions"
                                                        :event-handlers="chart.eventHandlers" >
                                                </chartist>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <h5>Production Valuation</h5>
                                </div>
                                <div class="card-body">
                                    <div class="show-value-top d-flex">
                                        <div class="value-left d-inline-block">
                                            <div class="square bg-primary d-inline-block"></div><span>Total Earning</span>
                                        </div>
                                        <div class="value-right d-inline-block">
                                            <div class="square d-inline-block bg-secondary"></div><span>Total Tax</span>
                                        </div>
                                    </div>
                                        <chartist
                                                ratio="ct-major-first"
                                                type="Line"
                                                :data="smooth_chart.chartData"
                                                :options="smooth_chart.chartOptions"
                                                :event-handlers="smooth_chart.eventHandlers"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 xl-100">
                    <div class="card">
                        <div class="card-header">
                            <h5>Activity</h5>
                        </div>
                        <div class="card-body activity-scroll">
                            <div class="activity">
                                <div class="media">
                                    <div class="gradient-round m-r-30 gradient-line-1"><feather type="shopping-bag" /></div>
                                    <div class="media-body">
                                        <h6>New Sale <span class="pull-right f-14">New</span></h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="gradient-round m-r-30 gradient-line-1"><feather type="message-circle" /></div>
                                    <div class="media-body">
                                        <h6>New Message <span class="pull-right f-14">14m Ago</span></h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="gradient-round m-r-30 small-line"><feather type="minus-circle" /></div>
                                    <div class="media-body">
                                        <h6>New Report <span class="pull-right f-14">14m Ago</span></h6>
                                        <p>Lorem Ipsum is simply dummy text.</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="gradient-round m-r-30 gradient-line-1"><feather type="shopping-bag" /></div>
                                    <div class="media-body">
                                        <h6>New Sale <span class="pull-right f-14">14m Ago</span></h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="gradient-round m-r-30 medium-line"><feather type="tag" /></div>
                                    <div class="media-body">
                                        <h6>New Visits <span class="pull-right f-14">14m Ago</span></h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-xl-4 xl-100">
                    <div class="card">
                        <div class="card-header">
                            <h5>Total Profit</h5><span class="d-block fonts-dashboard">All Custom Income</span>
                        </div>
                        <div class="card-body">
                            <div class="text-center">
                                <div class="knob" id="profit"></div>
                            </div>
                            <div class="show-value d-flex">
                                <div class="value-left">
                                    <div class="square bg-primary d-inline-block"></div><span>Total Profit</span>
                                </div>
                                <div class="value-right">
                                    <div class="square bg-light d-inline-block"></div><span>Total Investment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 xl-50 col-md-6">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body progress-media">
                                    <div class="media">
                                        <div class="media-body">
                                            <h5>Total Review</h5><span class="mb-0 d-block">Customer Review</span>
                                        </div><feather type="thumbs-up" />
                                    </div>
                                    <div class="progress-bar-showcase">
                                        <div class="progress sm-progress-bar">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 90%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="progress-change"><span>Change</span><span class="pull-right">95%</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body progress-media">
                                    <div class="media">
                                        <div class="media-body">
                                            <h5>Total Feedback</h5><span class="mb-0 d-block">Feedback</span>
                                        </div><feather type="message-circle" />
                                    </div>
                                    <div class="progress-bar-showcase">
                                        <div class="progress sm-progress-bar">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 85%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="progress-change"><span>Change</span><span class="pull-right">85%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 xl-50 col-md-6">
                    <div class="card user-card">
                        <div class="card-body">
                            <div class="online-user">
                                <h5 class="font-primary f-18 mb-0">Online</h5>
                            </div>
                            <div class="user-card-image"><img class="img-fluid rounded-circle image-radius" :src='"../../assets/images/dashboard/designer.jpg"' alt=""></div>
                            <div class="user-deatils text-center">
                                <h5>Marshi Kisteen</h5>
                                <h6 class="mb-0">marshikisteen@gmail.com</h6>
                            </div>
                            <div class="user-badge text-center"><a class="badge badge-pill badge-light" href="#">Dashboard</a><a class="badge badge-pill badge-light" href="#">Ui</a><a class="badge badge-pill badge-light" href="#">Xi</a><a href="#"><span class="badge badge-pill badge-light active">2+</span></a></div>
                            <div class="card-footer row pb-0 text-center">
                                <div class="col-6">
                                    <div class="d-flex user-footer"><feather class="m-r-10" type="message-square" />
                                        <h6 class="f-18 mb-0">Message</h6>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="d-flex user-footer"><feather class="m-r-10" type="briefcase" />
                                        <h6 class="f-18 mb-0">Portfolio</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card">
                        <div class="card-header card-header-border">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h5>New User</h5>
                                </div>
                                <div class="col-sm-6">
                                    <div class="pull-right right-header"><span>Month</span><span>
                            <button class="btn btn-primary btn-pill">Today</button></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="new-users">
                                <div class="media"><img class="rounded-circle image-radius m-r-15" :src='"../../assets/images/user/2.png"' alt="">
                                    <div class="media-body">
                                        <h6 class="mb-0 f-w-700">Nick Stone</h6>
                                        <p>Visual Designer, Github Inc</p>
                                    </div><span class="pull-right">
                          <button class="btn btn-pill btn-outline-light">Follow</button></span>
                                </div>
                                <div class="media"><img class="rounded-circle image-radius m-r-15" :src='"../../assets/images/user/5.jpg"' alt="">
                                    <div class="media-body">
                                        <h6 class="mb-0 f-w-700">Milano Esco</h6>
                                        <p>Visual Designer, Github Inc</p>
                                    </div><span class="pull-right">
                          <button class="btn btn-pill btn-outline-light">Follow</button></span>
                                </div>
                                <div class="media"><img class="rounded-circle image-radius m-r-15" :src='"../../assets/images/user/3.jpg"' alt="">
                                    <div class="media-body">
                                        <h6 class="mb-0 f-w-700">Wiltor Noice</h6>
                                        <p>Visual Designer, Github Inc</p>
                                    </div><span class="pull-right">
                          <button class="btn btn-pill btn-outline-light">Follow</button></span>
                                </div>
                                <div class="media"><img class="rounded-circle image-radius m-r-15" :src='"../../assets/images/user/4.jpg"' alt="">
                                    <div class="media-body">
                                        <h6 class="mb-0 f-w-700">Anna Strong</h6>
                                        <p>Visual Designer, Github Inc</p>
                                    </div><span class="pull-right">
                          <button class="btn btn-pill btn-outline-light">Follow</button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card">
                        <div class="card-header card-header-border">
                            <div class="row">
                                <div class="col-sm-7">
                                    <h5>Recent Notification</h5>
                                </div>
                                <div class="col-sm-5">
                                    <div class="pull-right right-header">
                                        <div class="onhover-dropdown">
                                            <button class="btn btn-primary btn-pill" type="button">All <span class="pr-0"><i class="fa fa-angle-down" /></span></button>
                                            <div class="onhover-show-div right-header-dropdown"><a class="d-block" href="#">Order</a><a class="d-block" href="#">Download</a><a class="d-block" href="#">Trash</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body recent-notification">
                            <div class="media">
                                <h6>09:00</h6>
                                <div class="media-body"><span>Lorem ipsum dolor sit amit,consectetur eiusmdd.</span>
                                    <p class="f-12">By Kan</p>
                                </div>
                            </div>
                            <div class="media">
                                <h6>10:50</h6>
                                <div class="media-body"><span>Lorem ipsum.</span>
                                    <p class="f-12">By Tailer</p>
                                </div>
                            </div>
                            <div class="media">
                                <h6>01:00</h6>
                                <div class="media-body"><span>Lorem ipsum dolor sit amit,consectetur eiusmdd.</span>
                                    <p class="f-12">By Kaint</p>
                                </div>
                            </div>
                            <div class="media">
                                <h6>05:00</h6>
                                <div class="media-body"><span>Lorem ipsum dolor sit amit.</span>
                                    <p class="f-12">By call</p>
                                </div>
                            </div>
                            <div class="media">
                                <h6>12:00</h6>
                                <div class="media-body"><span>Lorem ipsum dolor sit.</span>
                                    <p class="f-12">By Waiter</p>
                                </div>
                            </div>
                            <div class="media">
                                <h6>08:20</h6>
                                <div class="media-body"><span>Lorem ipsum dolor sit amit,consectetur eiusmdd dolor sit amit.</span>
                                    <p class="f-12">By Comman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Calculation</h5>
                        </div>
                        <div class="card-body">
                            <div class="show-value-top d-flex">
                                <div class="value-left d-inline-block">
                                    <div class="square bg-primary d-inline-block"></div><span>Total Income</span>
                                </div>
                                <div class="value-right d-inline-block">
                                    <div class="square d-inline-block bg-smooth-chart"></div><span>Total Loss</span>
                                </div>
                            </div>
                            <chartist class="ct-svg flot-chart-container"
                                    ratio="ct-major-different"
                                    type="Line"
                                    :data="line_chart.chartData"
                                    :options="line_chart.chartOptions"
                                    :event-handlers="line_chart.eventHandlers" >
                            </chartist>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 xl-100">
                    <div class="card">
                        <div class="card-header card-header-border">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h5>Conversations</h5>
                                </div>
                                <div class="col-sm-6">
                                    <div class="right-header pull-right m-t-5">
                                        <div class="onhover-dropdown"><feather type="more-horizontal" />
                                            <div class="onhover-show-div right-header-dropdown more-dropdown"><a class="d-block" href="#">View</a><a class="d-block" href="#">Media</a><a class="d-block" href="#">Search</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body chat-box dashboard-chat">
                            <div class="chat">
                                <div class="media left-side-chat"><img class="rounded-circle chat-user-img img-60 m-r-20" :src='"../../assets/images/user/4.jpg"' alt="">
                                    <div class="media-body">
                                        <div class="message-main">
                                            <p class="mb-0">Lorem Ipsum is simply dummy text of the </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="media right-side-chat">
                                    <div class="media-body text-right">
                                        <div class="message-main">
                                            <p class="pull-right">Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been the industry's</p>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="sub-message message-main">
                                            <p class="pull-right mb-0">Lorem Ipsum is simply dummy text of the </p>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div><img class="rounded-circle chat-user-img img-60 m-l-20" :src='"../../assets/images/user/5.jpg"' alt="">
                                </div>
                                <div class="media left-side-chat"><img class="rounded-circle chat-user-img img-60 m-r-20" :src='"../../assets/images/user/4.jpg"' alt="">
                                    <div class="media-body">
                                        <div class="message-main">
                                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                                        </div>
                                        <div class="sub-message message-main smiley-bg"><img :src='"../../assets/images/dashboard/smily.png"' alt=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="media chat-footer bg-primary"><i class="icon-face-smile" />
                            <div class="media-body">
                                <input class="form-control" type="text" placeholder="Type your message" required="">
                            </div><feather type="send" class="pr-0"/>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 xl-100">
                    <div class="card">
                        <div class="card-header card-header-border">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h5>Selling Update</h5>
                                </div>
                                <div class="col-sm-6">
                                    <div class="pull-right right-header">
                                        <div class="onhover-dropdown">
                                            <button class="btn btn-primary btn-pill" type="button">All <span class="pr-0"><i class="fa fa-angle-down" /></span></button>
                                            <div class="onhover-show-div right-header-dropdown"><a class="d-block" href="#">Shipping</a><a class="d-block" href="#">Purchase</a><a class="d-block" href="#">Total Sell</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="selling-update text-center"><feather type="activity" />
                                        <h5 class="mb-0 f-18">+500</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="selling-update text-center"><feather type="anchor" />
                                        <h5 class="mb-0 f-18">+120</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="selling-update text-center"><feather type="box" />
                                        <h5 class="mb-0 f-18">-410</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="selling-update text-center"><feather type="book" />
                                        <h5 class="mb-0 f-18">-155</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="selling-update text-center"><feather type="compass" />
                                        <h5 class="mb-0 f-18">+920</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="selling-update text-center"><feather type="cpu" />
                                        <h5 class="mb-0 f-18">+500</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="selling-update text-center mb-0 xs-mb-selling"><feather type="dollar-sign" />
                                        <h5 class="mb-0 f-18">+500</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="selling-update text-center mb-0 xs-mb-selling"><feather type="slack" />
                                        <h5 class="mb-0 f-18">+120</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="selling-update text-center mb-0"><feather type="umbrella" />
                                        <h5 class="mb-0 f-18">-410</h5>
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
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
var Knob = require('knob')
var profit = Knob({
  value: 35,
  angleOffset: 90,
  className: "review",
  thickness: 0.2,
  width: 268,
  height: 268,
  fgColor: primary,
})
import * as Chartist from 'chartist';
 export default {        
        data() {
            return {
                chart: {
                    chartData_1: {
                        labels: ['01', '02', '03', '04', '05', '06', '07'],
                        series: [
                            [0, 2, 1.2, 4, 2, 3, 1.5, 0]
                        ],
                    },
                    chartData_2: {
                        labels: ['01', '02', '03', '04', '05', '06'],
                        series: [
                            [0, 2, 1.2, 4, 2, 3, 0]
                        ]
                    },
                    chartData_3: {
                        labels: ['01', '02', '03', '04', '05', '06', '07'],
                        series: [
                            [0, 2, 1.2, 4, 2, 3, 1.5, 2, 0]
                        ]
                    },
                    chartOptions: {
                        // lineSmooth: true,
                        lineSmooth: Chartist.Interpolation.simple({divisor: 2 }),
                        fullWidth: true,
                        showArea: !0,
                        showPoint: false,
                        chartPadding: {
                            right: 0,
                            left: 0,
                            bottom: 0,
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
                        },
                    },
                    eventHandlers : [{
                        event: 'created',
                        fn(data) {
                            var defs = data.svg.elem('defs');
                            defs.elem('linearGradient', {
                                id: 'gradient2',
                                x1: 1,
                                y1: 1,
                                x2: 0,
                                y2: 0
                            }).elem('stop', {
                                offset: 0,
                                'stop-color': primary
                            }).parent().elem('stop', {
                                offset: 1,
                                'stop-color': secondary
                            });
                        }
                    }]
                
                },
                smooth_chart: {
                    chartData: {
                        labels: ['2009', '2010', '2011', '2012'],
                        series: [
                            [0, 60, 20, 60],
                            [0, 70, 10, 80]
                        ]
                    },
                    chartOptions: {
                        height: '358px',
                        fullWidth: true,
                        offset: -5,
                        low: 0,
                        chartPadding: {
                            right: 0,
                            left:-15,
                            top: 0,
                            bottom:-15
                        }
                    },
                     eventHandlers : [{
                        event: 'created',
                        fn(data) {
                            var defs = data.svg.elem('defs');
                            defs.elem('linearGradient', {
                                id: 'gradient1',
                               x1: 0,
                               y1: 0,
                               x2: 1,
                               y2: 1
                            }).elem('stop', {
                                offset: 0,
                                'stop-color': primary
                            }).parent().elem('stop', {
                                offset: 1,
                                'stop-color': secondary
                            });
                        }
                    }]
                },
                line_chart: {
                    chartData: {
                        labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
                        series: [
                            [0, 2, 1.2, 4, 2, 3, 1.5, 0],
                            [0, 1, 2.2, 1.5, 3, 1.5, 2.25, 0]
                        ]
                    },
                    chartOptions: {
                        low: 0,
                        chartPadding: {
                            right: 0,
                            left:-15,
                            top: 0,
                            bottom:-15
                        },
                        showArea: true,
                        fullWidth: true,
                        onlyInteger: true,
                        
                        axisY: {
                            low: 0,
                            scaleMinSpace: 50,
                        },
                        axisX: {
                            showGrid: false
                        }
                    },
                    eventHandlers : [{
                        event: 'created',
                        fn(data) {
                            var defs = data.svg.elem('defs');
                            defs.elem('linearGradient', {
                                id: 'gradient1',
                                x1: 0,
                                y1: 0,
                                x2: 1,
                                y2: 1
                            }).elem('stop', {
                                offset: 0,
                                'stop-color': primary
                            }).parent().elem('stop', {
                                offset: 1,
                                'stop-color': secondary
                            });
                        }
                    }]
                }
            }
        },
        mounted () {
          document.getElementById('profit').append(profit)
        }

    }
</script>
<style>
div.review canvas {
  position: relative !important;
}
div.review input {
  z-index: 1;
  display: inline-block;
}
</style>
