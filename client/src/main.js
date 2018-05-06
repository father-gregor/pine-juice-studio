import Vue from 'vue';

import Vuetify from 'vuetify';

import App from './App.vue';
import router from './router';

// Global styles
import './style/scss/main.scss';
// Vuetify styles
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#pinejuicestudio',
  router,
  components: { App },
  template: '<App/>'
});
