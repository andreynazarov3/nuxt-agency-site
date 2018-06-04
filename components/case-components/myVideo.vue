<template>
    <div class="myVideo">
        <video :src="data.src" controls muted></video>
    </div>
</template>
<script>
export default {
  props: ['data'],
};
</script>
<style lang="scss">
@import '~/assets/scss/_vars.scss';
.myVideo {
  margin: 78px auto 0 auto;
  position: relative;
  padding: 43.25% 0 0 0;
  max-width:1565px;
  width: 100%;
  video {
    @extend %overlayPosition;
  }
}
</style>