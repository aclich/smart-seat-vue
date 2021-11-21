<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        data() {
            return {
                linechart: {
                    labels: ["","10", "20", "30", "40", "50", "60", "70", "80"],
                    datasets: [{
                        backgroundColor: "rgba(68, 102, 242, 0.2)",
                        borderColor: "#4466f2",
                        pointBackgroundColor: "#4466f2",
                        data: [10, 20, 40, 30, 0, 20, 10, 30, 10]
                    },{
                        backgroundColor: "rgba(30, 166, 236, 0.2)",
                        borderColor: "#1ea6ec",
                        pointBackgroundColor: "#1ea6ec",
                        data: [20, 40, 10, 20, 40, 30, 40, 10, 20]
                    }, {
                        backgroundColor: "rgb(64, 153, 255 , 0.2)",
                        borderColor: "#007bff",
                        pointBackgroundColor: "#007bff",
                        data: [60, 10, 40, 30, 80, 30, 20, 90, 0]
                    }]
                },
                options: {
                    animation: {
                        duration: 1000,
                        easing: 'linear'
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                        yAxes: [{ticks: { beginAtZero: true, stepSize: 5,}}],
                        xAxes: [{barThickness: 39,}],
                    },
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    elements: {
                        line: {
                            tension: 0.000001
                        }
                    },

                }
            }
        },
        mounted () {
            this.renderChart(this.linechart, this.options)
        }
    }
</script>

<style>
</style>