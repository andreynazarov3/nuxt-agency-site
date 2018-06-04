<template>
  <div class="progressive-image">
    <svg v-if="filterEnabled" xmlns="http://www.w3.org/2000/svg" version="1.1" class="filter hidden">
      <defs>
        <filter :id="filterId">
          <feGaussianBlur in="SourceGraphic" :stdDeviation="deviation" />
        </filter>
      </defs>
    </svg>
     <v-lazy-image
      :style="{filter: filterIdStyle}"
      :src="src"
      :srcset="srcsetArray"
      :src-placeholder="srcPlaceholder"
      :srcPlaceholderSet="srcPlaceholderSet"
      @load="animate"
    ></v-lazy-image>
  </div>
</template>
<script>
import VLazyImage from '~/components/v-lazy-image';
export default {
  components: {
    VLazyImage,
  },
  props: {
    filterId: String,
    src: String,
    srcset: Array,
    srcPlaceholder: String,
    blurLevel: {
      type: Number,
      default: 30,
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  data: () => ({ rate: 1, storage: null, filterEnabled: true }),
  computed: {
    srcPlaceholderSet() {
      return this.srcset ? this.srcset.map(item => item.fields.base64) : null;
    },
    srcsetArray() {
      return this.srcset
        ? this.srcset.map(item => (item.fields.urlRetina ? item.fields.urlRetina : item.fields.url))
        : null;
    },
    filterIdStyle() {
      return `url(#${this.filterId})`;
    },
    deviation() {
      return this.blurLevel * this.rate;
    },
  },
  methods: {
    logCache(source) {
      if (this.storage.cachedElements.indexOf(source, 0) < 0) {
        if (this.storage.cachedElements != '') this.storage.cachedElements += ';';
        this.storage.cachedElements += source;
      }
    },
    cached(source) {
      return this.storage.cachedElements.indexOf(source, 0) >= 0;
    },
    animate(payload) {
      
      if (this.cached(payload)) {
        this.filterEnabled = false;
      } else {
        this.filterEnabled = true;
      }
      this.logCache(payload);

      const start = Date.now() + this.duration;
      const step = () => {
        const remaining = start - Date.now();
        if (remaining < 0) {
          this.rate = 0;
        } else {
          this.rate = remaining / this.duration;
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
      
    },
  },
  mounted: function() {
    this.storage = window.localStorage;
    if (!this.storage.cachedElements) {
      this.storage.cachedElements = '';
    }
  },
};
</script>

<style scoped>
.progressive-image {
  overflow: hidden;
}
.filter {
  display: none;
}
.v-lazy-image {
  width: 100%;
}
</style>