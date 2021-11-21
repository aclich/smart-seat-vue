<script>
    import { Line } from 'vue-chartjs'
    import 'chartjs-plugin-streaming';
var primary = localStorage.getItem('primary_color') || '#4466f2';
    export default {
        extends: Line,
        data() {
            return {
                linechart: {
                    labels: ["0", "50", "100", "150", "200", "250", "300", "350"],
                    datasets: [{
                        fill: false,
                        borderColor: primary,
                        borderWidth: 2.5,
                        pointBackgroundColor: primary,
                        pointBorderColor: primary,
                        data: [{
                            x: 0,
                            y: "1.000000000"
                        },
                        {
                            x: 50,
                            y: "0.642787610"
                        },
                        {
                            x: 100,
                            y: "-0.173648178"
                        },
                        {
                            x: 150,
                            y: "-0.866025404"
                        },
                        {
                            x: 200,
                            y: "-0.939692621"
                        },
                        {
                            x: 250,
                            y: "-0.342020143"
                        },
                        {
                            x: 300,
                            y: "0.500000000"
                        },
                        {
                            x: 350,
                            y: "0.984807753"
                        }]
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
                       },
                      }],
                      yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        },
                      }],
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