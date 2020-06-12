<template>
  <div class="card">
    <img class="card__img" :src="img">
    <div class="card__txt">
      <h3 class="card__ttl">{{ title }}</h3>
      <p class="card__date">{{ date }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: ['title', 'img', 'date'],
  data() {
    return {
      // cardNum: 10,
    }
  },
  // mounted() {
  //   this.$emit('card-num', this.cardNum);
  // }
}
</script>


<style scoped>
.card {
  width: 300px;
  background-color: #ddd;
  border: 2px solid #222;
  border-radius: 7px;
  transition: box-shadow 0.45s cubic-bezier(0.25, 1, 0.5, 1) 0s;
}
.card:hover {
  box-shadow: 0 0 20px #222;
}
.card__img {
  display: block;
  width: 100%;
  background-color: orange;
}
.card__txt {
  padding: 0 10px;
}
.card__ttl {
  font-size: 24px;
  margin: 10px 0 20px;
}
.card__date {
  padding-bottom: 15px;
  font-size: 14px;
  text-align: right;
}
</style>
