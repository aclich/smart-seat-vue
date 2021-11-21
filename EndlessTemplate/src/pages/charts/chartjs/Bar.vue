<script>
    import { Bar } from 'vue-chartjs'
    export default {
        extends: Bar,
        data: () => ({
                datacollection: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        barThickness:50,
                        data: [35, 59, 80, 81, 56, 55, 40],
                        backgroundColor:'rgba(30, 166, 236, 0.4)',
                        borderColor:"rgba(30, 166, 236,0.8)",
                        borderWidth: 3,
                        hoverBackgroundColor:"rgba(30, 166, 236,0.8)"
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        backgroundColor:'rgba(68, 102, 242, 0.4)',
                        borderColor:"rgba(68, 102, 242, 0.8)",
                        borderWidth: 3,
                        hoverBackgroundColor:"rgba(68, 102, 242, 0.8)"
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
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    mode: 'index'
                },
            }
        }),

        mounted () {
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>

<style>
</style>