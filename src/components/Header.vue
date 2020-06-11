<template>
  <header class="l-h">
    <div class="l-h__in">
      <h1 class="logo">
      <router-link class="logo__link" to="/">ロゴ</router-link>
      </h1>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav__item">
            <router-link class="nav__link" to="/about">
              <span class="nav__txt">About</span>
            </router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/works">
              <span class="nav__txt">Works</span>
            </router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/about">
              <span class="nav__txt">About</span>
            </router-link>
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
    }
  }
}
</script>

<style scoped>
.l-h {
  position: fixed;
  z-index: 10;
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
.logo__link {

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
}
.nav__item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  border-left: 1px solid #222;
  width: 100%;
  height: 100%;
}
.nav__item:last-child::before {
  border-right: 1px solid #222;
}
.nav__link {
  display: block;
  padding: 0 20px;
  color: #222;
  text-decoration: none;
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
.nav__link:hover .nav__txt::before {
  width: 100%;
}

</style>
