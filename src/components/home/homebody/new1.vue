<template>
    <div class="new1">
     <swiper :options="swiperOption">  
            <swiper-slide><p>新闻1</p></swiper-slide>
            <swiper-slide><p>新闻2</p></swiper-slide>
            <swiper-slide><p>新闻3</p></swiper-slide>
            <swiper-slide><p>新闻4</p></swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2000 //自动切换的时间间隔，单位ms
        }
      }
    };
  },
  components: {}
};
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/css";
.new1{
  width: 100%;
  height: 10vw;
  background: white;
  margin: 2% 0px;
  p{
    line-height: 10vw;
    font-size: 3vw;
    padding: 0px 3%;
  }
}
</style>
