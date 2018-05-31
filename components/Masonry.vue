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
      },
    };
  },
  components: {},
  computed: mapGetters({
    cases: 'getCases',
  }),
  watch: {
    data() {
      this.loaded();
    },
  },
  methods: {
    loaded() {
      // all images are loaded
      ImagesLoaded(this.selector, () => {
        this.$emit('masonry-images-loaded');
        // activate mansonry grid
        const masonry = new Masonry(this.selector, this.options);
        this.$emit('masonry-loaded', masonry);

        // const { mosaic, mosaicItems } = this.$refs;
        // const tl = new TimelineMax();
        // tl
        //   .to(mosaic, this.masonrySpeed, {
        //     autoAlpha: 1,
        //     delay: 1,
        //   })
        //   .staggerFromTo(mosaicItems, 1, { y: 100 }, { y: 0 }, 0.1);
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
  // visibility: hidden;
  // opacity: 0;
  .grid-sizer,
  .masonry-item {
    width: 33.333%;
  }
  .masonry-item {
    // width: 33.333%;
    img {
      width: 100%;
      display: block;
      user-select: none;
    }
  }
}
</style>