<template>
  <div class="progressive-image">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="filter hidden">
      <defs>
        <filter :id="filterId">
          <feGaussianBlur in="SourceGraphic" :stdDeviation="deviation" />
        </filter>
      </defs>
    </svg>
     <v-lazy-image
      :style="{filter: filterIdStyle}"
      :src="src"
      :src-placeholder="srcPlaceholder"
      @load="animate"
    ></v-lazy-image>
  </div>
</template>
<script>
import VLazyImage from "~/components/v-lazy-image";
export default {
  components: {
    VLazyImage
  },
  props: {
    filterId: String,
    src: String,
    srcPlaceholder: String,
    blurLevel: {
      type: Number,
      default: 30
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data: () => ({ rate: 1 }),
  computed: {
    filterIdStyle(){
      return `url(#${this.filterId})`
    },
    deviation() {
      return this.blurLevel * this.rate;
    }
  },
  methods: {
    animate() {
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
    }
  }
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