const VLazyImageComponent = {
  props: {
    src: {
      type: String,
      required: true
    },
    srcPlaceholder: {
      type: String,
      default: ""
    },
    srcset: {
      type: Array
    },
    srcPlaceholderSet: {
      type: Array
    },
    intersectionOptions: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    observer: null,
    intersected: false,
    loaded: false

  }),
  computed: {
    srcImage() {
      return this.intersected ? this.src : this.srcPlaceholder;
    },
    srcsetImage() {
      if (this.intersected && this.srcset) {
        return this.srcset;
      } else if (this.intersected && !this.srcset) {
        return [null];
      } else {
        if (this.srcPlaceholderSet) {
          return this.srcPlaceholderSet
        } else {
          return [this.srcPlaceholder]
        }
      }
    },
  },
  render(h) {
    if (this.srcset) {
      return h("picture", {
        class: {
          "v-lazy-image": true,
          "v-lazy-image-loaded": this.loaded
        }
      }, [
        h('source', {
          attrs: {
            media: "(max-width: 480px)",
            srcset: this.srcsetImage[2]
          }
        }),
        h('source', {
          attrs: {
            media: "(max-width: 1024px)",
            srcset: this.srcsetImage[1]
          }
        }),
        h('source', {
          attrs: {
            media: "(min-width: 1025px)",
            srcset: this.srcsetImage[0]
          }
        }),
        h('img', {
          attrs: {
            src: this.srcImage,
          },
          ref: 'image'
        })
      ]);
    } else {
      return h("img", {
        attrs: {
          src: this.srcImage,
          srcset: this.srcsetImage[0]
        },
        class: {
          "v-lazy-image": true,
          "v-lazy-image-loaded": this.loaded
        },
        ref: 'image'
      });
    }
  },
  methods: {
    onImageLoad() {
      if (this.$refs.image.getAttribute('src') === this.src) {
        this.loaded = true;
        this.$emit("load", this.$refs.image.currentSrc);
      }
    },
  },
  mounted() {
    this.$refs.image.addEventListener("load", this.onImageLoad);
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0];
      if (image.isIntersecting) {
        this.intersected = true;
        this.observer.disconnect();
        this.$emit("intersect");
      }
    }, this.intersectionOptions);

    this.observer.observe(this.$el);
  },
  beforeDestroy() {
    this.$refs.image.removeEventListener("load", this.onImageLoad);
  },
  destroyed() {
    this.observer.disconnect();
  }
};

export default VLazyImageComponent;

export const VLazyImagePlugin = {
  install: (Vue, opts) => {
    Vue.component("VLazyImage", VLazyImageComponent);
  }
};
