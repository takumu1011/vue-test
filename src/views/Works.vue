<template>
  <div class="works">
    <h2 class="works__ttl">Works</h2>
    <ul class="works-list">
      <li class="works-list__item" v-for="card in cards" :key="card.title">
        <WorksCard :title="card.title" :img="card.img" :date="card.date"></WorksCard>
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
          title: '作品1',
          img: require('../assets/logo.png'),
          date: '2020年2月2日'
        },
        {
          title: '作品2',
          img: require('../assets/logo.png'),
          date: '2020年10月11日'
        },
        {
          title: '作品3',
          img: require('../assets/logo.png'),
          date: '2020年5月5日'
        }
      ]
    }
  },
  methods: {
    // countCard(cardNum) {
    //   this.cardNum = cardNum;
    // }
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
  font-size: 32px;
}
.works-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
