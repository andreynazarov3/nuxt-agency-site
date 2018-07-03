<template>
  <div class="short-description">
    <div class="tags">
      <div class="tags-work-type">
        <h2>Тип работ:</h2>
        <span :key="index" v-for="(item, index) in data.tagsWork.fields.tags">#{{item}}</span>
      </div>
      <div class="tags-project-type">
        <h2>Тип проекта:</h2>
        <span :key="index" v-for="(item, index) in data.tagsProject.fields.tags">#{{item}}</span>
      </div>
      <div class="year">
        <h2>Год:</h2>
        <span>{{data.year.fields.year}}</span>
      </div>
    </div>
    <div class="undertext" v-if="data.underText">
      {{data.underText}}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    data: function() {
      return {}
    }
  };
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/_vars.scss';
  .short-description {
    padding: 45px $generalPadding 0;
    max-width: 990px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    @media #{$ipadPortrait} {
      padding-top: 0;
    }
  }
  
  .tags {
    display: flex;
    justify-content: space-between;
    @media #{$ipadPortrait} {
      flex-direction: column;
      >div {
        padding-top: 20px;
      }
    }
    h2 {
      @extend %p;
      color: #C1C1C1;
    }
    span {
      @extend %accent;
      font-size: 20px;
      &:after {
        content: ', ';
      }
      &:last-child {
        &:after {
          content: '';
        }
      }
    }
  }
  
  .undertext {
    @extend %p;
    padding: 45px 0 0;
    line-height: 28px;
    font-size: 20px;
  }
</style>