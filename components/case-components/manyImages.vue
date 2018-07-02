<template>
    <div class="manyImages">
      <LazyPicture 
        v-for="image in data.images"
        :key="image.sys.id"
        :title="image.fields.title"
        :sources="image.fields.sources"
      >
      </LazyPicture>
    </div>
</template>
<script>
import LazyPicture from '~/components/LazyPicture';

export default {
  props: ['data'],
   components: {
    LazyPicture
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
  .picture-container {
    width: 48%;
    @media #{$mobile} {
      width: 100%;
    }
  }
}
</style>