<script>
  import { Doughnut } from 'vue-chartjs'
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

  export default {
    extends: Doughnut,
    data () {
      return {
        datacollection: {
          labels: ["Frontend", "Backend", "Api", "Issues"],
          datasets: [
            {
              label: 'myDoughnutGraph',
              backgroundColor: [primary, secondary, '#007bff', '#FF5370'],
              borderWidth: 0,
              hoverBorderWidth: 0,
              data: [30, 5, 3, 10],
            }
          ]
        },
        options: {
          legend: {
            display: false,
          }
        }

      }
    },
    mounted () {
      this.renderChart(this.datacollection, this.options, {responsive: true, maintainAspectRatio: false})
    }
  }
</script>