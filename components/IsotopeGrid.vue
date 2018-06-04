<template>
      <div class="isotope-wrapper">
        <div class="isotope-container">         
          <div class="isotope-item" :key="item.sys.id" v-for="item in cases">
            <nuxt-link draggable="false" :to="'/cases/'+item.fields.casePageUrl">
            <div class="isotope-item-overlay">                
              </div>   
              <div class="isotope-item-desc">
                <h2>{{ item.fields.title }}</h2>
                <p>{{ item.fields.shortDesc }}</p>
              </div>           
              <img 
              draggable="false"  
              :src="'/images/' + item.fields.previewImg"
              />            
            </nuxt-link>
          </div>
        </div>
    </div>
</template> 
<script>
import { mapGetters } from 'vuex';
import TimelineMax from 'gsap';

if (process.browser) {
  var Isotope = require('isotope-layout');
  require('isotope-packery');
  var ImagesLoaded = require('imagesloaded');
}

export default {
  props: ['cases'],

  data: function() {
    return {
      selector: '.isotope-container',
      options: {
        itemSelector: '.isotope-item',
        initLayout: false,
        layoutMode: 'packery',
        packery: {
          gutter: 0,
        },
        percentPosition: true,
      },
    };
  },
  watch: {
    props() {
      this.loaded();
    },
  },
  methods: {
    loaded() {
      ImagesLoaded(this.selector, () => {
        const isotope = new Isotope(this.selector, this.options);
        function onLayout() {
          TimelineMax.staggerFromTo(
            document.querySelectorAll('.isotope-item'),
            0.5,
            {
              autoAlpha: 0,
              y: '100%',
            },
            {
              autoAlpha: 1,
              y: '0%',
            },
            0.2,
          );
        }
        isotope.on('arrangeComplete', onLayout);
        isotope.arrange();
      });
    },
  },
  mounted: function() {
    this.loaded();
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';
.isotope-item-desc,
.isotope-item-overlay {
  @extend %overlayPosition;
}
.isotope-item-desc {
  padding: 0 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transform: translateY(50px);
  opacity: 0;
  transition: 300ms ease-in-out;
  h2 {
    @extend %heading;
    font-size: 46px;
    color: black;
  }
  p {
    @extend %p;
    line-height: 42px;
    font-size: 30px;
  }
  @media #{$ipadLandscape} {
    h2 {
      font-size: 30px;
    }
    p {
      line-height: 20px;
      font-size: 18px;
    }
  }
}
.isotope-item-overlay {
  background: white;
  opacity: 0;
  transition: 300ms ease-in-out;
}
.isotope-wrapper {
  width: 100%;
}
.isotope-container {
  .isotope-item {
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    width: 25%;
    @media #{$mediumLaptop} {
      width: 33.333%;
    }
    @media #{$mobile} {
      width: 50%;
    }
    a {
      display: block;
      &:hover {
        .isotope-item-desc {
          transform: translateY(0px);
          opacity: 1;
        }
        .isotope-item-overlay {
          opacity: 0.7;
        }
      }
    }
    img {
      width: 100%;
      display: block;
      user-select: none;
    }
  }
}
</style>