<template>
  <div class="career">
    <h2 class="career__ttl">Career</h2>
    <ul class="career-list">
      <li class="career-list__item">
        <div class="career__q">
          <span class="career__q-txt">最終学歴</span>
        </div>
        <div class="career__a">
          <p class="career__a-txt">
            2020年3月
            <br />駒澤大学
            <br />グローバル・メディア・スタディーズ学部
            <br />グローバル・メディア学科 卒業
          </p>
        </div>
      </li>
      <li class="career-list__item">
        <div class="career__q">
          <span class="career__q-txt">アルバイト経験</span>
        </div>
        <div class="career__a">
          <p class="career__a-txt">焼肉屋、お好み焼き屋、工場、スーパーマーケット、塾講師(英語)、通信会社事務、Webマーケティング会社、エンタメ系Web制作会社</p>
        </div>
      </li>
      <li class="career-list__item">
        <div class="career__q">
          <span class="career__q-txt">保有資格</span>
        </div>
        <div class="career__a">
          <p class="career__a-txt">普通自動車免許第１種、漢字能力検定2級、ITパスポート、Webクリエイター能力認定試験エキスパート</p>
        </div>
      </li>
      <li class="career-list__item">
        <div class="career__q">
          <span class="career__q-txt">スキルセット</span>
        </div>
        <div class="career__a">
          <p
            class="career__a-txt"
          >HTML、CSS、Sass、JavaScript、jQuery、TypeScript、Vue.js、 Gulp、Webpack、WordPress、Git</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    const items = document.querySelectorAll(".career-list__item");
    items.forEach(
      function(item) {
        item.addEventListener("click", function() {
          this.classList.toggle("is-open");
        });
      }.bind(this)
    );
  }
};
</script>

<style lang="scss" scoped>
.career {
  position: relative;
  padding: 30px 0;
  background-color: #fff;
  &__ttl {
    padding: 20px;
    font-size: 32px;
    letter-spacing: 5px;
  }
  &-list {
    width: 70%;
    min-width: 250px;
    margin: 0 auto;
    &__item {
      width: 100%;
      margin: 0 auto 30px;
      &.is-open {
        .career__q {
          &::before {
            transform: translateY(-50%) scale(1);
          }
          &::after {
            transform: translateY(-50%) rotate(180deg);
          }
        }
        .career__a {
          transform: scaleY(1);
          line-height: 2em;
          opacity: 1;
        }
      }
    }
  }
  &__q {
    position: relative;
    width: 100%;
    padding: 20px 0;
    background-color: #ff7f50;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1) 0s;
    cursor: pointer;
    &:hover {
      letter-spacing: 5px;
      opacity: 0.8;
    }
    @media screen and (max-width: 650px) {
      text-align: left;
      &:hover {
        letter-spacing: 0;
        opacity: 1;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%) scale(0);
      transform-origin: left;
      width: 100%;
      height: 1px;
      background-color: #fff;
      transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1) 0s;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translateY(-50%) rotate(0deg);
      border-top: 20px solid #000;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1) 0s;
    }
    &-txt {
      position: relative;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      @media screen and (max-width: 650px) {
        padding-left: 50px;
        font-size: 18px;
      }
    }
  }
  &__a {
    transform-origin: top;
    transform: scaleY(0);
    width: 100%;
    background-color: #f0e68c;
    font-size: 18px;
    line-height: 0;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1) 0s;
    &-txt {
      padding: 20px;
    }
  }
}
</style>
