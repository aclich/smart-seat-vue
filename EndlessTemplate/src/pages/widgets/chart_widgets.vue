<template>
  <div>
    <Breadcrumbs main="Widgets" title="Chart"/>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <!-- Chart widget top Start-->
      <div class="row">
        <div class="col-xl-4 col-md-12">
          <div class="card">
            <div class="chart-widget-top">
              <div class="row card-body">
                <div class="col-5">
                  <h5 class="font-primary">SALE</h5><span class="num"><span class="counter">90</span>%<i class="icon-angle-up f-12 ml-1"></i></span>
                </div>
                <div class="col-7 text-right">
                  <h4 class="num total-value">$ <span class="counter">3654</span>.00</h4>
                </div>
              </div>
              <div>
                <chartist
                  id="chart-widget-top-first"
                  class="flot-chart-placeholder"
                  type="Line"
                  :data="chart.chartData_1"
                  :options="chart.chartOptions">
                </chartist>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-12">
        <div class="card">
          <div class="chart-widget-top">
            <div class="row card-body">
              <div class="col-7">
                <h5 class="font-primary">PROJECTS</h5><span class="num"><span class="counter">30</span>%<i class="icon-angle-up f-12 ml-1"></i></span>
              </div>
              <div class="col-5 text-right">
                <h4 class="num total-value counter">12569</h4>
              </div>
            </div>
            <div>
              <chartist
              id="chart-widget-top-second"
              class="flot-chart-placeholder"
              type="Line"
              :data="chart.chartData_2"
              :options="chart.chartOptions">
            </chartist>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-md-12">
      <div class="card">
        <div class="chart-widget-top">
          <div class="row card-body">
            <div class="col-8">
              <h5 class="font-primary">PRODUCTS</h5><span class="num"><span class="counter">68</span>%<i class="icon-angle-up f-12 ml-1"></i></span>
            </div>
            <div class="col-4 text-right">
              <h4 class="num total-value"><span class="counter">93</span>M</h4>
            </div>
          </div>
          <div>
            <chartist
            id="chart-widget-top-third"
            class="flot-chart-placeholder"
            type="Line"
            :data="chart.chartData_3"
            :options="chart.chartOptions">
          </chartist>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Chart widget top Ends-->
