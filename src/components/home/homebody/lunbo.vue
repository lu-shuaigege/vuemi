<template>
    <div>
        <swiper :options="swiperOption">  
            <swiper-slide><router-link to="/xiangqing"><img src="/static/img/1.jpg" class="lunbo"></router-link> </swiper-slide>
            <swiper-slide><router-link to="/xiangqing1"><img src="/static/img/2.jpg" class="lunbo"></router-link></swiper-slide>
            <swiper-slide><img src="/static/img/3.jpg" class="lunbo"></swiper-slide>
            <swiper-slide><img src="/static/img/4.jpg" class="lunbo"></swiper-slide>
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
@import "../../../assets/sass/css";
.lunbo{
    width:100%;
    height:50vw;
}
</style>

