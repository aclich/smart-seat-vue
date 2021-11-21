<template>
	<div>
		<Breadcrumbs main="Dashboard" title="Project"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">

				<div class="col-sm-12">
					<b-tabs nav-class="border-tab tabs-project">
						<b-tab title="Home" active>
							<template slot="title">
								<feather type="home"></feather>Home
							</template>
							<div class="row">
								<div class="col-xl-3 col-sm-6">
									<div class="card">
										<div class="card-body">
											<div class="media">
												<div class="select2-drpdwn-project select-options">
													<select class="form-control form-control-primary btn-square" name="select">
														<option value="opt1">Today</option>
														<option value="opt2">Yesterday</option>
														<option value="opt3">Tomorrow</option>
														<option value="opt4">Monthly</option>
														<option value="opt5">Weekly</option>
													</select>
												</div>
											</div>
											<div class="project-widgets text-center">
												<h1 class="font-primary counter">45</h1>
												<h6 class="mb-0">Due Tasks</h6>
											</div>
										</div>
										<div class="card-footer project-footer">
											<h6 class="mb-0">Completed: <span class="counter">14</span></h6>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-sm-6">
									<div class="card">
										<div class="card-body">
											<div class="media">
												<h5 class="mb-0">Features</h5>
											</div>
											<div class="project-widgets text-center">
												<h1 class="font-primary counter">80</h1>
												<h6 class="mb-0">Proposals</h6>
											</div>
										</div>
										<div class="card-footer project-footer">
											<h6 class="mb-0">Implemented: <span class="counter">14</span></h6>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-sm-6">
									<div class="card">
										<div class="card-body">
											<div class="media">
												<h5 class="mb-0">Issues</h5>
											</div>
											<div class="project-widgets text-center">
												<h1 class="font-primary counter">34</h1>
												<h6 class="mb-0">Open</h6>
											</div>
										</div>
										<div class="card-footer project-footer">
											<h6 class="mb-0">Closed today: <span class="counter">10</span></h6>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-sm-6">
									<div class="card">
										<div class="card-body">
											<div class="media">
												<h5 class="mb-0">Overdue</h5>
											</div>
											<div class="project-widgets text-center">
												<h1 class="font-primary counter">7</h1>
												<h6 class="mb-0">Tasks</h6>
											</div>
										</div>
										<div class="card-footer project-footer">
											<h6 class="mb-0">Task Solved: <span class="counter">4</span></h6>
										</div>
									</div>
								</div>
								<div class="col-xl-6">
									<div class="card">
										<div class="card-header project-header">
											<div class="row">
												<div class="col-sm-8">
													<h5>Task Distribution</h5>
												</div>
												<div class="col-sm-4">
													<div class="select2-drpdwn-project select-options">
														<select class="form-control form-control-primary btn-square" name="select">
															<option value="opt1">Today</option>
															<option value="opt2">Yesterday</option>
															<option value="opt3">Tomorrow</option>
															<option value="opt4">Monthly</option>
															<option value="opt5">Weekly</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="card-body chart-vertical-center project-charts">
											<TaskChart :width="530" :height="265" />
										</div>
									</div>
								</div>
								<div class="col-xl-6">
									<div class="card">
										<div class="card-header project-header">
											<div class="row">
												<div class="col-sm-8">
													<h5>Schedule</h5>
												</div>
												<div class="col-sm-4">
													<div class="select2-drpdwn-project select-options">
														<select class="form-control form-control-primary btn-square" name="select">
															<option value="opt1">Today</option>
															<option value="opt2">Yesterday</option>
															<option value="opt3">Tomorrow</option>
															<option value="opt4">Monthly</option>
															<option value="opt5">Weekly</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="card-body">
											<div class="schedule">
												<div class="media">
													<div class="media-body">
														<h6>Group Meeting</h6>
														<p>30 minutes</p>
													</div>
													<div class="dropdown schedule-dropdown">
														<b-dropdown variant="link" size="lg" right text="Right align" caret>
															<template slot="button-content"><feather type="more-horizontal"></feather></template>

															<b-dropdown-item href="#">Project</b-dropdown-item>
															<b-dropdown-item href="#">Requirements</b-dropdown-item>
															<b-dropdown-item href="#">Discussion</b-dropdown-item>
															<b-dropdown-item href="#">Planning</b-dropdown-item>
														</b-dropdown>
													</div>
												</div>
												<div class="media">
													<div class="media-body">
														<h6>Public Beta Release</h6>
														<p>10:00 PM</p>
													</div><feather type="more-horizontal"></feather>
												</div>
												<div class="media">
													<div class="media-body">
														<h6>Lunch</h6>
														<p>12:30 PM</p>
													</div><feather type="more-horizontal"></feather>
												</div>
												<div class="media">
													<div class="media-body">
														<h6>Clients Timing</h6>
														<p>2:00 PM to 6:00 PM</p>
													</div><feather type="more-horizontal"></feather>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-12">
									<div class="card">
										<div class="card-header">
											<h5>Github Isuues</h5>
										</div>
										<div class="card-body">
											<div class="row">
												<div class="col-xl-6 xl-100">
													<div class="row more-projects">
														<div class="col-sm-6 xl-4">
															<div class="projects-main">
																<div class="project-content">
																	<h6>Created</h6>
																	<h5 class="counter mb-0">27</h5>
																</div>
																<chartist
																		class="project-small-chart-1 project-small"
																		type="Line"
																		:data="chart1.data"
																		:options="chart1.options"
																		:event-handlers="chart1.eventHandlers" />
															</div>
														</div>
														<div class="col-sm-6 xl-4">
															<div class="projects-main">
																<div class="project-content">
																	<h6>Fixed</h6>
																	<h5 class="counter mb-0">8</h5>
																</div>
																<chartist
																		class="project-small-chart-2 project-small"
																		type="Line"
																		:data="chart2.data"
																		:options="chart2.options"
																		:event-handlers="chart2.eventHandlers" >
																</chartist>
															</div>
														</div>
														<div class="col-sm-6 xl-4">
															<div class="projects-main">
																<div class="project-content">
																	<h6>Re-opened</h6>
																	<h5 class="counter mb-0">2</h5>
																</div>
																<chartist
																		class="project-small-chart-3 project-small"
																		type="Line"
																		:data="chart3.data"
																		:options="chart3.options"
																		:event-handlers="chart3.eventHandlers" >
																</chartist>
															</div>
														</div>
														<div class="col-sm-6 xl-4">
															<div class="projects-main">
																<div class="project-content">
																	<h6>Closed</h6>
																	<h5 class="counter mb-0">10</h5>
																</div>
																<chartist
																		class="project-small-chart-4 project-small"
																		type="Line"
																		:data="chart4.data"
																		:options="chart4.options"
																		:event-handlers="chart4.eventHandlers" >
																</chartist>
															</div>
														</div>
														<div class="col-sm-6 xl-4">
															<div class="projects-main">
																<div class="project-content">
																	<h6>Wont'fix</h6>
																	<h5 class="counter mb-0">25</h5>
																</div>
																<chartist
																		class="project-small-chart-5 project-small"
																		type="Line"
																		:data="chart5.data"
																		:options="chart5.options"
																		:event-handlers="chart5.eventHandlers" >
																</chartist>
															</div>
														</div>
														<div class="col-sm-6 xl-4">
															<div class="projects-main">
																<div class="project-content">
																	<h6>Need's test</h6>
																	<h5 class="counter mb-0">5</h5>
																</div>
																<chartist
																		class="project-small-chart-6 project-small"
																		type="Line"
																		:data="chart6.data"
																		:options="chart6.options"
																		:event-handlers="chart6.eventHandlers" >
																</chartist>
															</div>
														</div>
													</div>
												</div>
												<div class="col-xl-6 xl-100 github-lg">
													<div class="show-value-top d-flex">
														<div class="value-left d-inline-block">
															<div class="square bg-primary d-inline-block"></div><span>Closed Issues</span>
														</div>
														<div class="value-right d-inline-block">
															<div class="square d-inline-block bg-secondary"></div><span>Issues</span>
														</div>
													</div>
													<div class="bar-chart-project">
														<chartist
																class="bar-square"
																type="Bar"
																:data="chart7.data"
																:options="chart7.options">
														</chartist>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</b-tab>
						<b-tab title="Profile">
							<template slot="title">
								<feather type="activity"></feather>Budget Summary
							</template>
							<div class="row">
								<div class="col-sm-12">
									<div class="card">
										<div class="card-header">
											<h5>Current Progress</h5>
										</div>
										<div class="card-body">
											<div class="table-responsive current-progress">
												<table class="table table-bordernone">
													<tbody>
													<tr>
														<td>
															<div class="d-inline-block align-middle"><img class="img-radius img-50 align-top m-r-15 rounded-circle" src="../../assets/images/user/1.jpg" alt="">
																<div class="d-inline-block">
																	<h6>Web application</h6>
																	<p>Design & development</p>
																</div>
															</div>
														</td>
														<td>
															<div class="d-inline-block align-middle"><span>Latest Updated Today at 1:30 PM</span><span class="ml-current"><i class="fa fa-clock-o"></i>10:32</span><span class="ml-current"><i class="fa fa-comment"></i>540</span></div>
														</td>
														<td>
															<div class="progress sm-progress-bar">
																<div class="progress-bar bg-primary" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div class="d-inline-block align-middle"><img class="img-radius img-50 align-top m-r-15 rounded-circle" src="../../assets/images/user/4.jpg" alt="">
																<div class="d-inline-block">
																	<h6>Login module</h6>
																	<p>Development</p>
																</div>
															</div>
														</td>
														<td>
															<div class="d-inline-block align-middle"><span>Latest Updated Today at 4:00 PM</span><span class="ml-current"><i class="fa fa-clock-o"></i>1:32</span><span class="ml-current"><i class="fa fa-comment"></i>700</span></div>
														</td>
														<td>
															<div class="progress sm-progress-bar">
																<div class="progress-bar bg-primary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div class="d-inline-block align-middle"><img class="img-radius img-50 align-top m-r-15 rounded-circle" src="../../assets/images/user/7.jpg" alt="">
																<div class="d-inline-block">
																	<h6>Module testing</h6>
																	<p>Testing</p>
																</div>
															</div>
														</td>
														<td>
															<div class="d-inline-block align-middle"><span>Latest Updated Today at 5:45 PM</span><span class="ml-current"><i class="fa fa-clock-o"></i>11:40</span><span class="ml-current"><i class="fa fa-comment"></i>425</span></div>
														</td>
														<td>
															<div class="progress sm-progress-bar">
																<div class="progress-bar bg-primary" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
														</td>
													</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-6 xl-100">
									<div class="card">
										<div class="card-header">
											<h5>Budget Distribution</h5>
										</div>
										<div class="card-body chart-block">
											<BudgetDistribution class="chart-overflow budget-chart" />
										</div>
									</div>
								</div>
								<div class="col-xl-6 xl-100">
									<div class="card">
										<div class="card-header project-header">
											<div class="row">
												<div class="col-sm-8">
													<h5>Spent</h5>
												</div>
												<div class="col-sm-4">
													<div class="select2-drpdwn-project select-options">
														<select class="form-control form-control-primary btn-square" name="select">
															<option value="opt1">Today</option>
															<option value="opt2">Yesterday</option>
															<option value="opt3">Tomorrow</option>
															<option value="opt4">Monthly</option>
															<option value="opt5">Weekly</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="card-body spent">
											<div class="spent-graph">
												<div class="d-flex">
													<div class="project-budget">
														<h6>Weekly spent</h6>
														<h2 class="mb-0"><span><feather type="dollar-sign"></feather>12,5000</span></h2>
													</div>
													<div class="projects-main mb-0">
														<chartist class="xm-mb-peity" type="Bar" :data="spent1.data" :options="spent1.options" />
													</div>
												</div>
											</div>
										</div>
											<div class="card-body spent">
												<div class="spent-graph">
													<div class="d-flex">
														<div class="project-budget">
															<h6>Total spent</h6>
															<h2 class="mb-0"><span><feather type="dollar-sign"></feather>15,7452</span></h2>
														</div>
														<div class="projects-main mb-0">
															<chartist class="xm-mb-peity" type="Bar" :data="spent2.data" :options="spent2.options" />
														</div>
													</div>
												</div>
											</div>
											<div class="card-body spent">
												<div class="spent-graph">
													<div class="d-flex">
														<div class="project-budget">
															<h6>Remaining</h6>
															<h2 class="mb-0"><span><feather type="dollar-sign"></feather>18,5438</span></h2>
														</div>
														<div class="projects-main mb-0">
															<div class="xm-mb-peity"><span class="bar-colours-3"></span></div>
															<chartist class="xm-mb-peity" type="Bar" :data="spent3.data" :options="spent3.options" />
														</div>
													</div>
												</div>
											</div>
											<div class="card-footer spent">
												<div class="spent-graph">
													<div class="d-flex">
														<div class="project-budget m-0">
															<h6>Total Budget</h6>
															<h2 class="mb-0"><span><feather type="dollar-sign"></feather>34,5812</span></h2>
														</div>
													</div>
												</div>
											</div>
									</div>
								</div>
							</div>
						</b-tab>
						<b-tab title="Contact">
							<template slot="title">
								<feather type="users"></feather>Team Members
							</template>

							<div class="row">
								<div class="col-sm-12">
									<div class="card">
										<div class="card-header">
											<h5>Team Members</h5>
										</div>
										<div class="card-body">
											<div class="table-responsive sellers team-members">
												<table class="table table-bordernone">
													<thead>
													<tr>
														<th scope="col">Name</th>
														<th scope="col">Position</th>
														<th scope="col">Office</th>
														<th scope="col">E-Mail</th>
														<th scope="col">Phone</th>
													</tr>
													</thead>
													<tbody>
													<tr>
														<td>
															<div class="d-inline-block align-middle"><img class="img-radius img-50 align-top m-r-15 rounded-circle" src="../../assets/images/user/6.jpg" alt="">
																<div class="d-inline-block">
																	<p>Jerry Patterson</p>
																</div>
															</div>
														</td>
														<td>
															<p>Design Manager</p>
														</td>
														<td>
															<p>Integer</p>
														</td>
														<td>
															<p>jerry13@gmail.com</p>
														</td>
														<td>
															<p>+91 264 570 4611</p>
														</td>
													</tr>
													<tr>
														<td>
															<div class="d-inline-block align-middle"><img class="img-radius img-50 align-top m-r-15 rounded-circle" src="../../assets/images/user/2.png" alt="">
																<div class="d-inline-block">
																	<p>Rosa Matthews</p>
																</div>
															</div>
														</td>
														<td>
															<p>Director of Sales</p>
														</td>
														<td>
															<p>Ipsum</p>
														</td>
														<td>
															<p>ros456@gmail.com</p>
														</td>
														<td>
															<p>+01 967 487 1873</p>
														</td>
													</tr>
													<tr>
														<td>
															<div class="d-inline-block align-middle"><img class="img-radius img-50 align-top m-r-15 rounded-circle" src="../../assets/images/user/3.jpg" alt="">
																<div class="d-inline-block">
																	<p>Alvaro Aguirre</p>
																</div>
															</div>
														</td>
														<td>
															<p>Office Assistant</p>
														</td>
														<td>
															<p>Praesent</p>
														</td>
														<td>
															<p>alvar76@gmail.com</p>
														</td>
														<td>
															<p>+48 724 585 0012</p>
														</td>
													</tr>
													<tr>
														<td>
															<div class="d-inline-block align-middle"><img class="img-radius img-50 align-top m-r-15 rounded-circle" src="../../assets/images/user/15.png" alt="">
																<div class="d-inline-block">
																	<p>Jerry Patterson</p>
																</div>
															</div>
														</td>
														<td>
															<p>Programmer Analyst</p>
														</td>
														<td>
															<p>Ipsum</p>
														</td>
														<td>
															<p>jerry13@gmail.com</p>
														</td>
														<td>
															<p>+91 264 570 4611</p>
														</td>
													</tr>
													<tr>
														<td>
															<div class="d-inline-block align-middle"><img class="img-radius img-50 align-top m-r-15 rounded-circle" src="../../assets/images/user/4.jpg" alt="">
																<div class="d-inline-block">
																	<p>Anne Snyder</p>
																</div>
															</div>
														</td>
														<td>
															<p>Social Worker</p>
														</td>
														<td>
															<p>Donec</p>
														</td>
														<td>
															<p>annsny@gmail.com</p>
														</td>
														<td>
															<p>+61 480 087 1175</p>
														</td>
													</tr>
													<tr>
														<td>
															<div class="d-inline-block align-middle"><img class="img-radius img-50 align-top m-r-15 rounded-circle" src="../../assets/images/user/5.jpg" alt="">
																<div class="d-inline-block">
																	<p>Alana Slacker</p>
																</div>
															</div>
														</td>
														<td>
															<p>Systems Engineer</p>
														</td>
														<td>
															<p>Etiam</p>
														</td>
														<td>
															<p>alana82@gmail.com</p>
														</td>
														<td>
															<p>+75 483 761 4680</p>
														</td>
													</tr>
													</tbody>
												</table>
											</div>

										</div>
									</div>
								</div>
							</div>
						</b-tab>
					</b-tabs>
				</div>

			</div>
		</div>
		<!-- Container-fluid Ends-->
	</div>
