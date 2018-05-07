import Vue from 'vue';

import Vuetify from 'vuetify';

import App from './App.vue';
import router from './router';

// Vuetify styles
import 'vuetify/dist/vuetify.min.css';
// Global styles
import './style/scss/main.scss';

import IconWrapper from './components/IconWrapper.vue';


Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.component('icon', IconWrapper);

/* eslint-disable no-new */
new Vue({
	el: '#pinejuicestudio',
	router,
	components: { App },
	template: '<App/>'
});
