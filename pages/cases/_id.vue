<template>
  <div class="case">
    <h1>{{caseItem.fields.title}}</h1>
  </div>
</template>

<script>
export default {
  asyncData({ params, store, error }) {
    const item = store.getters.getCaseById(params.id);
    return { caseItem: item };
  },
};
</script>
<style>
</style>