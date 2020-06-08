<template>
  <header class="l-h">
    <div class="l-h__in">
      <h1 class="logo">ロゴ</h1>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav__item" v-for="navList in navLists" :key="navList">
            <span class="nav__txt">{{ navList }}</span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navLists: ['About', 'Works', '何か']
    }
  }
}
</script>

<style scoped>
.l-h {
  width: 100%;
  background-color: #ddd;
}
.l-h__in {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 180px;
  text-align: center;
  cursor: pointer;
}
.nav {
  padding: 0 30px;
}
.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__item {
  position: relative;
  padding: 0 20px;
  cursor: pointer;
}
.nav__item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  border-left: 1px solid #222;
  width: 100%;
  height: 20px;
}
.nav__item:last-child::before {
  border-right: 1px solid #222;
}
.nav__txt {
  position: relative;
  padding-bottom: 5px;
}
.nav__txt::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  border-bottom: 1px solid #222;
  transition: width 0.25s ease-in 0s;
}
.nav__item:hover .nav__txt::before {
  width: 100%;
}

</style>
