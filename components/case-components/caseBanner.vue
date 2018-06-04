<template>
    <div class="banner" :class="{'banner-withpadding': data.topPadding}">
        <SVG-filter-image
          :src="src"
          :src-placeholder="srcPlaceholder"
          :srcset="srcset"
          :duration="300"
          :filterId="data.image.sys.id"
        ></SVG-filter-image>
        <div :style="{color: data.textColor}" class="banner-text">{{data.text}}</div>
    </div>
</template>
<script>
import SVGFilterImage from '~/components/SVGFilterImage';
export default {
  props: ['data'],
  computed: {
    src: function() {
      if (this.data && this.data.image && this.data.image.fields && this.data.image.fields.url) {
        return this.data.image.fields.url;
      } else {
        return null;
      }
    },
    srcPlaceholder: function() {
      if (this.data && this.data.image && this.data.image.fields && this.data.image.fields.base64) {
        return this.data.image.fields.base64;
      } else {
        return null;
      }
    },
    srcset: function() {
      if (
        this.data &&
        this.data.imageSrcset &&
        this.data.imageSrcset.fields &&
        this.data.imageSrcset.fields.images
      ) {
        return this.data.imageSrcset.fields.images;
      } else {
        return null;
      }
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