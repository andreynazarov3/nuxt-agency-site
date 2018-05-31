<template>
  <div>
    <Welcoming />
    <Masonry />
  </div>
</template>
<script>
import Welcoming from '~/components/Welcoming';
import Masonry from '~/components/Masonry';
export default {
  components: {
    Welcoming,
    Masonry,
  },
};
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';
</style>