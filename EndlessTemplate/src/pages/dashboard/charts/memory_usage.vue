<script>
import { Line } from 'vue-chartjs'
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

export default {
    extends: Line,
    data() {
        return {
            linechart: {
                labels: ["1 min.", "10 min.", "20 min.", "30 min.", "40 min.", "50 min.", "60 min.", "70 min.", "80 min.", "90 min.", "100 min"],
                datasets: [{
                   label: "My First dataset",
                   fillColor: "transparent",
                   fill: false,
                   borderColor: primary,
                   borderWidth: 2.0,
                   pointBackgroundColor: primary,
                   pointBorderColor: primary,
                   pointStrokeColor: "#fff",
                   pointHighlightFill: "#fff",
                   pointHighlightStroke: "#000",
                   data: [0, 59, 80, 40, 100, 60, 95, 20, 70, 40, 70]
               }, {
                   label: "My Second dataset",
                   fillColor: "transparent",
                   fill: false,
                   borderColor: secondary,
                   borderWidth: 2.0,
                   pointBackgroundColor: secondary,
                   pointBorderColor: secondary,
                   pointStrokeColor: "#fff",
                   pointHighlightFill: "#000",
                   pointHighlightStroke: "rgba(30, 166, 236, 1)",
                   data: [0, 48, 30, 19, 86, 27, 90, 60, 30, 70, 40]
               },{
                   label: "My third dataset",
                   fillColor: "transparent",
                   fill: false,
                   borderColor: "#22af47",
                   borderWidth: 2.0,
                   pointBackgroundColor: '#22af47',
                   pointBorderColor: "#22af47",
                   pointStrokeColor: "#fff",
                   pointHighlightFill: "#000",
                   pointHighlightStroke: "rgba(30, 166, 236, 1)",
                   data: [0, 30, 40, 10 , 60, 40, 70, 30, 20, 80, 50]
               }]
           },
           options: {
               legend: {
                display: false
            },
            responsive: true,
            animation: false,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                display: true,
            }],
            yAxes: [{
                display: true,
                ticks: {
                  beginAtZero: true,
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