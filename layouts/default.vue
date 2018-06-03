<template>  
<div class="app">
  <mobileMenu v-if="mobileMenuOpened"></mobileMenu>
  <nuxt class="pageContent" />
</div>
</template>
<script>
import { EventBus } from '~/components/event-bus.js';
import mobileMenu from '~/components/mobileMenu';
export default {
  components: {
    mobileMenu,
  },
  data: function() {
    return { mobileMenuOpened: false };
  },
  created: function() {
    const self = this;
    EventBus.$on('openMobileMenu', function() {
      self.mobileMenuOpened = true;
    });
    EventBus.$on('closeMobileMenu', function() {
      self.mobileMenuOpened = false;
    });
  },
  beforeDestroy() {
    EventBus.$off('openMobileMenu');
    EventBus.$off('closeMobileMenu');
  },
  head() {
    return {
      bodyAttrs: {
        style: this.mobileMenuOpened ? 'overflow: hidden' : '',
      },
      
    };
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.pageContent {
  padding-top: $headerHeight;
  display: flex;
  flex-direction: column;
  @media #{$ipadPortrait} {
    padding-top: $headerMobileHeight;
  }
  &.case {
    padding-top: 0;
  }
}
</style>
