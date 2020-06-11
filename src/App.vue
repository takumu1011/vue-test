<template>
  <div class="vue">
    <Header></Header>
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
    }
  },
  components: {
    MyProfile,
    Header
  }
}
</script>

<style scoped>
  .vue {
    background: url(./assets/logo.png) no-repeat center center;
    background-size: 400px 400px;
    background-attachment: fixed;
  }
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
