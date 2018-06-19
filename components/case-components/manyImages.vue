<template>
    <div class="manyImages">
         <SVG-filter-image
          :filterId="item.sys.id"
          :key="index" 
          v-for="(item, index) in data.images" 
          :src="item.fields.url"
          :src-placeholder="item.fields.base64"       
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
.manyImages {
  padding-top: 80px;
  width: 1565px;
  max-width:100%;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
  align-items: flex-start;
  @media #{$mobile} {
      flex-wrap: wrap;
      width: 100%;
    }
  .progressive-image {
    width: 48%;
    @media #{$mobile} {
      width: 100%;
    }
  }
}
</style>