<template>
  <div class="about">
    <h2 class="about__ttl">{{ ttl }}</h2>
    <div class="about__des">
      <p class="about__txt">
        テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ttl: 'About'
    }
  }
}
</script>
