<template>
  <div class="profile">
    <div class="profile__in">
      <div class="profile__main">
        <h1 class="ttl">
          <span class="ttl__char" :class="['ttl__char-delay' + index]" v-for="(char, index) in chars" :key="index">{{ char}}</span>
        </h1>
        <p class="profile__img-wrap" @click="changeImage">
          <img class="profile__img" src="../assets/profile.jpeg" alt="プロフィール画像">
        </p>
      </div>
      <transition>
        <MyProfileTxt></MyProfileTxt>
      </transition>
    </div>
  </div>
</template>

<script>
import MyProfileTxt from './MyProfileTxt.vue';
export default {
  data() {
    return {
      greeting: 'こんにちは、角川拓夢です。',
      chars: 'My Portfolio',
      imgFlag : 0
    }
  },
  methods: {
    changeImage(e) {
      if(this.imgFlag === 0){
        this.imgFlag = 1;
        e.currentTarget.style.transform = "rotate3d(0, 1, 0, 360deg)";
        e.currentTarget.childNodes[0].src = require('../assets/logo.png');
      }
      else if(this.imgFlag === 1) {
        this.imgFlag = 0;
        e.currentTarget.style.transform = "rotate3d(0, 1, 0, 0deg)";
        e.currentTarget.childNodes[0].src = require('../assets/profile.jpeg');
      }
    }
  },
  components: {
    MyProfileTxt
  }
}
</script>

<style scoped>
@keyframes show-ttl{
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
.profile {
  height: 100vh;
  padding: 150px 0 0;
  background-color: #222;
}
.profile__in {
  width: 600px;
  margin: 0 auto;
}
.profile__main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.ttl {
  font-size: 50px;
  color: #fff;
}
.ttl__char {
  transform: translate(0, -20px);
  opacity: 0;
  animation: show-ttl 2s ease-out forwards;
}
/*  */
.ttl__char-delay0 {
  animation-delay: 0.3;
}
.ttl__char-delay1 {
  animation-delay: 0.5s;
}
.ttl__char-delay2 {
  animation-delay: 0.7s;
}
.ttl__char-delay3 {
  animation-delay: 0.9s;
}
.ttl__char-delay4 {
  animation-delay: 1.1s;
}
.ttl__char-delay5 {
  animation-delay: 1.3s;
}
.ttl__char-delay6 {
  animation-delay: 1.5s;
}
.ttl__char-delay7 {
  animation-delay: 1.7s;
}
.ttl__char-delay8 {
  animation-delay: 1.9s;
}
.ttl__char-delay9 {
  animation-delay: 2.1s;
}
.ttl__char-delay10 {
  animation-delay: 2.2s;
}
.ttl__char-delay11 {
  animation-delay: 2.4s;
}
/*  */
.profile__img-wrap {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 1.2s ease-out 0s;
  cursor: pointer;
}
.profile__img {
  display: block;
  width: 100%;
}
@media screen and (max-width: 650px) {
  .profile {
    padding: 80px 0 0;
  }
  .profile__in {
    width: 300px;
  }
  .profile__main {
    display: block;
  }
  .ttl {
    margin: 30px 0;
    font-size: 32px;
    text-align: center;
  }
  .profile__img-wrap {
    width: 200px;
    margin: 0 auto;
  }
}
</style>
