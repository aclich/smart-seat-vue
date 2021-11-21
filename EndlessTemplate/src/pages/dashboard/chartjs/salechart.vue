<script>
    import { Line } from 'vue-chartjs'
var primary = localStorage.getItem('primary_color') || '#4466f2';
    export default {
        extends: Line,
        data() {
            return {
                linechart: {
                    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015"],
                    datasets: [{
                        fill: false,
                        borderColor: primary,
                        borderWidth: 2.5,
                        pointBackgroundColor: primary,
                        pointBorderColor: primary,
                        data: [ 0, 2.25, 1.25, 3, 1.25, 2.25,0 ]
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
                        gridLines: {
                        color: "transparent",
                        drawTicks: true,
                       }
                      }],
                      yAxes: [{
                        display: true,
                        ticks: {
                        beginAtZero: true
                       }
                      }]
                  }
                },
                legend: false
            }
        },
        mounted () {
            this.renderChart(this.linechart, this.options)
        }
    }
</script>

<style>
</style>