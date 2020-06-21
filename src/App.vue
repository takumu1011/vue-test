<template>
  <div class="vue">
    <Header></Header>
    <MyProfile></MyProfile>
    <div class="layer">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MyProfile from './components/MyProfile.vue';
import Footer from './components/Footer.vue';
export default {
  data() {
    return {
      heading: 'Hello Vue',
      thiscomp: ''
    }
  },
  components: {
    Header,
    MyProfile,
    Footer
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .vue {
    font-family: 'Libre Baskerville', serif;
  }
  .layer {
    position: relative;
    top: 650px;
    width: 100%;
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
  @media screen and (max-width: 650px) {
    .layer {
      top: 80vh;
    }
  }
</style>
