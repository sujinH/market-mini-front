<template>
	<div>
		<section class="py-5 text-center container">
			<div class="row py-lg-5">
				<div class="col-lg-6 col-md-8 mx-auto">
					<h1 class="fw-light">Album example</h1>
					<p class="lead text-muted">
						Something short and leading about the collection below—its contents,
						the creator, etc. Make it short and sweet, but not too short so
						folks don’t simply skip over it entirely.
					</p>
					<p>
						<a href="#" class="btn btn-primary my-2">Main call to action</a>
						<a href="#" class="btn btn-secondary my-2">Secondary action</a>
					</p>
				</div>
			</div>
		</section>

		<div class="album py-5 bg-light">
			<div class="container">
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					<div class="col" v-for="data in movieList" :key="data">
						<div class="card shadow-sm">
							<svg
								class="bd-placeholder-img card-img-top"
								width="100%"
								height="225"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								aria-label="Placeholder: Thumbnail"
								preserveAspectRatio="xMidYMid slice"
								focusable="false"
							>
								<title>Placeholder</title>
								<rect width="100%" height="100%" fill="#55595c" />
								<text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
							</svg>

							<div class="card-body">
								<p class="card-text">{{ data.title }}</p>
								<p class="card-text" v-text="getDes(data.description)"></p>
								<div class="d-flex justify-content-between align-items-center">
									<div class="btn-group">
										<button
											type="button"
											class="btn btn-sm btn-outline-secondary"
										>
											상세보기
										</button>
									</div>
									<small class="text-muted">{{ data.regDate }}</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			movieList: [],
		};
	},
	mounted() {
		this.getMovieList(); // MovieList가 화면에 랜더링 되었을 때 getMovieList 함수를 호출한다.
	},
	methods: {
		getMovieList: function () {
			// API요청을 통해 영화목록을 받아온다.구보씨 일보
			const URL =
				'/v1/search/movie.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1'; /*URL*/
			const clientId = 'n9KqdakFPww8Um1PXnUK';
			const clientSecret = '8EqBZkrvS3';

			this.$axios
				.get(URL, {
					headers: {
						Accept: 'application/json',
						'X-Naver-Client-Id': clientId,
						'X-Naver-Client-Secret': clientSecret,
					},
				})
				.then(response => {
					// 실제 API를 요청한다/
					console.log(response.data);
					let test = [];
					test = test.concat(response.data.items); // 받아온 데이터를 movieList 배열에 넣어준다.
					this.movieList = this.movieList.concat(test);
				});
		},
	},
};
</script>
