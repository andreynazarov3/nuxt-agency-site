<template>
      <div class="isotope-wrapper">
        <div :class="{isVisible: isotopeVisible}" class="isotope-container">         
          <div ref="isotope-items" class="isotope-item" :key="item.sys.id" v-for="item in cases">
            <nuxt-link draggable="false" :to="'/cases/'+item.fields.casePageUrl">
            <div class="isotope-item-overlay">                
              </div>   
              <div class="isotope-item-desc">
                <h2>{{ item.fields.title }}</h2>
                <p>{{ item.fields.shortDesc }}</p>
              </div>            
              <LazyPicture v-if="item.fields.previewPic"
                  :title="item.fields.previewPic.fields.title"
                  :sources="item.fields.previewPic.fields.sources"
              ></LazyPicture>                   
            </nuxt-link>
          </div>
        </div>
    </div>
</template> 
<script>
import { mapGetters } from "vuex";
import LazyPicture from "~/components/LazyPicture";
if (process.browser) {
  var Isotope = require("isotope-layout");
  require("isotope-packery");
  var ImagesLoaded = require("imagesloaded");
}
export default {
  props: ["cases", "filter"],
  components: {
    LazyPicture,
  },
  data: function() {
    return {
      isotopeVisible: false,
      isotope: null,
      selector: ".isotope-container",
      options: {
        itemSelector: ".isotope-item",
        initLayout: true,
        layoutMode: "packery",
        packery: {
          gutter: 0,
        },
        percentPosition: true,
        stagger: 30,
      },
    };
  },
  watch: {
    props() {
      this.loaded();
    },
    filter: function() {
      this.filterGridPlease();
    },
  },
  methods: {
    getClasses: function(item) {
      let arr = [];
      if (item.fields.tagsWork) {
        arr = [...arr, ...item.fields.tagsWork.fields.tags];
      }
      if (item.fields.tagsProject) {
        arr = [...arr, ...item.fields.tagsProject.fields.tags];
      }
      if (item.fields.year) {
        arr = [...arr, `year${item.fields.year.fields.year}`];
      }
      if (item.fields.previewPic) {
        arr = [...arr, `isotope-item--${item.fields.previewPic.fields.size}`];
      }
      return arr;
    },
    filterGridPlease() {
      this.isotope.arrange({
        filter: this.filter,
      });
    },
    loaded() {
      ImagesLoaded(this.selector, () => {
        this.isotope = new Isotope(this.selector, this.options);
        this.isotopeVisible = true;
        new TimelineMax().staggerFromTo(
          this.$refs["isotope-items"],
          0.5,
          {
            autoAlpha: 0,
            y: "100%",
          },
          {
            autoAlpha: 1,
            y: "0%",
          },
          0.2,
        );
      });
    },
  },
  mounted: function() {
    this.loaded();
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/_vars.scss";
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
  z-index: 1;
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
  z-index: 1;
}
.isotope-wrapper {
  width: 100%;
}
.isotope-container {
  opacity: 0;
  transition: opacity 300ms ease;
  &.isVisible {
    opacity: 1;
  }
  .isotope-item {
    overflow: hidden;
    width: 20%;
    @media #{$mediumLaptop} {
      width: 33.3333%;
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