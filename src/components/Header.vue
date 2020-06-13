<template>
  <header class="l-h">
    <div class="l-h__in">
      <div class="logo">
      <router-link class="logo__link" to="/">
        <i class="fas fa-home"></i>
      </router-link>
      </div>
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
            <router-link class="nav__link" to="/career">
              <span class="nav__txt">Career</span>
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
  margin-left: 40px;
  text-align: center;
  font-size: 32px;
  cursor: pointer;
}
.logo__link {
  color: #222;
  text-decoration: none;
  transition: color 0.4s cubic-bezier(0.25, 1, 0.5, 1) 0s;
}
.logo:hover .logo__link {
  color: #fff;
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
@media screen and (max-width: 650px) {
  .logo:hover .logo__link {
    color: #222;
  }
}
</style>
