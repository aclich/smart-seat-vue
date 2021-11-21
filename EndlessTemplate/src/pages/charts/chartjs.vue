<template>
  <div>
      <Breadcrumbs main="Charts" title="Chartjs"/>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Bar Chart</h5>
                </div>
                <div class="card-body chart-block">
                <Bar class="chart-height"/>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Line Graph</h5>
                </div>
                <div class="card-body chart-block">
                  <Lines class="chart-height"/>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Radar Graph</h5>
                </div>
                <div class="card-body chart-block">
                  <Radar class="chart-height"/>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Line Chart</h5>
                </div>
                <div class="card-body chart-block">
                  <Linechart class="chart-height"/>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Doughnut Chart</h5>
                </div>
                <div class="card-body chart-block chart-vertical-center">
                  <Doughnut class="chart-height"/>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5>Polar Chart</h5>
                </div>
                <div class="card-body chart-block chart-vertical-center">
                  <PolarArea class="chart-height"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Container-fluid Ends-->
  </div>
</template>
<script>
  import Lines from './chartjs/Line'
  import Bar from "./chartjs/Bar";
  import Radar from "./chartjs/Radar";
  import Linechart from "./chartjs/Linechart";
  import Doughnut from "./chartjs/Doughnut";
  import PolarArea from "./chartjs/Polar";
  export default {
    components:{Bar, Lines,Radar,Linechart,Doughnut,PolarArea}
  }
</script>

<style>
</style>