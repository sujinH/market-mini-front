import axios from 'axios';
export function getTestHi(type, update) {
	const key = 'questions_' + type;
	if (localStorage.getItem(key) !== null) {
		update(JSON.parse(localStorage.getItem(key)));
		return;
	}
	axios('/api/ko/test/' + type, {
		method: 'GET',
	})
		.then(data => {
			update(data.data);
			localStorage.setItem(key, JSON.stringify(data.data));
		})
		.catch(error => console.error(error));
}
