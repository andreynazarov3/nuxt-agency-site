<template>
  <div class="case">
    <component v-for="item in caseItem.fields.components" :is="item.sys.contentType.sys.id" :key="item.sys.id" :data="item.fields"></component>
  </div>
</template>

<script>
import caseBanner from '~/components/case-components/caseBanner';
import caseShortDesc from '~/components/case-components/caseShortDesc';
import wideImage from '~/components/case-components/wideImage';
import textBlockWithHeading from '~/components/case-components/textBlockWithHeading';
import manyImages from '~/components/case-components/manyImages';
export default {
  components: {
    caseBanner, caseShortDesc, wideImage, textBlockWithHeading, manyImages
  },
  asyncData({ params, store, error }) {
    const item = store.getters.getCaseById(params.id);
    return { caseItem: item };
  },
};
</script>
<style>
 
</style>