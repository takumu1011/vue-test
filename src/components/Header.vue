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

<style lang="scss" scoped>
.l-h {
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: #ddd;
  &__in {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.logo {
  margin-left: 40px;
  text-align: center;
  font-size: 32px;
  cursor: pointer;
  &__link {
    color: #222;
    text-decoration: none;
    transition: color 0.4s cubic-bezier(0.25, 1, 0.5, 1) 0s;
  }
  &:hover &__link {
    color: #fff;
  }
}
.nav {
  padding: 0 30px;
  &-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-left: 1px solid #222;
      width: 100%;
      height: 100%;
    }
    &:last-child::before {
      border-right: 1px solid #222;
    }
  }
  &__link {
    display: block;
    padding: 0 20px;
    color: #222;
    text-decoration: none;
    &:hover .nav__txt::before {
      width: 100%;
    }
  }
  &__txt {
    position: relative;
    padding-bottom: 5px;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      border-bottom: 1px solid #222;
      transition: width 0.25s ease-in 0s;
    }
  }
}
@media screen and (max-width: 650px) {
  .logo:hover .logo__link {
    color: #222;
  }
}
</style>
