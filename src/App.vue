<template>
  <div class="vue">
    <h1 class="vue__heading">{{ heading }}</h1>
    <p class="vue__img-wrap">
      <a class="vue__link" :href="vuelink">
        <img  class="vue__img" src="./assets/logo.png" alt="Vue.jsロゴ">
      </a>
      </p>
    <MyProfile></MyProfile>
    <button @click="setComp = 'Hobby'">Hobby</button>
    <button @click="setComp = 'About'">About</button>
    <transition name="fade">
      <component :is="setComp"></component>
    </transition>
  </div>
</template>

<script>
import MyProfile from './components/MyProfile.vue';
import About from './components/About.vue';
import Hobby from './components/Hobby.vue';
export default {
  data() {
    return {
      heading: 'Hello Vue',
      vuelink: 'https://jp.vuejs.org/',
      setComp: 'About'
    }
  },
  components: {
    MyProfile,
    About,
    Hobby
  }
}
</script>

<style scoped>
  .vue {
    width: 450px;
    margin: 0 auto;
    text-align: center;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.55s ease-in 0s;
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
