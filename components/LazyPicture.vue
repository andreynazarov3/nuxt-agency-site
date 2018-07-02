<template>
  <div ref="picture-container" class="picture-container">
    <picture class="placeholder">
      <source 
        :key="source.sys.id"
        v-if="source.fields.media" 
        v-for="source in sources"
        :media="source.fields.media" 
        :srcset="source.fields.placeholder"
      >  
      <img         
        @load="onPlaceholderLoad"
        ref="placeholder"
        v-if="baseImage"
        :src="baseImage.fields.placeholder" 
        :alt="title"
      >
    </picture>
    <picture ref="picture" class="fullsize" v-if="intersected">
      <source 
        :key="source.sys.id"
        v-if="source.fields.media" 
        v-for="source in sources"
        :media="source.fields.media" 
        :srcset="source.fields.srcset"
      >  
      <img 
        @load="onImageLoad"
        ref="image"
        v-if="baseImage"
        :src="baseImage.fields.src" 
        :alt="title"
      >
    </picture>
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
const StackBlur = require("stackblur-canvas");
if (process.browser) {
  require("intersection-observer");
}
export default {
  props: {
    title: String,
    sources: Array,
  },
  data() {
    return {
      picture: null,
      observer: null,
      loaded: false,
      intersected: false,
      blurRadius: 30,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.5,
      },
    };
  },
  computed: {
    baseImage: function() {
      return this.sources.find(source => source.fields.src);
    },
  },
  methods: {   
    onImageLoad() {
      if (this.$refs.image) {
        this.loaded = true;
        new TweenMax(this.$refs.canvas, 1, {
          autoAlpha: 0,
        });
      }
    },
    onPlaceholderLoad() {
        this.observer = new IntersectionObserver(entries => {
        const image = entries[0];
        if (image.isIntersecting) {
          this.intersected = true;
          this.observer.disconnect();
          console.log("intersect");
        }
      }, this.intersectionOptions);
      this.observer.observe(this.$el);

      if (this.$refs.placeholder && !this.loaded) {
        StackBlur.image(this.$refs.placeholder, this.$refs.canvas, this.blurRadius, false);
        new TweenMax(this.$refs.canvas, 1, {
          autoAlpha: 1,
        });
      }
    },
  },
  destroyed() {
    this.observer.disconnect();
  }
};
</script>
<style scoped lang="scss">
.picture-container {
  position: relative;
}
canvas,
picture.fullsize {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
canvas {
  opacity: 0;
}
picture {
  display: block;
  width: 100%;
  &.placeholder {
    opacity: 0;
  }
}
img {
  display: block;
  width: 100%;
}
</style>
