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
      <button :style="{color:color}"  class="mobile-menu-open" @click="openMobileMenu()">
        Меню
      </button>
      </div>
  </header>
</template>
<script>
import Logo from '~/components/Logo';
import { EventBus } from '~/components/event-bus.js';
export default {
  props: {
    color: {
      default: '#000000',
    },
  },
  components: {
    Logo,
  },
  methods: {
    openMobileMenu() {
      EventBus.$emit('openMobileMenu');
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
header {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 $headerGutter;
  box-sizing: border-box;
  @media #{$ipadPortrait} {
    padding: 0 $headerMobileGutter;
  }
}
.header-content {
  width: 100%;
  max-width: $contentWidth;
  margin: 0 auto;
  height: $headerHeight;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
  @media #{$ipadPortrait} {
    height: $headerMobileHeight;
  }
}
.links {
  a {
    @extend %p;
    font-size: 18px;
    margin-right: 53px;
    text-decoration: none;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  @media #{$ipadPortrait} {
    display: none;
  }
}
.mobile-menu-open {
  @extend %p;
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  @media #{$ipadPortrait} {
    display: block;
  }
}
</style>
