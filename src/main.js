import { createApp } from 'vue';
import App from './App.vue';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.$axios = axios; //axios를 다른 전역화
app.mount('#app');

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// eslint-disable-next-line no-unused-vars
import VueAxios from 'vue-axios';

app.use(VueAxios, axios);

app.config.globalProperties.axios = axios;
