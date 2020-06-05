<template>
  <div class="vue">
    <h1 class="vue__heading">{{ heading }}</h1>
    <p class="vue__img-wrap">
      <a class="vue__link" :href="vuelink">
        <img  class="vue__img" src="./assets/logo.png" alt="Vue.jsロゴ">
      </a>
      </p>
    <MyProfile></MyProfile>
  </div>
</template>

<script>
import MyProfile from './components/MyProfile.vue';
export default {
  data() {
    return {
      heading: 'Hello Vue',
      vuelink: 'https://jp.vuejs.org/'
    }
  },
  components: {
    MyProfile
  }
}
</script>

<style scoped>
  .vue {
    width: 450px;
    margin: 0 auto;
    text-align: center;
  }
</style>
