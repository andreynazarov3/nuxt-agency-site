<template>
  <div class="theTeam" :style="{backgroundColor: this.data.bgColor, color: this.data.textColor}">
    <div class="team-items">
      <div class="team-item" v-for="(list, index) in data.lists" :key="index">
        <h2>{{ list.fields.heading }}</h2>
        <ul>
          <li :key="index" v-for="(item, index) in list.fields.list">
            {{ item.fields.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: function() {
        return {
          lists: [],
          bgColor: '#f3f3f3',
          textColor: 'black',
        };
      },
    },
  },
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