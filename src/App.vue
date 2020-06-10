<template>
  <div class="vue">
    <Header></Header>
    <h1 class="vue__heading">{{ heading }}</h1>
    <p class="vue__img-wrap">
      <a class="vue__link" :href="vuelink">
        <img  class="vue__img" src="./assets/logo.png" alt="Vue.jsロゴ">
      </a>
    </p>
    <MyProfile></MyProfile>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MyProfile from './components/MyProfile.vue';
import Header from './components/Header.vue';
export default {
  data() {
    return {
      heading: 'Hello Vue',
      vuelink: 'https://jp.vuejs.org/',
    }
  },
  components: {
    MyProfile,
    Header
  }
}
</script>

<style scoped>

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.2s ease-in 0s;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>
