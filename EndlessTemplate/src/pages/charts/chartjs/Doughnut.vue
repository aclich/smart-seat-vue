<script>
    import {Doughnut} from 'vue-chartjs'

    export default {
        extends: Doughnut,
        data: () => ({
            datacollection : {
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: ["#4466f2", "#1ea6ec", "#FF5370"],
                }],
                labels: ['Primary', 'Secondary', 'Success'],
            },
                options: {
                animation: {
                    duration: 1000,
                    easing: 'linear'
                },
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
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