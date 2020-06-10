<template>
  <div class="works">
    <h2 class="works__ttl">Works</h2>
    <ul class="works-list">
      <li class="works-list__item" v-for="n in cardNum" :key="n">
        <WorksCard @card-num="countCard($event)"></WorksCard>
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
    }
  },
  methods: {
    countCard(cardNum) {
      this.cardNum = cardNum;
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
  font-size: 32px;
}
.works-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
