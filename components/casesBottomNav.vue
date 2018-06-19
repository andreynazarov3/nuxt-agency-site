<template>
  <div class="casesBottomNav">
      <nuxt-link :to="prevCase.fields.casePageUrl">
         <SVG-filter-image v-if="prevCaseMerged.image.sys"
          :src="prevCaseMerged.image.fields.url"
          :src-placeholder="prevCaseMerged.image.fields.base64" 
          :srcset="prevCaseMerged.imageSrcset.fields.images"       
          :filterId="prevCaseMerged.image.sys.id">
       </SVG-filter-image>
       <span>Предыдущий кейс</span>
        </nuxt-link>

      <nuxt-link :to="nextCase.fields.casePageUrl">
        <SVG-filter-image v-if="nextCaseMerged.image.sys"
          :src="nextCaseMerged.image.fields.url"
          :src-placeholder="nextCaseMerged.image.fields.base64" 
          :srcset="nextCaseMerged.imageSrcset.fields.images"         
          :filterId="nextCaseMerged.image.sys.id">
       </SVG-filter-image>
       <span>Следущий кейс</span>
        </nuxt-link>
  </div>
</template>
<script>
import SVGFilterImage from '~/components/SVGFilterImage';
export default {
  props: ['nextCase', 'prevCase'],
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
    nextCaseImage() {
      if (this.nextCase.fields.components && this.nextCase.fields.components[0]) {
        return this.nextCase.fields.components[0].fields;
      } else {
        return null;
      }
    },
    prevCaseImage() {
      if (this.prevCase.fields.components && this.prevCase.fields.components[0]) {
        return this.prevCase.fields.components[0].fields;
      } else {
        return null;
      }
    },
    nextCaseMerged() {
      return {
        ...this.defaultData,
        ...this.nextCaseImage,
      };
    },
    prevCaseMerged() {
      return {
        ...this.defaultData,
        ...this.prevCaseImage,
      };
    },
  },
  components: {
    SVGFilterImage,
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.casesBottomNav {
  display: flex;
  a {
    display: block;
    position: relative;
    width: 50%;
    padding-bottom: 20%;
    @media #{$mobile} {
      padding-bottom: 50%;
    }
    span {
      @extend %absolutelyCentered;
      @extend %p;
    }
  }
  picture {
    display: block;
  }
  .progressive-image {
    @extend %overlayPosition;
  }
  img {
    width: 100%;
  }
}
</style>