<script>
    import {PolarArea} from 'vue-chartjs'

    export default {
        extends: PolarArea,
        data: () => ({

            data: {
                datasets: [{
                    data:[300, 50, 100, 40, 120],
                    backgroundColor: ["#4466f2", "#ffff00", "#22af47", "#ffa500", "#ff2046"],
                    label: 'My dataset', // for legend
                    borderColor:'#fff',
                }],
                labels: [
                    'Blue',
                    'Yellow',
                    'Green',
                    'Orange',
                    'red'
                ]
            },
            option: {
                lineWidth:10,
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
                }
            }
        }),

        mounted () {
            this.renderChart(this.data, this.option)
        }
    }
</script>

<style>
</style>