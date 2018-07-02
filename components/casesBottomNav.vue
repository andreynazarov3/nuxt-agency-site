<template>
  <div class="casesBottomNav">
      <nuxt-link :to="prevCase.fields.casePageUrl">      
        <LazyPicture 
          class="previewPic"          
          :title="prevCase.fields.previewPic.fields.title"
          :sources="prevCase.fields.previewPic.fields.sources"
        >
        </LazyPicture>          
        <div class="previewDesc">
          <p>Предыдущий кейс</p>
          <h2>{{ prevCase.fields.title }}</h2>
        </div>
      </nuxt-link>
      <nuxt-link :to="nextCase.fields.casePageUrl">      
         <LazyPicture 
          class="previewPic"          
          :title="nextCase.fields.previewPic.fields.title"
          :sources="nextCase.fields.previewPic.fields.sources"
        >
        </LazyPicture> 
        <div class="previewDesc">
          <p>Следущий кейс</p>
          <h2>{{ nextCase.fields.title }}</h2>
        </div>
      </nuxt-link>
  </div>
</template>
<script>
import LazyPicture from '~/components/LazyPicture';
export default {
  props: ['nextCase', 'prevCase'],
  components: {
    LazyPicture
  }
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.casesBottomNav {
  display: flex;    
  
  @media #{$mobile} {
      flex-direction: column;
    }
  a {
    overflow: hidden;
    display: block;
    position: relative;
    width: 50%;
    height: 250px;        
    .previewPic {
      opacity: 0;    
      transition: opacity 500ms ease;
    }
    &:hover {
      .previewPic {
    opacity: 0.5;    
    }   
    }
    &:first-child {
      background-color: #BB6BD9;
    }
    &:last-child {
      background-color: #9B51E0;
    }
    @media #{$mobile} {
      width: 100%;
      height: 150px;
    }
    .previewDesc {
      @extend %absolutelyCentered;
      p, h2 {@extend %p;}
      h2 {
        font-size: 25px;
        font-weight: 700;
      }
    }
  }
}
</style>