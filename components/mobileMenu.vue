<template>
  <nav class="mobile-menu">
    <div class="mobile-menu-header">
      <div class="home">
        <nuxt-link @click.native="closeMobileMenu()" to="/">
          <Logo color="white" />
        </nuxt-link>
      </div>
      <button  class="close-mobile-menu" @click="closeMobileMenu()">
              Закрыть
            </button>
    </div>
    <div class="links">
        <nuxt-link @click.native="closeMobileMenu()" to="/agency">Агентство</nuxt-link>
        <nuxt-link @click.native="closeMobileMenu()" to="/cases">Кейсы</nuxt-link>
        <nuxt-link @click.native="closeMobileMenu()" to="/contacts">Контакты</nuxt-link>
      </div>
  </nav>
</template>
<script>
import Logo from '~/components/Logo';
import { EventBus } from '~/components/event-bus.js';
export default {
  components: {
    Logo
  },
  methods: {
    closeMobileMenu() {
      EventBus.$emit('closeMobileMenu');
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';
.links {
  display: flex;
  flex-direction: column;
  a {
    @extend %heading;
    color: white;
  }
}
.mobile-menu {
  display: flex;
  flex-direction: column;
  padding: 0 $generalPadding;
  box-sizing: border-box;
}
 .mobile-menu-header {
    display: flex;
    height: $headerMobileHeight;    
    justify-content: space-between;
    align-items: center;
  }
.close-mobile-menu {
  @extend %p;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
 
}
nav {
  position: fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  background: rgb(0,0,0);
  z-index: 9999;
}
</style>

