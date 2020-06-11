<template>
  <div class="profile">
    <div class="profile__in">
      <div class="profile__main">
        <h1 class="ttl">
          <span class="ttl__char" :class="['ttl__char-delay' + index]" v-for="(char, index) in chars" :key="index">{{ char}}</span>
        </h1>
        <p class="profile__img-wrap">
          <img class="profile__img" src="../assets/icon.png" alt="プロフィール画像">
        </p>
      </div>
      <div class="vue-des">
        <h2 class="vue-des__heading">{{ heading }}</h2>
        <p class="vue-des__txt">
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: 'Vue.jsとは',
      chars: 'My Portfolio',
    }
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
  padding: 100px 0;
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
}
.profile__img {
  display: block;
  width: 100%;
}
.vue-des {
  position: relative;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 15px 20px 10px #000;
}
.vue-des::before {
  content: '';
  position: absolute;
  top: -20px;
  right: 80px;
  border-bottom: 30px solid #fff;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  width: 0;
}
@media screen and (max-width: 650px) {
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
  .vue-des::before {
    right: 50%;
    transform: translateX(50%);
  }
}
</style>
