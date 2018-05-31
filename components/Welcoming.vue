<template>
  <div class="welcoming">
     <h1>Привет, мы DOBRO</h1>
     <p>Мы создаем и развиваем отличные digital продукты для рекламных агентств, брендов и веб-проектов</p>
   </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';
.welcoming {
  max-width: 950px;
  align-self: center;
  h1 {
    @extend %p;
    font-size: 50px;    
  }
  p {
    @extend %p;
    font-size: 25px;
  }
}
</style>