<!-- Chart widget with bar chart Start-->
<div class="row">
  <div class="col-xl-6 col-md-12">
    <div class="card o-hidden">
      <div class="bar-chart-widget">
        <div class="top-content bg-primary">
          <div class="row">
            <div class="col-7">
              <chartist
              id="chart-bar-widget-first"
              class="bar-chart card-body custom-widget pb-0"
              type="Bar"
              :data="bartChart.chartData_1"
              :options="bartChart.chartOptions">
            </chartist>
          </div>
          <div class="col-5">
            <div class="earning-details">
              <div class="text-left"><span>Marketing Expenses</span>
                <h4 class="mt-1 num mb-0">$ <span class="counter">3654</span></h4>
              </div><i class="icon-announcement"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-content card-body">
        <div class="row">
          <div class="col-4 b-r-light">
            <div><span class="num font-primary">12%<i class="icon-angle-up f-12 ml-1"></i></span><span class="text-muted mt-2 mb-2 block-bottom">Marketing</span>
              <h4 class="num m-0">$<span class="counter color-bottom">9313</span></h4>
            </div>
          </div>
          <div class="col-4 b-r-light">
            <div><span class="num font-primary">15%<i class="icon-angle-up f-12 ml-1"></i></span><span class="text-muted mt-2 mb-2 block-bottom">Affiliate</span>
              <h4 class="num m-0">$<span class="counter color-bottom">2314</span></h4>
            </div>
          </div>
          <div class="col-4">
            <div><span class="num font-primary">34%<i class="icon-angle-up f-12 ml-1"></i></span><span class="text-muted mt-2 mb-2 block-bottom">Advertise</span>
              <h4 class="num m-0">$<span class="counter color-bottom"> 4219</span></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-xl-6 col-md-12">
  <div class="card o-hidden">
    <div class="bar-chart-widget">
      <div class="top-content bg-primary">
        <div class="row">
          <div class="col-7">
            <chartist
            id="chart-bar-widget-second"
            class="bar-chart custom-widget card-body pb-0"
            type="Bar"
            :data="bartChart.chartData_2"
            :options="bartChart.chartOptions">
          </chartist>
        </div>
        <div class="col-5">
          <div class="earning-details">
            <div class="text-left"><span>Total Earning</span>
              <h4 class="mt-1 num mb-0"><span class="counter">3653</span> M</h4>
            </div><i class="icofont icofont-coins"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-content card-body">
      <div class="row">
        <div class="col-4 b-r-light">
          <div><span class="num font-primary">12%<i class="icon-angle-up f-12 ml-1"></i></span><span class="text-muted mt-2 mb-2 block-bottom">Year</span>
            <h4 class="num m-0"><span class="counter color-bottom">3659</span>M</h4>
          </div>
        </div>
        <div class="col-4 b-r-light">
          <div><span class="num font-primary">15%<i class="icon-angle-up f-12 ml-1"></i></span><span class="text-muted mt-2 mb-2 block-bottom">Month</span>
            <h4 class="num m-0"><span class="counter color-bottom">698</span>M</h4>
          </div>
        </div>
        <div class="col-4">
          <div><span class="num font-primary">34%<i class="icon-angle-up f-12 ml-1"></i></span><span class="text-muted mt-2 mb-2 block-bottom">Today</span>
            <h4 class="num m-0"><span class="counter color-bottom">9361</span>M</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<!-- Chart widget with bar chart Ends-->
<!-- small widgets Start-->
<div class="row">
  <!-- Live Product chart widget Start-->
  <div class="xl-50 col-md-6">
    <div class="small-chart-widget chart-widgets-small">
      <div class="card">
        <div class="card-header">
          <h5>Live Products</h5>
        </div>
        <div class="card-body bg-primary">
          <div class="chart-container">
            <!-- <div class="live-products"></div> -->
            <chartist
            class="live-products"
            type="Line"
            :data="productsChart.chartData"
            :options="productsChart.chartOptions">
          </chartist>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Live Product chart widget Ends-->
<!-- Turnover chart widget Start-->
<div class="xl-50 col-md-6">
  <div class="small-chart-widget chart-widgets-small">
    <div class="card">
      <div class="card-header">
        <h5>Turnover</h5>
      </div>
      <div class="card-body bg-secondary">
        <div class="chart-container">
          <chartist
          class="turnover"
          type="Bar"
          :data="turnoverChart.chartData"
          :options="turnoverChart.chartOptions">
        </chartist>
      </div>
    </div>
  </div>
</div>
</div>
<!-- Turnover chart widget Ends-->
<!-- Monthly Sale chart widget Start-->
<div class="xl-50 col-md-6">
  <div class="small-chart-widget chart-widgets-small">
    <div class="card">
      <div class="card-header">
        <h5>Monthly Sales</h5>
      </div>
      <div class="card-body bg-secondary">
        <div class="chart-container">
          <chartist
          class="monthly"
          type="Bar"
          :data="monthlyChart.chartData"
          :options="monthlyChart.chartOptions">
        </chartist>
      </div>
    </div>
  </div>
</div>
</div>
<!-- Monthly Sale chart widget Ends-->
<!-- Uses chart widget Start-->
<div class="xl-50 col-md-6">
  <div class="small-chart-widget chart-widgets-small">
    <div class="card">
      <div class="card-header">
        <h5>Uses</h5>
      </div>
      <div class="card-body bg-primary">
        <div class="chart-container">
          <chartist
          class="uses"
          type="Line"
          :data="usesChart.chartData"
          :options="usesChart.chartOptions">
        </chartist>
      </div>
    </div>
  </div>
