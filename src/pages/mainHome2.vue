<template>
	<div>
		<!-- <div v-for="user in users">{{ user }}</div> -->
		<!-- <input type="submit" @click="change()" /> -->
		{{ users }}
		{{ 'hi' }}
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			users: 'null',
			newVal: 'nooooooooooo',
		};
	},
	methods: {
		change() {
			this.users = this.newVal;
		},
	},
	created() {
		// var vm = this;
		// promise 기반 객체
		var self = this;
		let payload = {
			name: 'Kim',
		};
		// alert(payload.name);
		axios
			// .get('http://localhost:8083/hello?name=jin')
			.get('http://localhost:8083/hello?', { params: payload })
			.then(function (response) {
				console.log(response);
				// vm.users = response.data;
				self.users = response.data;
				// alert(self.users);
			})
			.catch(function (error) {
				console.log(error);
			});
	},
};
</script>
