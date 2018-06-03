<template>
    <div class="banner">
        <SVG-filter-image
          :src="data.image.fields.url"
          :src-placeholder="data.image.fields.base64"
          :blurLevel="50"
          :duration="300"
          :filterId="data.image.sys.id"
        ></SVG-filter-image>
        <div :style="{color: data.textColor}" class="banner-text">{{data.text}}</div>
    </div>
</template>
<script>
import SVGFilterImage from "~/components/SVGFilterImage";
export default {
  props: ['data'],
  components: {
    SVGFilterImage
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';
.banner {
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.banner-text {
  @extend %heading;
  @extend %absolutelyCentered;
  font-size: 60px;
}
</style>