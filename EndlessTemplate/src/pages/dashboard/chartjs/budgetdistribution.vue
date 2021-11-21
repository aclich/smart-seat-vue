<script>
import { Pie } from 'vue-chartjs'
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

export default {
	extends: Pie,
	data() {
		return {
			piechart: {
				labels: ["Design","Coding", "Marketing", "Wireframing", "Extra"],
				datasets: [{
					label: 'Budget Distribution',
					data: [5,10,15,20,25],
					backgroundColor: [primary, secondary, "#22af47", "#007bff", "#FF5370"],
					borderWidth: 0,
					hoverBorderWidth: 2,
					weight:1,
					hoverBorderColor:primary,
					tooltipTitleFontSize: 50,
				}]
			},
			options: {
				legend: {
					display: true
				}
			}
		}
	},
	mounted () {
		this.renderChart(this.piechart, this.options)
	}
}
</script>