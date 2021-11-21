<script>
    import { Line } from 'vue-chartjs'
var primary = localStorage.getItem('primary_color') || '#4466f2';
    export default {
        extends: Line,
        data() {
            return {
                linechart: {
                    labels: ["","2009", "2010", "2011", "2012", "2013", "2014"],
                    datasets: [{
                        fill: false,
                        borderColor: primary,
                        borderWidth: 2.5,
                        pointBackgroundColor: primary,
                        pointBorderColor: primary,
                        lineTension: 0,
                        data: [ 20, 33, 20, 50, 20, 33, 20, 0]
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    height:360,
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