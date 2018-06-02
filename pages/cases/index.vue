<template>
<div class="cases">
  <myHeader />
  <IsotopeGrid :cases="cases" />
</div>
</template>
<script>
import IsotopeGrid from '~/components/IsotopeGrid';
import myHeader from '~/components/myHeader';
import { mapGetters } from 'vuex';
export default {
  components: {
    IsotopeGrid, myHeader
  },
  computed: {
    ...mapGetters({
      cases: 'getCases',
    }),
  },
};
</script>