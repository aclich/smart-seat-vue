<template>
	<div>
		<Breadcrumbs title="Search Website"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid search-page">
			<div class="row">
				<div class="col-sm-12">

					<b-card no-body>
						<b-card-header>
							<form class="search-form">
								<div class="form-group m-0">
									<label class="sr-only">Email</label>
									<input class="form-control" type="search" placeholder="Search..">
								</div>
							</form>
						</b-card-header>
						<b-card-body>
							<b-tabs nav-class="border-tab  tabs-project" active-nav-item-class="active">
								<b-tab active>
									<template slot="title">
										<i class="icon-target mr-2"></i>All
									</template>									
									<div class="search-links tab-pane fade show active" id="all-links" role="tabpanel" aria-labelledby="all-link">
										<div class="row">
											<div class="col-xl-6">
												<p class="pb-4">About 6,000 results (0.60 seconds)</p>
												<div class="info-block">
													<h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6><a href="">endlesseducation.info/</a>
													<p>endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
													<div class="star-ratings">
														<ul class="search-info">
															<li>2.5 stars</li>
															<li>590 votes</li>
															<li>Music</li>
														</ul>
													</div>
												</div>
												<div class="info-block">
													<h6>Proin eleifend metus vel erat faucibus, ut bibendum nulla iaculis.</h6><a href="">endlesseducation.info/</a>
													<p>endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
													<div class="star-ratings">
														<ul class="search-info">
															<li>2.5 stars</li>
															<li>590 votes</li>
															<li>Music</li>
														</ul>
													</div>
												</div>
												<div class="info-block">
													<h6>Fusce rutrum elit aliquet nisi malesuada cursus.</h6><a href="">endlesseducation.info/</a>
													<p>endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
													<div class="star-ratings">
														<ul class="search-info">
															<li><i class="icofont icofont-ui-rating"></i><i class="icofont icofont-ui-rating"></i><i class="icofont icofont-ui-rating"></i><i class="icofont icofont-ui-rate-blank"></i><i class="icofont icofont-ui-rate-blank"></i></li>
															<li>2.5 stars</li>
															<li>590 votes</li>
															<li>Music</li>
														</ul>
													</div>
												</div>
												<div class="info-block">
													<h6>Morbi feugiat mauris vel semper fringilla.</h6><a href="">endlesseducation.info/</a>
													<p>endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
													<div class="star-ratings">
														<ul class="search-info">
															<li><i class="icofont icofont-ui-rating"></i><i class="icofont icofont-ui-rating"></i><i class="icofont icofont-ui-rating"></i><i class="icofont icofont-ui-rate-blank"></i><i class="icofont icofont-ui-rate-blank"></i></li>
															<li>2.5 stars</li>
															<li>590 votes</li>
															<li>Music</li>
														</ul>
													</div>
												</div>
												<div class="info-block">
													<h6>Morbi feugiat mauris vel semper fringilla.</h6><a href="">endlesseducation.info/</a>
													<p>endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
													<div class="star-ratings">
														<ul class="search-info">
															<li><i class="icofont icofont-ui-rating"></i><i class="icofont icofont-ui-rating"></i><i class="icofont icofont-ui-rating"></i><i class="icofont icofont-ui-rate-blank"></i><i class="icofont icofont-ui-rate-blank"></i></li>
															<li>2.5 stars</li>
															<li>590 votes</li>
															<li>Music</li>
														</ul>
													</div>
												</div>
												<div class="info-block">
													<b-pagination-nav
													:number-of-pages="3"
													base-url="#"
													prev-text="Previous"
													next-text="Next"
													class="pagination-primary"
													>
												</b-pagination-nav>
											</div>
										</div>
										<div class="col-xl-6">
											<div class="card lg-mt mb-0">
												<div class="blog-box blog-shadow"><img class="img-fluid" src="../assets/images/blog/blog.jpg" alt="">
													<div class="blog-details">
														<p class="digits">25 July 2018</p>
														<h4>Accusamus et iusto odio dignissimos ducimus qui blanditiis.</h4>
														<ul class="blog-social digits">
															<li><i class="icofont icofont-user"></i>Mark Jecno</li>
															<li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</b-tab>
							<b-tab>
								<template slot="title">
									<i class="icon-image mr-2"></i>Images
								</template>

								<div class="info-block">
									<p class="pb-4 col-sm-12 digits">About 12,120 results (0.50 seconds)</p>
									<div class="my-gallery row gallery-with-description">
										<figure class="col-xl-3 col-sm-6" v-for="(n,index) in lightgallery" :key="index" @click="gindex = index">
											<a>
												<img :src="getpath(n.image)" alt="Image description">
												<div class="caption">
													<h4 v-text="n.title"></h4>
													<p v-text="n.description"></p>
												</div>
											</a>
										</figure>
										<VueGallery :images="biglightgallery" :index="gindex" @close="gindex = null" :options="galleryoptions"  ></VueGallery>
									</div>
								</div>
								<div class="info-block">
									<b-pagination-nav
									:number-of-pages="3"
									base-url="#"
									prev-text="Previous"
									next-text="Next"
									class="pagination-primary"
									>
								</b-pagination-nav>
							</div>
						</b-tab>
						<b-tab>
							<template slot="title">
								<i class="icon-video-clapper mr-2"></i>Videos
							</template>

							<div class="row">
								<div class="col-xl-6">
									<p class="pb-4">About 6,000 results (0.60 seconds)</p>
									<div class="media info-block">
										<iframe class="mr-3 mb-3" width="200" height="100" src="https://www.youtube.com/embed/CJnfAXlBRTE"></iframe>
										<div class="media-body">
											<h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6><a href="">endlesseducation.info/</a>
											<p>endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
											<div class="star-ratings">
												<ul class="search-info">
													<li>2.5 stars</li>
													<li>590 votes</li>
													<li>Music</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="media info-block">
										<iframe class="mr-3 mb-3" width="200" height="100" src="https://www.youtube.com/embed/-L4gEk7cOfk"></iframe>
										<div class="media-body">
											<h6>Morbi eget quam et purus commodo dapibus.</h6><a href="">endlesseducation.info/</a>
											<p>endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
											<div class="star-ratings">
												<ul class="search-info">
													<li>2.5 stars</li>
													<li>590 votes</li>
													<li>Music</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="media info-block">
										<iframe class="mr-3 mb-3" width="200" height="100" src="https://www.youtube.com/embed/FZzWGr3ruVw"></iframe>
										<div class="media-body">
											<h6>Etiam eget ligula at ante eleifend rutrum.</h6><a href="">endlesseducation.info/</a>
											<p>endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
											<div class="star-ratings">
												<ul class="search-info">
													<li>2.5 stars</li>
													<li>590 votes</li>
													<li>Music</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="media info-block">
										<iframe class="mr-3 mb-3" width="200" height="100" src="https://www.youtube.com/embed/wpmHZspl4EM"></iframe>
										<div class="media-body">
											<h6>Lorem Ipsum is simply dummy text of the printing.</h6><a href="">endlesseducation.info/</a>
											<p>endless introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
											<div class="star-ratings">
												<ul class="search-info">
													<li>2.5 stars</li>
													<li>590 votes</li>
													<li>Music</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="info-block">
										<b-pagination-nav
										:number-of-pages="3"
										base-url="#"
										prev-text="Previous"
										next-text="Next"
										class="pagination-primary"
										>
									</b-pagination-nav>
								</div>
							</div>
							<div class="col-xl-6">
								<div>
									<div class="embed-responsive embed-responsive-21by9 lg-mt">
										<iframe width="560" height="315" src="https://www.youtube.com/embed/wpmHZspl4EM" allowfullscreen=""></iframe>
									</div>
									<div class="embed-responsive embed-responsive-21by9">
										<iframe width="560" height="315" src="https://www.youtube.com/embed/I0-vBdh4sZ8" allowfullscreen=""></iframe>
									</div>
								</div>
							</div>
						</div>
					</b-tab>
				</b-tabs>
			</b-card-body>
		</b-card>

	</div>
