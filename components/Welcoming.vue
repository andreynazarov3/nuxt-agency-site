<template>
  <div class="welcoming">
     <h1>Привет, мы DOBRO</h1>
     <p>Мы создаем и развиваем отличные digital продукты для рекламных агентств, брендов и веб-проектов</p>
   </div>
</template>
<script>
import Logo from '~/components/Logo';
export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';
.welcoming {
  max-width: 1050px;
  align-self: center;
  padding: 100px $headerGutter 200px;
  box-sizing: border-box;
  h1 {
    @extend %heading;
    font-size: 82px;    
  }
  p {
    @extend %p;
    font-size: 25px;
  } 
  @media #{$ipadLandscape} {
    padding: 30px $headerGutter 100px;
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 18px;
    }
    .logo-wrapper {
      width: 200px;
    }
  }
  @media #{$ipadPortrait} {
    padding: 30px $headerMobileGutter 100px;
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
    }
    .logo-wrapper {
      width: 150px;
      margin-left: 10px;
    }
  }
  @media #{$mobile} {
    padding: 0px $headerMobileGutter 30px;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
    .logo-wrapper {
      width: 100px;
      margin-left: 5px;
    }
  }
}
</style>