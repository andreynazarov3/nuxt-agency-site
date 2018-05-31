<template>  
  <header>
      <div class="home">
        <nuxt-link to="/">Главная</nuxt-link>
      </div>
      <div class="links">
        <nuxt-link to="/agency">Агентство</nuxt-link>
        <nuxt-link to="/cases">Кейсы</nuxt-link>
        <nuxt-link to="/contacts">Контакты</nuxt-link>
      </div>
  </header>
</template>
<style lang="scss">
@import '~/assets/scss/_vars.scss';
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $headerHeight;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: lightgoldenrodyellow;
  padding: 0 $generalPadding;
  box-sizing: border-box;
}
.links {
  a {
    @extend %p;
    font-size: 18px;
    margin-right: 53px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media #{$tabletScreen} {
    display: none;
  }
}
.home {
  a {
    margin-left: 53px;
  }
}
</style>
