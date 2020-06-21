import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import(/* webpackChunkName: "Home" */ './views/Home.vue');
const About = () => import(/* webpackChunkName: "About" */ './views/About.vue');
const Works = () => import(/* webpackChunkName: "Works" */ './views/Works.vue');
const Career = () => import(/* webpackChunkName: "Career" */ './views/Career.vue');

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
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
