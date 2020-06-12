import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Works from './views/Works.vue';
import Career from './views/Career.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/works',
      component: Works
    },
    {
      path: '/career',
      component: Career
    }
  ]
})
