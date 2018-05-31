<template>
  <div>
    <Welcoming />
    <Masonry :cases="cases" />
  </div>
</template>
<script>
import Welcoming from '~/components/Welcoming';
import Masonry from '~/components/Masonry';
import { mapGetters } from 'vuex';
export default {
  components: {
    Welcoming,
    Masonry,
  },
  computed: {
    ...mapGetters({
      cases: 'getCasesForMainPage',
    }),
  },
};
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';
</style>