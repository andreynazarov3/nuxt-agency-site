<template>  
<div class="app">
  <myHeader></myHeader>
  <nuxt class="pageContent" />
</div>
</template>
<script>
import myHeader from '~/components/myHeader';
export default {
  components: {
    myHeader,
  },
};
</script>
<style lang="scss">  
@import '~/assets/scss/_vars.scss';
.pageContent {
  max-width:1920px;
  margin:0 auto;
  padding-top: $headerHeight;
  display: flex;
  flex-direction: column;
  &.case {
    padding-top: 0;
  }
}
</style>
