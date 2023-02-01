<!-- <template>
	<div>
		<TheHeader />
		<mainHome1 />
		<MainHome2 />
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import mainHome1 from './pages/mainHome1.vue';
// import MainHome2 from './pages/mainHome2.vue';

export default {
	name: 'App',
	components: {
		TheHeader,
		mainHome1,
		TheFooter,
		// MainHome2,
	},
};
</script>

<style></style> -->

<template>
	<div>
		<MainHeader />
		<!-- <MovieList /> -->
		<mainHome2 />
		<MovieFooter />
	</div>
</template>

<script>
import mainHome2 from './pages/mainHome2.vue';
// import MovieList from './components/MovieList.vue';
import MainHeader from './components/MainHeader/MainHeader.vue';
import MovieFooter from './components/MovieFooter.vue';

export default {
	name: 'App',
	components: {
		mainHome2,
		// MovieList,
		MainHeader,
		MovieFooter,
	},
};
</script>
