<template>
    <div class="textBlockWithHeading">
        <h2>
          {{data.heading}}
        </h2>
        <p>
          {{data.text}}
          </p>
    </div>
</template>
<script>

export default {
  props: ['data'],
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';
 .textBlockWithHeading {
    box-sizing: border-box;
    padding: 70px $generalPadding 0;
    max-width: 990px + $generalPadding;
    width:100%;
    margin: 0 auto;    
    h2 {
      @extend %heading;
      font-size: 35px;
    }
    p {
      @extend %p;
      padding-top: 35px;
      line-height: 28px;
      font-size: 20px;
    }
  }
</style>