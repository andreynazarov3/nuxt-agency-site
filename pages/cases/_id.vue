<template>
  <div class="case">
    <myHeader :color="caseItem.fields.headerColor" />
    <component v-for="item in caseItem.fields.components" :is="item.sys.contentType.sys.id" :key="item.sys.id" :data="item.fields"></component>
    <casesBottomNav :nextCase="nextCase" :prevCase="prevCase"></casesBottomNav>
  </div>
</template>

<script>
import caseBanner from '~/components/case-components/caseBanner';
import caseShortDesc from '~/components/case-components/caseShortDesc';
import wideImage from '~/components/case-components/wideImage';
import textBlockWithHeading from '~/components/case-components/textBlockWithHeading';
import manyImages from '~/components/case-components/manyImages';
import myHeader from '~/components/myHeader';
import myVideo from '~/components/case-components/myVideo';
import theTeam from '~/components/case-components/theTeam';
import flickitySlider from '~/components/case-components/flickitySlider';
import casesBottomNav from '~/components/casesBottomNav';
export default {
  components: {
    caseBanner,
    caseShortDesc,
    wideImage,
    textBlockWithHeading,
    manyImages,
    myHeader,
    myVideo,
    theTeam,
    flickitySlider,
    casesBottomNav
  },
  asyncData({ params, store, error }) {
    const caseItem = store.getters.getCaseById(params.id);
    const nextCase = store.getters.getNextCaseById(params.id);
    const prevCase = store.getters.getPrevCaseById(params.id);
    return {
      caseItem,
      nextCase,
      prevCase
    };
  },
};
</script>
<style>
</style>