</div>
</div>
<!-- Uses chart widget Ends-->
</div>
<!-- small widgets Ends-->
<!-- status widget Start-->
<div class="row">
  <div class="col-xl-4 col-lg-12">
    <div class="status-widget">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-9">
              <h5>Finance</h5>
            </div>
            <div class="col-3 text-sm-right"><feather class="text-muted" type="navigation"></feather></div>
          </div>
        </div>
        <div class="card-body">
          <div class="status-details">
            <div class="row">
              <div class="col-4 text-center"><span>Investor</span>
                <h4 class="counter mb-0">3659</h4>
              </div>
              <div class="col-4 text-center"><span>Money</span>
                <h4 class="mb-0">$<span class="counter">362</span></h4>
              </div>
              <div class="col-4 text-center"><span>Earning</span>
                <h4 class="mb-0"><span class="counter">86</span>%</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="status-chart bg-primary">
          <div class="chart-container">
            <!-- <div class="flot-chart-placeholder" id="finance-graph"></div> -->
            <chartist
              class="flot-chart-placeholder"
              type="Line"
              :data="widgetLineChart.chartData_1"
              :options="widgetLineChart.chartOptions">
            </chartist>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-4 col-lg-12">
    <div class="status-widget">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-9">
              <h5>Order Status</h5>
            </div>
            <div class="col-3 text-sm-right"><feather class="text-muted" type="shopping-bag"></feather></div>
          </div>
        </div>
        <div class="card-body">
          <div class="status-details">
            <div class="row">
              <div class="col-4 text-center"><span>Complete</span>
                <h4 class="mb-0"><span class="counter">62</span>%</h4>
              </div>
              <div class="col-4 text-center"><span>Pending</span>
                <h4 class="mb-0"><span class="counter">36</span>%</h4>
              </div>
              <div class="col-4 text-center"><span>Cancle</span>
                <h4 class="mb-0"><span class="counter">20</span>%</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="order-chart bg-secondary">
          <div class="chart-container">
            <!-- <div class="flot-chart-placeholder" id="order-graph"></div> -->
            <chartist
              class="flot-chart-placeholder"
              type="Line"
              :data="widgetLineChart.chartData_2"
              :options="widgetLineChart.chartOptions">
            </chartist>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-4 col-lg-12">
    <div class="status-widget">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-9">
              <h5>Skill Status</h5>
            </div>
            <div class="col-3 text-sm-right"><feather class="text-muted" type="trending-up"></feather></div>
          </div>
        </div>
        <div class="card-body">
          <div class="status-details">
            <div class="row">
              <div class="col-4 text-center"><span>Design</span>
                <h4 class="mb-0"><span class="counter">25</span>%</h4>
              </div>
              <div class="col-4 text-center"><span>Market</span>
                <h4 class="mb-0"><span class="counter">40</span>%</h4>
              </div>
              <div class="col-4 text-center"><span>Converse</span>
                <h4 class="mb-0"><span class="counter">35</span>%</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="status-chart bg-primary">
          <div class="chart-container">
            <!-- <div class="flot-chart-placeholder" id="skill-graph"></div> -->
            <chartist
              class="flot-chart-placeholder"
              type="Line"
              :data="widgetLineChart.chartData_3"
              :options="widgetLineChart.chartOptions">
            </chartist>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- status widget Ends-->
<!-- Browser uses and website visiter widget Start-->
<div class="row">
  <!-- browser uses widget chart Start-->
  <div class="col-sm-6">
    <div class="donut-chart-widget">
      <div class="card">
        <div class="card-header">
          <h5>Browser Uses</h5>
        </div>
        <div class="card-body">
          <div class="chart-container">
            <BrowserUsesChart class="flot-chart-placeholder"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- browser uses widget chart Ends-->
  <!-- Website visiter widget Start-->
  <div class="col-sm-6">
    <div class="donut-chart-widget">
      <div class="card">
        <div class="card-header">
          <h5>Website Visiter</h5>
        </div>
        <div class="card-body">
          <div class="chart-container">
            <WebsiteVisitorChart class="flot-chart-placeholder" :width="300" :height="300"/>
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
import * as Chartist from 'chartist';

