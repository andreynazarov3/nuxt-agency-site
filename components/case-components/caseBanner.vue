<template>
    <div class="banner" :class="{'banner-withpadding': data.topPadding}">
        <SVG-filter-image
          :src="data.image.fields.url"
          :src-placeholder="data.image.fields.base64"
          :srcset="data.imageSrcset.fields.images"
          :duration="300"
          :filterId="data.image.sys.id"
        ></SVG-filter-image>
        <div :style="{color: data.textColor}" class="banner-text">{{data.text}}</div>
    </div>
</template>
<script>
import SVGFilterImage from '~/components/SVGFilterImage';
export default {
  props: {
    data: {
      type: Object,
      default: function() {
        return {
          image: {
            fields: {
              url: null,
              base64: null
            },
          },
          imageSrcset: {
            fields: {
              images: null,
            },
          },
          textColor: 'black',
          text: null,
          topPadding: false
        };
      },
    },
  },
  components: {
    SVGFilterImage,
  },
};
</script>
<style lang="scss">
@import '~/assets/scss/_vars.scss';
.banner {
  position: relative;
  overflow: hidden;
  &-withpadding {
    padding-top: 111px;
  }
  img,
  picture {
    width: 100%;
  }
}
.banner-text {
  @extend %heading;
  @extend %absolutelyCentered;
  font-size: 60px;
}
</style>