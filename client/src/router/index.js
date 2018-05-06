import Vue from 'vue';
import Router from 'vue-router';
import AppContent from '../components/AppContent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppContent',
      component: AppContent
    }
  ]
})
