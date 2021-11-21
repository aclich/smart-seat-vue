<script>
    import { Line } from 'vue-chartjs'
var primary = localStorage.getItem('primary_color') || '#4466f2';

    export default {
        extends: Line,
        data() {
            return {
                linechart: {
                    labels: ["","2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
                    datasets: [{
                        fill: false,
                        borderColor: primary,
                        borderWidth: 2.5,
                        pointBackgroundColor: primary,
                        pointBordereWidth: 5,
                        pointBorderColor: primary,
                        lineTension: 0,
                        data: [5, 0, 5, 0, 15, 0, 5, 0, 5]
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                      responsive: true,
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
                            beginAtZero: true,
                            fixedStepSize: 5,
                            precision:0
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