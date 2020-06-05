<template>
  <div class="vue-des">
    <h2 class="vue-des__heading">{{ heading }}</h2>
    <p class="vue-des__txt">
      テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
      テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
      テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
      テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
    </p>
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
.vue-des {
  padding: 20px;
  background-color: #ddd;
  border-radius: 7px;
}
</style>
