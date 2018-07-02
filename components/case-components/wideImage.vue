<template>
    <div class="wideImage">
      <LazyPicture 
        :title="data.image.fields.title"
        :sources="data.image.fields.sources"
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
.wideImage {
  padding-top: 80px;
  max-width: 1565px;
  width: 100%;
  margin: 0 auto;
}
</style>