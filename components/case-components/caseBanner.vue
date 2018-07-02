<template>
  <div class="banner" :class="{'banner-withpadding': mergedData.topPadding}">
    <LazyPicture 
      :title="mergedData.image.fields.title"
      :sources="mergedData.image.fields.sources"
    >
    </LazyPicture>
    <div :style="{color: mergedData.textColor}" class="banner-text">{{mergedData.text}}</div>
  </div>
</template>

<script>
import LazyPicture from '~/components/LazyPicture';
export default {
  props: ['data'],
  data() {
    return {
      defaultData: {     
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
    LazyPicture
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.banner {
  position: relative;
  overflow: hidden;  
  .picture-container {
    max-height: 600px;
  }
  picture, img {
    max-height: 100%;
    object-fit: cover;
  }
  canvas {
    max-height: 100%;
  }
  &-withpadding {
    padding-top: 111px;
  }
}

.banner-text {
  @extend %heading;
  @extend %absolutelyCentered;
  font-size: 60px;
}
</style>