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
      thiscomp: ''
    }
  },
  components: {
    MyProfile,
    Header
  },
  methods: {
  }
}
</script>

<style scoped>
  .vue {
    font-family: 'Libre Baskerville', serif;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.65s cubic-bezier(0.11, 0, 0.5, 0) 0s;
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
