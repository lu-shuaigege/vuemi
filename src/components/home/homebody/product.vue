<template>
    <div class="product">
        <div class="product1">
            <img src="/static/img/55.jpg" alt="">
        </div>
        <div class="product2">
            <div>
              <img src="/static/img/55.jpg" alt="">  
            </div>
            <div>
              <img src="/static/img/55.jpg" alt="">  
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/css";
.product {
  width: 100%;
  height: 70vw;
  background: white;
  .product1 {
    width: 49%;
    height: 100%;
    // display: inline-block;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product2 {
    width: 49%;
    height: 100%;
    // display: inline-block;
    float: right;
    div {
      width: 100%;
      height: 50%;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

