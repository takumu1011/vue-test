<template>
  <div class="card">
    <a class="card__link" :href="card.url" target="_blank">
      <p class="card__img-wrap">
        <img class="card__img" :src="card.img" />
      </p>
      <div class="card__txt">
        <h3 class="card__ttl">
          <span class="card__ttl-in">{{ card.title }}</span>
        </h3>
        <p class="card__date">{{ card.date }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["card"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@keyframes icon-move {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateX(30px);
    opacity: 0;
  }
}
.card {
  width: 300px;
  background-color: #b0c4de;
  border: 5px solid #222;
  border-radius: 4px;
  transition: box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1) 0s;
  &:hover {
    box-shadow: 0 0 15px #222;
    .card__img {
      transform: scale(1);
    }
    .card__ttl-in::before {
      animation: icon-move 0.75s linear 0s infinite;
    }
  }
  &__link {
    color: #222;
    text-decoration: none;
  }
  &__img-wrap {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
  &__img {
    display: block;
    width: 100%;
    height: 100%;
    transform: scale(1.2);
    transition: transform 0.4s ease-out 0s;
  }
  &__txt {
    padding: 0 10px;
  }
  &__ttl {
    margin: 10px 0 20px;
    font-size: 18px;
    &-in {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: -30px;
        width: 20px;
        height: 100%;
        background: url(../assets/arrow_right.png) no-repeat center center;
        background-size: contain;
        opacity: 0;
      }
    }
  }
  &__date {
    padding-bottom: 15px;
    font-size: 14px;
    text-align: right;
  }
}
@media screen and (max-width: 650px) {
  .card:hover {
    box-shadow: none;
  }
  .card:hover .card__ttl-in::before {
    animation: none;
  }
}
</style>
