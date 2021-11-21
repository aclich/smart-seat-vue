<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        data() {
            return {
                linechart: {
                    labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
                    datasets: [{
                        backgroundColor: "rgba(68, 102, 242, 0.3)",
                        borderColor: "rgba(68, 102, 242, 0.8)",
                        strokeColor: "#4466f2",
                        pointBackgroundColor: "#4466f2",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "#fff",
                        pointHighlightStroke: "#000",
                        data: [10, 59, 80, 81, 56, 55, 40]
                    }, {
                        backgroundColor: "rgba(30, 166, 236, 0.3)",
                        borderColor: "rgba(30, 166, 236, 0.8)",
                        strokeColor: "#1ea6ec",
                        pointBackgroundColor: "#1ea6ec",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#000",
                        pointHoverBorderColor: "#000",
                        pointHighlightStroke: "rgba(30, 166, 236, 1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
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