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
  data: function() {
    return {  }
}
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';
 .textBlockWithHeading {
    padding-top: 70px;
    max-width: 990px;
    margin: 0 auto;
    h2 {
      @extend %p;
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