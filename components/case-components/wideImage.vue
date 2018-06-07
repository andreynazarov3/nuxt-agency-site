<template>
    <div class="wideImage">
        <SVG-filter-image
          :filterId="data.image.sys.id"
          :src="data.image.fields.url"
          :src-placeholder="data.image.fields.base64"
          :srcset="data.imageSrcset.fields.images"
          :duration="300"
        ></SVG-filter-image>          
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

<style lang="scss">
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