<template>
	<div>
		<!-- Loader starts-->
		<!-- <div class="loader-wrapper">
			<div class="loader bg-white">
				<div class="whirly-loader"> </div>
			</div>
		</div> -->
		<!-- Loader ends-->
		<!-- page-wrapper Start-->
		<div class="page-wrapper">
			<!-- Page Body Start-->
			<div class="container-fluid p-0 m-0">
				<div class="comingsoon comingsoon-bgimg">
					<div class="comingsoon-inner text-center"><img src="../../assets/images/other-images/coming-soon-Logo.png" alt="">
						<h5>WE ARE COMING SOON</h5>
						<div class="countdown">
							<Timer :endTime="endTime"></Timer>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Timer from './comingsoon_timer'
export default{
	data(){
		return{
			startTime: "Apr 29, 2019 00:00:00",
			endTime: "Apr 29, 2020 00:00:00",
		}
	},
	components: {
		Timer
	},
}
</script>