</div>
</div>
<!-- Container-fluid Ends-->
</div>
</template>
<script>
import VueGallery from 'vue-gallery';
export default {
	data(){
		return{
			gindex:null,
			lightgallery:[
			{
				image:'01.jpg',
				title:'Portfolio Title',
				description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
			},
			{
				image:'02.jpg',
				title:'Portfolio Title',
				description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
			},
			{
				image:'03.jpg',
				title:'Portfolio Title',
				description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
			},
			{
				image:'04.jpg',
				title:'Portfolio Title',
				description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
			},
			{
				image:'05.jpg',
				title:'Portfolio Title',
				description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
			},
			{
				image:'06.jpg',
				title:'Portfolio Title',
				description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
			},
			{
				image:'07.jpg',
				title:'Portfolio Title',
				description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
			},
			{
				image:'08.jpg',
				title:'Portfolio Title',
				description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
			}
			],
			biglightgallery:[
			'01.jpg',
			'02.jpg',
			'03.jpg',
			'04.jpg',
			'05.jpg',
			'06.jpg',
			'07.jpg',
			'08.jpg'
			],
			galleryoptions:{
				prevClass: 'prev',
				nextClass: 'next',
			}
		}
	},
	components: {
		VueGallery
	},
	mounted(){
		this.setimagesparth();
	},
	methods:{
		setimagesparth(){
			for (var i = 0; i < this.biglightgallery.length; i++) {
				this.biglightgallery[i] = this.getbigimgpath(this.biglightgallery[i]);
			}
		},
		getpath(filename){
			return require('@/assets/images/lightgallry/'+filename)
		},
		getbigimgpath(filename){
			return require('@/assets/images/big-lightgallry/'+filename)
		}
	}
}
</script>
