<template>  
  <header>
      <div class="header-content">
      <div class="home">
        <nuxt-link to="/"><Logo :color="color" /></nuxt-link>
      </div>
      <div class="links">
        <nuxt-link :style="{color:color}" to="/agency">Агентство</nuxt-link>
        <nuxt-link :style="{color:color}" to="/cases">Кейсы</nuxt-link>
        <nuxt-link :style="{color:color}" to="/contacts">Контакты</nuxt-link>
      </div>
      </div>
  </header>
</template>
<script>
import Logo from "~/components/Logo"
export default {
  props:{ 
    'color': {
      default:'#000000'
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
header {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.header-content {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: $headerHeight;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
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
  @media #{$ipadPortrait} {
    display: none;
  }
}
.home {
  a {
    margin-left: 53px;
  }
}
</style>
