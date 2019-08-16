<template>
    <div class="div11">
        <swiper :options="swiperOption">  
            <swiper-slide><img src="/static/img/4.jpg" class="lunbo"></swiper-slide>
            <swiper-slide><img src="/static/img/91.jpg" class="lunbo"></swiper-slide>
            <swiper-slide><img src="/static/img/92.jpg" class="lunbo"></swiper-slide>
            <swiper-slide><img src="/static/img/93.jpg" class="lunbo"></swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000 //自动切换的时间间隔，单位ms
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/css";
.div11{
  width:100%;
    height:50vw;
  .lunbo{
    width:100%;
    height:50vw;
}
}

</style>