</template>

<script>
import TaskChart from './project_charts/task_distribution'
import BudgetDistribution from "./chartjs/budgetdistribution";
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
export default {
	data(){
		return{
			spent1 : {
				data: {
					series:[
						[5,6,7,2,9,9,5,3,5,3],
						[3,5,3,5,6,7,2,9,9,5],
						[9,9,5,3,5,3,5,6,7,2]
					]
				},
				options: {
					height:50,
					width:500,
					low: 0,
					offset: 0,
					fullwidth: true,
					seriesBarDistance: 15,
					chartPadding: {
						top:0,
						left:0,
						right:0,
						bottom:0
					},
					axisX: {
						offset: 0,
						low: 0,
						showGrid: false,
						showLabel: false,
					},
					axisY: {
						low: 0,
						offset: 0,
						showGrid: false,
						showLabel: false,
					},
				}
			},
			spent2 : {
				data: {
					series:[						
						[5,5,9,9,5,3,6,7,5,3],
						[7,2,6,5,2,3,5,9,9,5],
						[3,3,5,3,5,9,9,6,7,2]
					]
				},
				options: {
					height:50,
					width:500,
					low: 0,
					offset: 0,
					fullwidth: true,
					seriesBarDistance: 15,
					chartPadding: {
						top:0,
						left:0,
						right:0,
						bottom:0
					},
					axisX: {
						low: 0,
						offset: 0,
						showGrid: false,
						showLabel: false,
					},
					axisY: {
						low: 0,
						offset: 0,
						showGrid: false,
						showLabel: false,
					},
				}
			},
			spent3 : {
				data: {
					series:[
						[9,5,3,9,9,2,6,7,5,9],
						[7,2,5,6,3,5,5,9,3,5],
						[3,5,3,5,5,3,9,2,7,6]
					]
				},
				options: {
					height:50,
					width:500,
					low: 0,
					offset: 0,
					fullwidth: true,
					seriesBarDistance: 15,
					chartPadding: {
						top:0,
						left:0,
						right:0,
						bottom:0
					},
					axisX: {
						low: 0,
						offset: 0,
						showGrid: false,
						showLabel: false,
					},
					axisY: {
						low: 0,
						offset: 0,
						showGrid: false,
						showLabel: false,
					},
				}
			},
			chart1 : {
				data: {
					labels: ['01', '02', '03', '04', '05', '06'],
					series: [
					[1, 5, 2, 5, 4, 3]
					]
				},
				options: {
					low: 0,
					fullWidth: !0,
					showArea: !0,
					chartPadding: {
						right: 0,
						left: 0,
						bottom: 0
					},
					showPoint: false,
					height:85,
					axisX: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					},
					axisY: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					}
				},
				eventHandlers : [{
					event: 'created',
					fn(data) {
						var defs = data.svg.elem('defs');
						defs.elem('linearGradient', {
							id: 'gradient5',
							x1: 0,
							y1: 0,
							x2: 1,
							y2: 1
						}).elem('stop', {
							offset: 0,
							'stop-color': primary
						}).parent().elem('stop', {
							offset: 1,
							'stop-color': secondary
						});
					}
				}]
			},
			chart2 : {
				data: {
					labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					series: [
					[5, 2, 3, 1, 3, 2]
					]
				},
				options: {
					low: 0,
					fullWidth: !0,
					showArea: !0,
					chartPadding: {
						right: 0,
						left: 0,
						bottom: 0
					},
					showPoint: false,
					height:85,
					axisX: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					},
					axisY: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					}
				},
				eventHandlers : [{
					event: 'created',
					fn(data) {
						var defs = data.svg.elem('defs');
						defs.elem('linearGradient', {
							id: 'gradient6',
							x1: 0,
							y1: 0,
							x2: 1,
							y2: 1
						}).elem('stop', {
							offset: 0,
							'stop-color': primary
						}).parent().elem('stop', {
							offset: 1,
							'stop-color': secondary
						});
					}
				}]
			},
			chart3 : {
				data: {
					labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					series: [
					[1, 2, 5, 1, 4, 3]
					]
				},
				options: {
					low: 0,
					fullWidth: !0,
					showArea: !0,
					chartPadding: {
						right: 0,
						left: 0,
						bottom: 0
					},
					showPoint: false,
					height:85,
					axisX: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					},
					axisY: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					}
				},
				eventHandlers : [{
					event: 'created',
					fn(data) {
						var defs = data.svg.elem('defs');
						defs.elem('linearGradient', {
							id: 'gradient7',
							x1: 0,
							y1: 0,
							x2: 1,
							y2: 1
						}).elem('stop', {
							offset: 0,
							'stop-color': primary
						}).parent().elem('stop', {
							offset: 1,
							'stop-color': secondary
						});
					}
				}]
			},
			chart4 : {
				data: {
					labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					series: [
					[1, 2, 4, 3, 2, 3]
					]
				},
				options: {
					low: 0,
					fullWidth: !0,
					showArea: !0,
					chartPadding: {
						right: 0,
						left: 0,
						bottom: 0
					},
					showPoint: false,
					height:85,
					axisX: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					},
					axisY: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					}
				},
				eventHandlers : [{
					event: 'created',
					fn(data) {
						var defs = data.svg.elem('defs');
						defs.elem('linearGradient', {
							id: 'gradient8',
							x1: 0,
							y1: 0,
							x2: 1,
							y2: 1
						}).elem('stop', {
							offset: 0,
							'stop-color': primary
						}).parent().elem('stop', {
							offset: 1,
							'stop-color': secondary
						});
					}
				}]
			},
			chart5 : {
				data: {
					labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					series: [
					[0, 5, 2, 3, 1, 3]
					]
				},
				options: {
					low: 0,
					fullWidth: !0,
					showArea: !0,
					chartPadding: {
						right: 0,
						left: 0,
						bottom: 0
					},
					showPoint: false,
					height:85,
					axisX: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					},
					axisY: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					}
				},
				eventHandlers : [{
					event: 'created',
					fn(data) {
						var defs = data.svg.elem('defs');
						defs.elem('linearGradient', {
							id: 'gradient9',
							x1: 0,
							y1: 0,
							x2: 1,
							y2: 1
						}).elem('stop', {
							offset: 0,
							'stop-color': primary
						}).parent().elem('stop', {
							offset: 1,
							'stop-color': secondary
						});
					}
				}]
			},
			chart6 : {
				data: {
					labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					series: [
					[1, 2, 3, 1, 2, 3]
					]
				},
				options: {
					low: 0,
					fullWidth: !0,
					showArea: !0,
					chartPadding: {
						right: 0,
						left: 0,
						bottom: 0
					},
					showPoint: false,
					height:85,
					axisX: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					},
					axisY: {
						low: 0,
						offset: 0,
						showLabel: false,
						showGrid: false
					}
				},
				eventHandlers : [{
					event: 'created',
					fn(data) {
						var defs = data.svg.elem('defs');
						defs.elem('linearGradient', {
							id: 'gradient10',
							x1: 0,
							y1: 0,
							x2: 1,
							y2: 1
						}).elem('stop', {
							offset: 0,
							'stop-color': primary
						}).parent().elem('stop', {
							offset: 1,
							'stop-color': secondary
						});
					}
				}]
			},
			chart7 : {
				data: {
					labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					series: [
					[3,3,0,2,0,3,0],
					[2,0,1.5,0,3.5,3,2]
					]
				},
				options: {
					stackBars: true,
					fullWidth: !0,
					showArea: !0,
					chartPadding: {
						right: 0,
						left: -16,
						bottom: -12
					},
					axisX: {
						showGrid: false,
					},
					axisY: {
						labelInterpolationFnc: function(value) {
							return value % 2 === 0 ? value : null;
						}
					},
					height:450,
				},
			}
		}
	},
	components: {
		TaskChart,
		BudgetDistribution
	},
}
</script>
