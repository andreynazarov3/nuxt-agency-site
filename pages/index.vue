<template>
  <div>
    <myHeader />
    <Welcoming />
    <IsotopeGrid :cases="cases" />
  </div>
</template>
<script>
import myHeader from '~/components/myHeader';
import Welcoming from '~/components/Welcoming';
import IsotopeGrid from '~/components/IsotopeGrid';
import { mapGetters } from 'vuex';
export default {
  components: {
    Welcoming,
    IsotopeGrid,
    myHeader,
  },
  asyncData({ isDev }) {
    if (process.browser && isDev) {
      window.localStorage.clear();
    }
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