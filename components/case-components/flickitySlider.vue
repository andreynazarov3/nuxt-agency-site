<template>
  <div ref="flickity" class="flickity-wrapper">
    <LazyPicture
      v-for="image in data.images"
      :key="image.sys.id"
      class="flickity-picture" 
      :title="image.fields.title"
      :sources="image.fields.sources"
    >
    </LazyPicture>
  </div>
</template>
<script>
import LazyPicture from '~/components/LazyPicture';
if (process.browser) {
  var Flickity = require('flickity');
  var ImagesLoaded = require('imagesloaded');
}
export default {
  components: {
    LazyPicture,
  },
  props: ['data'],
  data: function() {
    return { flkty: null };
  },
  methods: {
    resize: function() {
      this.flkty.resize();
    },
    init: function() {
      ImagesLoaded(this.$refs.flickity, () => {
        let self = this;
        this.flkty = new Flickity(this.$refs.flickity, {
          contain: true,
          groupCells: 1,
          freeScroll: true,
        });
      });
    },
  },
  watch: {
    props() {
      this.init();
    },
  },
  mounted: function() {
    this.init();
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.flickity-wrapper {
  width: 100%;
  max-width: 1565px;
  margin: 80px auto 0 auto;
  .flickity-picture {
    width: 50%;
    margin-right: 10px;
    @media #{$mobile} {
      width: 100%;
    }
  }
}

/*! Flickity v2.1.1
https://flickity.metafizzy.co
---------------------------------------------- */

.flickity-enabled {
  position: relative;
}

.flickity-enabled:focus {
  outline: none;
}

.flickity-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.flickity-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* draggable */

.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  // tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

/* ---- flickity-button ---- */

.flickity-button {
  position: absolute;
  background: hsla(0, 0%, 100%, 0.75);
  border: none;
  color: #333;
}

.flickity-button:hover {
  background: white;
  cursor: pointer;
}

.flickity-button:focus {
  outline: none;
  box-shadow: 0 0 0 5px #19f;
}

.flickity-button:active {
  opacity: 0.6;
}

.flickity-button:disabled {
  opacity: 0.3;
  cursor: auto;
  /* prevent disabled button from capturing pointer up event. #716 */
  pointer-events: none;
}

.flickity-button-icon {
  fill: #333;
}

/* ---- previous/next buttons ---- */

.flickity-prev-next-button {
  top: 50%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* vertically center */
  transform: translateY(-50%);
  @media #{$ipadLandscape} {
    width: 50px;
    height: 50px;
  }
}

.flickity-prev-next-button.previous {
  left: 15px;
  transform: translateX(-120%) translateY(-50%);
  @media screen and (max-width: 1780px) {
    transform: translateY(-50%);
  }
}
.flickity-prev-next-button.next {
  right: 15px;
  transform: translateX(120%) translateY(-50%);
  @media screen and (max-width: 1780px) {
    transform: translateY(-50%);
  }
}

.flickity-prev-next-button .flickity-button-icon {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}

/* ---- page dots ---- */

.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: -25px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
}

.flickity-rtl .flickity-page-dots {
  direction: rtl;
}

.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
  background: #333;
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}

.flickity-page-dots .dot.is-selected {
  opacity: 1;
}
</style>
