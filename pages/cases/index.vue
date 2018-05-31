<template>
<div class="cases">
  <Masonry :cases="cases" />
</div>
</template>
<script>
import Masonry from '~/components/Masonry';
import { mapGetters } from 'vuex';
export default {
  components: {
    Masonry,
  },
  computed: {
    ...mapGetters({
      cases: 'getCases',
    }),
  },
};
</script>