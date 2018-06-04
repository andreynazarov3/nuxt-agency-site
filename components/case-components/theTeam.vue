<template>
    <div class="theTeam">
      <div class="team-items">
      <div class="team-item" v-for="(i, index) in [1,1,1]" :key="index">
        <h2>{{ data.heading1 }}</h2>
        <ul>
          <li :key="index" v-for="(item, index) in data.list1">{{ item }}</li>
        </ul>
      </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ['data'],
};
</script>
<style lang="scss">
@import '~/assets/scss/_vars.scss';
.theTeam {
  margin-top: 92px;
  padding: 130px $generalPadding;
  background: #f3f3f3;
  @media #{$ipadLandscape} {
    padding: 30px $generalPadding; 
  }
}
.team-items {
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  h2 {
    @extend %heading;
    font-size: 28px;
    padding-bottom: 22px;
  }
  li {
    @extend %p;
    font-size: 20px;
    line-height: 28px;
  }
  @media #{$ipadLandscape} {
    flex-direction: column;    
    .team-item {
      padding: 30px 0; 
    }
  }
}
</style>