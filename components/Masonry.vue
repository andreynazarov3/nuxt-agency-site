<template>
        <div ref="mosaic" class="masonry-container">
          <div class="grid-sizer"></div>
          <div ref="mosaicItems" class="masonry-item" :key="item.sys.id" v-for="item in cases">
            <nuxt-link :to="'/cases/'+item.fields.casePageUrl">
              <img draggable="false"  :src="item.fields.previewImg" alt="">
            </nuxt-link>
          </div>
        </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TimelineMax from 'gsap';
if (process.browser) {
  var Masonry = require('masonry-layout');
  var ImagesLoaded = require('imagesloaded');
}
export default {
  data: function() {
    return {
      selector: '.masonry-container',
      options: {
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 0,
        itemSelector: '.masonry-item',
        initLayout: false,
      },
    };
  },
  components: {},
  computed: mapGetters({
    cases: 'getCases',
  }),
  watch: {
    // data() {
    //   this.loaded();
    // },
  },
  methods: {
    loaded() {
      ImagesLoaded(this.selector, () => {
        const masonry = new Masonry(this.selector, this.options);
        function onLayout() {
          TimelineMax.staggerTo(
            document.querySelectorAll('.masonry-item'),
            0.5,
            {
              autoAlpha: 1,
            },
            0.2,
          );
        }
        masonry.on('layoutComplete', onLayout);
        masonry.layout();
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
.masonry-container {
  .grid-sizer,
  .masonry-item {
    visibility: hidden;
    opacity: 0;
    width: 25%;
    @media #{$tabletScreen} {
      width: 33.333%;
    }
    @media #{$mobileScreen} {
      width: 50%;
    }
  }
  .masonry-item {
    img {
      width: 100%;
      display: block;
      user-select: none;
    }
  }
}
</style>