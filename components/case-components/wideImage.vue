<template>
    <div class="wideImage">
        <img :src="data.url" alt="">      
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
.wideImage {
  padding-top: 80px;
  max-width: 1565px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>