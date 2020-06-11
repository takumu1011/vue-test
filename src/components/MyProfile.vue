<template>
  <div class="profile">
    <div class="profile__in">
      <div class="profile__main">
        <h1 class="ttl">My Portfolio</h1>
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
      heading: 'Vue.jsとは'
    }
  }
}
</script>

<style scoped>
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
  background-color: #ddd;
  border-radius: 7px;
}
.vue-des::before {
  content: '';
  position: absolute;
  top: -20px;
  right: 80px;
  border-bottom: 30px solid #ddd;
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
    width: 100%;
    margin: 0 auto;
  }
  .vue-des::before {
    right: 50%;
    transform: translateX(50%);
  }
}
</style>
