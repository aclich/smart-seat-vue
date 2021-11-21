<script>
import { Line } from 'vue-chartjs'
import 'chartjs-plugin-streaming';
var primary = localStorage.getItem('primary_color') || '#4466f2';
export default {
    extends: Line,
    data() {
        return {
            linechart: {
                labels: ["","2009", "2010", "2011", "2012", "2013", "2014"],
                datasets: [{
                    fill: true,
                    backgroundColor: "rgba(183, 196, 246, 0.5)",
                    borderColor: primary,
                    borderWidth: 1.5,
                    pointBackgroundColor: primary,
                    pointBorderColor: primary,
                    pointBorderWidth: 0,
                    lineTension: 0,
                    data: [{
                      x: 1556095330443,
                      y: 16
                    }]
               }]
           },
           options: {
            legend: {
              display: false
            },
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              point:{
                  radius: 0
              }
            },
            scales: {
              xAxes: [{
                display: false,
                type: 'realtime',
                realtime: {
                  onRefresh: function(chart) {
                    chart.data.datasets.forEach(function(dataset) {
                      dataset.data.push({
                        x: Date.now(),
                        y: (Math.random() > 0.1 ? 1.0 : 1.0) * Math.round(Math.random() * 100)
                      });
                    });
                  },
                  delay: 1000,
                  duration: 50000,
                  refresh: 1000,
                },
              }],
              yAxes: [{
                display: true,
                ticks: {
                  beginAtZero: true,
                  fixedStepSize: 10,
                  precision:0
                }
              }]
            }
  },
  legend: false,
}
},
mounted () {
    this.renderChart(this.linechart, this.options)
}
}
</script>

<style>
</style>
