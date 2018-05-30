<template>
<div class="cases">
  <h1>
    all cases
  </h1>
  <nuxt-link v-for="item in cases" :key="item.sys.id" :to="'/cases/'+item.fields.casePageUrl">
    {{ item.fields.title }}
  </nuxt-link>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: mapGetters({
    cases: 'getCases',
  }),
};
</script>