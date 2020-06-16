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
import WorksCard from '../components/WorksCard.vue';
export default {
  data() {
    return {
      cardNum: '0',
      cards: [
        {
          id: 1,
          url: 'https://google.com',
          title: '作品1',
          img: require('../assets/logo.png'),
          date: '2020年2月2日',
        },
        {
          id: 2,
          title: '作品2',
          img: require('../assets/logo.png'),
          date: '2020年10月11日',
        },
        {
          id: 3,
          url: '',
          title: '作品3',
          img: require('../assets/logo.png'),
          date: '2020年5月5日',
        }
      ]
    }
  },
  mounted() {
    const card = document.getElementsByClassName('works-list__item');
    const options = {
        root: null,
        rootMargin: '-20px 0px -100px 0px'
    };
    card.forEach(target => this.onIntersect(target, options));
  },
  methods: {
    onIntersect(target, options ={}) {
      const io = new IntersectionObserver(this.addClass, options);
      io.observe(target);
    },
    addClass(entries) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('fadeup');
        }else {
          entry.target.classList.remove('fadeup');
        }
      })
    }
  },
  components: {
    WorksCard
  }
}
</script>

<style scoped>
.works {

}
.works__ttl {
  margin: 20px;
  font-size: 32px;
}
.works-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.works-list__item {
  margin: 50px 20px;
  transform: translateY(80px);
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0s, opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0s;
}
.works-list__item.fadeup {
  transform: translateY(0);
  opacity: 1;
}
</style>
