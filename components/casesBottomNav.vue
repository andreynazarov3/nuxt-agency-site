<template>
  <div class="casesBottomNav">
      <nuxt-link :to="prevCase.fields.casePageUrl">
       
       <span>Предыдущий кейс</span>
        </nuxt-link>

      <nuxt-link :to="nextCase.fields.casePageUrl">
      
       <span>Следущий кейс</span>
        </nuxt-link>
  </div>
</template>
<script>
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