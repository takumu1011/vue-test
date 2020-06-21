<template>
  <div class="profile">
    <div class="profile__in">
      <div class="profile__main">
        <h1 class="ttl">
          <span class="ttl__char" :class="['ttl__char-delay' + index]" v-for="(char, index) in chars" :key="index">{{ char}}</span>
        </h1>
        <p class="profile__img-wrap" @click="changeImage">
          <img class="profile__img" src="../assets/cat02.png" alt="プロフィール画像">
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
      imgFlag : 0,
      colorList: ['#f0e68c', '#b0e0e6','#008080','#ffc0cb','#32cd32', '#9370db','#8b0000'],
      colorNum: 0
    }
  },
  watch: {
    $route(to, from) {
      if(to.path !== from.path) {
        this.changeBg(to.path);
      }
    }
  },
  mounted() {
    this.changeBg();
  },
  methods: {
    changeImage(e) {
      if(this.imgFlag === 0){
        this.imgFlag = 1;
        e.currentTarget.style.transform = "rotateY(360deg)";
        e.currentTarget.childNodes[0].src = require('../assets/cat04.png');
      }
      else if(this.imgFlag === 1) {
        this.imgFlag = 0;
        e.currentTarget.style.transform = "rotateY(0deg)";
        e.currentTarget.childNodes[0].src = require('../assets/cat02.png');
      }
    },
    changeBg(path) {
        const root = this.$el;
        this.selectNum(path);
        root.style.backgroundColor =  this.colorList[this.colorNum];
    },
    selectNum() {
      let nowNum = this.colorNum;
      let selectNum = Math.floor(Math.random() * 7);
      if(nowNum === selectNum) {
        this.selectNum();
      }else {
        this.colorNum = selectNum;
      }
    }
  },
  components: {
    MyProfileTxt
  }
}
</script>

<style lang="scss" scoped>
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
  transition: background-color 0.8s ease-out 0s;
  &__in {
  width: 600px;
  margin: 0 auto;
  }
  &__main {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  &__img-wrap {
    width: 200px;
    height: 200px;
    border-radius: 30px;
    overflow: hidden;
    transition: transform 1.2s ease-out 0s;
    cursor: pointer;
  }
  &__img {
    display: block;
    width: 100%;
    background-color: #fff;
  }
}
.ttl {
  font-size: 50px;
  color: #fff;
  &__char {
  transform: translate(0, -20px);
  opacity: 0;
  animation: show-ttl 2s ease-out forwards;
    @for $i from 0 through 11 {
        &-delay#{$i} {
        animation-delay: #{0.3 + 0.2 * $i}s;
      }
    }
  }
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
