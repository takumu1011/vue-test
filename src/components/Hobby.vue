<template>
  <div class="hobby">
    <h2 class="hobby__ttl">{{ ttl }}</h2>
    <ul class="hobby__list">
      <li class="hobby__list-item">テキストが入ります</li>
      <li class="hobby__list-item">テキストが入ります</li>
      <li class="hobby__list-item">テキストが入ります</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ttl: 'Hobby'
    }
  }
}
</script>
