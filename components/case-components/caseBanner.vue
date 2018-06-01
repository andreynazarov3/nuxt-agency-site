<template>
    <div class="banner">
        <img :src="data.image_url_desktop" alt="">
        <div :style="{color: data.textColor}" class="banner-text">{{data.text}}</div>
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
.banner {
  position: relative;
  img {
    width: 100%;
  }
}
.banner-text {  
  @extend  %p;
  @extend %absolutelyCentered;
  font-size: 60px;
}
</style>