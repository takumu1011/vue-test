<template>
  <div class="profile-des">
    <h2 class="profile-des__heading">{{ greeting }}</h2>
    <p class="profile-des__txt" v-if="this.$route.path === '/'">
      大学の時にプログラミングに興味を持ち学んできました。<br>
      フロントエンドエンジニアとしてさらに成長していきたいと思っています。<br>
      様々なものに触れてより良いものを作れるよう楽しんで作っていきたいと思います。
    </p>
    <p class="profile-des__txt" v-else-if="this.$route.path === '/about'">
      このページでは、私についての情報を載せております。<br>
      何かありましたら、下記のメールアドレスからご連絡をお願いいたします。
    </p>
    <p class="profile-des__txt" v-else-if="this.$route.path === '/works'">
      このページではこれまでに作った作品を載せております。<br>
      ここには載せられないものもありますので、直接お会いした時に話をさせていただければと思います。
    </p>
    <p class="profile-des__txt" v-else-if="this.$route.path === '/career'">
      このページではこれまでの経歴や所有資格情報、スキルの情報を載せております。<br>
      詳細につきましては直接お会いした時にお話しさせていただければと思います。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'こんにちは、角川拓夢です。'
    }
  }
}
</script>

<style scoped>
.profile-des {
  position: relative;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 15px 20px 10px #000;
}
.profile-des::before {
  content: '';
  position: absolute;
  top: -20px;
  right: 80px;
  border-bottom: 30px solid #fff;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  width: 0;
}
.profile-des__txt {
  margin: 30px 0;
  line-height: 1.8;
}
@media screen and (max-width: 650px) {
  .profile-des::before {
    right: 50%;
    transform: translateX(50%);
  }
}
</style>
