import VCalendar from 'v-calendar';
import 'bootstrap';

import Vue from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue';
import router from './router';
import store from './store';

import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faChevronRight,
  faTimes,
  faChevronLeft,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';


Vue.use(VueAxios, axios);

library.add(faChevronRight);
library.add(faTimes);
library.add(faChevronLeft);
library.add(faCheckCircle);
library.add(faTimesCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Loading', Loading);

Vue.use(VCalendar, {
  componentPrefix: 'vc', // Now use vc-calendar and vc-date-picker
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');