import BrowserUsesChart from './chartjs/browser_uses'
import WebsiteVisitorChart from './chartjs/website_visitor'

export default {
  name:'ChartWidgets',
  data() {
    return {
      chart: {
        chartData_1: {
          series: [
          [25, 50, 30, 40, 60, 80, 50, 10, 50, 13, 0, 10, 30, 40, 10, 15, 20]
          ]
        },
        chartData_2: {
          series: [
          [25, 35, 70, 100, 90, 50, 60, 80, 40, 50, 60, 40, 80, 70, 60, 50, 100]
          ]
        },
        chartData_3: {
          series: [
          [50, 100, 80, 60, 50, 60, 40, 80, 40, 50, 60, 40, 60, 70, 40, 50, 20]
          ]
        },
        chartOptions: {
          low: 0,
          offset: 0,
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
          },
          axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
          },
          chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
          },
          lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
          }),
          showArea: true,
          fullWidth: true,
          height:100,
          showPoint: false,
        },
      },
      bartChart: {
        chartData_1: {
          series: [
          [80.00,80.00,50.00,20.00,60.00,0,80.00,50.00,110.00,20.00,50.00,90,60,30]
          ]
        },
        chartData_2: {
          series: [
          [50.00,110.00,20.00,50.00,90,60,30,70.00,70.00,50.00,20.00,60.00,0,70.00]
          ]
        },
        chartOptions: {
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
          },
          axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
          },
          chartPadding: {
            bottom: 0,
            top: 0,
            left: 0
          },
          showArea: true,
          fullWidth: true,
          height:200
        },
      },
      productsChart: {
        chartData: {
          labels: ['1', '2', '3', '4', '5', '6'],
          series: [
          [1, 5, 2, 5, 4, 3, 6],
          ]
        },
        chartOptions: {
          low: 0,
          showArea: false,
          showPoint: false,
          fullWidth: true,
        },
      },
      turnoverChart: {
        chartData: {
          labels: ['1', '2', '3', '4', '5', '6'],
          series: [
          [1.9, 4.4, 1.5, 5, 4.4, 3.4],
          [6.4, 5.7, 7, 4, 5.5, 3.5],
          [5, 2.3, 3.6, 6, 3.6, 2.3]
          ]
        }
      },
      monthlyChart: {
        chartData: {
          labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10'],
          series: [
          [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
          ]
        },
        chartOptions: {
          stackBars: true
        },
      },
      usesChart: {
        chartData: {
          labels: ['1', '2', '3', '4', '5', '6'],
          series: [
          [1, 5, 2, 5, 4, 3],
          [2, 3, 4, 8, 1, 2],
          [5, 4, 3, 2, 1, 0.5]
          ]
        },
        chartOptions: {
          low: 0,
          showArea: false,
          showPoint: false,
          fullWidth: true,
        }
      },
      widgetLineChart : {
        chartData_1: {
          series: [
            [5, 30, 27, 35, 30, 50, 70],
            [0, 10, 20, 14, 40, 30, 60]
          ]
        },
        chartData_2: {
          series: [
            [40, 15, 25, 20, 15, 20, 10, 25, 35, 13,35, 10, 30, 20, 10, 15, 20],
          ] 
        },
        chartData_3: {
          series: [
            [5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20],
          ] 
        },
        chartOptions: {
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
          },
          axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
          },
          chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
          },
          lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
          }),
          showArea: true,
          fullWidth: true,
          height:200,
          showPoint: false,
        }
      },

    }
  },
  components: {
    BrowserUsesChart,
    WebsiteVisitorChart
  },
}
</script>
