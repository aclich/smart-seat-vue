<script>
    import { Line } from 'vue-chartjs'
var primary = localStorage.getItem('primary_color') || '#4466f2';

    export default {
        extends: Line,
        data() {
            return {
                linechart: {
                    labels: ["","1000", "2000", "3000", "4000", "5000", "6000"],
                    datasets: [{
                        fill: true,
                        backgroundColor: "rgba(68, 102, 242,0.1)",
                        borderColor: primary,
                        borderWidth: 2.5,
                        pointBackgroundColor: primary,
                        pointBorderColor: primary,
                        lineTension: 0,
                        data: [20, 25, 22, 25, 35, 30, 38, 35, 20]
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