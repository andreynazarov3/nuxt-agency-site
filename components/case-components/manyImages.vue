<template>
    <div class="manyImages">
        <img :key="index" v-for="(item, index) in data.urls" :src="item" alt="">      
    </div>
</template>
<script>

export default {
  props: ['data'],
  data: function() {
    return {  }
}
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';
.manyImages {
  padding-top: 80px;
  width: 1565px;
  max-width:100%;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
  align-items: flex-start;
  img {
    width: 48%;
    // max-width: 760px;
  }
}
</style>