<template>
  <div class="banner" :class="{'banner-withpadding': mergedData.topPadding}">
    <SVG-filter-image 
      :src="mergedData.image.fields.url"
      :src-placeholder="mergedData.image.fields.base64" 
      :srcset="mergedData.imageSrcset.fields.images" 
      :filterId="mergedData.image.sys.id">
    </SVG-filter-image>
    <div :style="{color: mergedData.textColor}" class="banner-text">{{mergedData.text}}</div>
  </div>
</template>

<script>
import SVGFilterImage from '~/components/SVGFilterImage';
export default {
  props: ['data'],
  data() {
    return {
      defaultData: {
        image: {
          fields: {
            url: null,
            base64: null,
          },
        },
        imageSrcset: {
          fields: {
            images: null,
          },
        },
        textColor: 'black',
        text: null,
        topPadding: false,
      },
    };
  },
   computed: {
    mergedData(){
      return {
       ...this.defaultData,
       ...this.data
      }
    }
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