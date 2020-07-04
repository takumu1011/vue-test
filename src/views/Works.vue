<template>
  <div class="works">
    <h2 class="works__ttl">Works</h2>
    <ul class="works-list">
      <li class="works-list__item" v-for="card in cards" :key="card.id">
        <WorksCard :card="card"></WorksCard>
      </li>
    </ul>
  </div>
</template>

<script>
import WorksCard from "../components/WorksCard.vue";
export default {
  data() {
    return {
      cardNum: "0",
      cards: [
        {
          id: 1,
          url: "https://github.com/takumu1011/",
          title: "Git hub",
          img: require("../assets/github.png"),
          date: "2020年2月2日"
        },
        {
          id: 2,
          url: "https://scrapbox.io/sumikawa-web/",
          title: "ScrapBox",
          img: require("../assets/scrapbox.png"),
          date: "2020年2月2日"
        },
        {
          id: 3,
          url: "http://tkm99.sakura.ne.jp/veg_market/",
          title: "野菜直売所",
          img: require("../assets/veg-market.png"),
          date: "2020年2月2日"
        },
        {
          id: 4,
          url: "https://tkm99.sakura.ne.jp/covid/",
          title: "コロナウイルス対策サイト",
          img: require("../assets/covid.png"),
          date: "2020年10月11日"
        },
        {
          id: 5,
          url: "https://tkm99.sakura.ne.jp/create-pw/",
          title: "パスワード生成",
          img: require("../assets/create-pw.png"),
          date: "2020年5月5日"
        },
        {
          id: 6,
          url: "https://tkm99.sakura.ne.jp/dot-mario/",
          title: "ドットマリオ",
          img: require("../assets/dot-mario.png"),
          date: "2020年5月5日"
        },
        {
          id: 7,
          url: "https://tkm99.sakura.ne.jp/shooting-game/",
          title: "シューティングゲーム",
          img: require("../assets/shooting.png"),
          date: "2020年5月5日"
        }
      ]
    };
  },
  mounted() {
    const card = document.getElementsByClassName("works-list__item");
    const options = {
      root: null,
      rootMargin: "-20px 0px -100px 0px"
    };
    card.forEach(target => this.onIntersect(target, options));
  },
  methods: {
    onIntersect(target, options = {}) {
      const io = new IntersectionObserver(this.addClass, options);
      io.observe(target);
    },
    addClass(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeup");
        } else {
          entry.target.classList.remove("fadeup");
        }
      });
    }
  },
  components: {
    WorksCard
  }
};
</script>

<style lang="scss" scoped>
.works {
  position: relative;
  background-color: #000;
  &__ttl {
    padding: 20px;
    color: #fff;
    font-size: 32px;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &__item {
      margin: 50px 20px;
      transform: translateY(50px);
      opacity: 0;
      transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0s,
        opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0s;
      &.fadeup {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
