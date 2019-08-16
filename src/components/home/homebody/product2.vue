<template>
    <div class="product">
        <div class="product1">
            <img src="/static/img/55.jpg" alt="">
            <p>红米5</p>
            <p>749起</p>
        </div>
        <div class="product2">
            <img src="/static/img/55.jpg" alt="">
            <p>红米5</p>
            <p>749起</p>
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
      height: 70%;
    }
  }
  .product2 {
    width: 49%;
    height: 100%;
    // display: inline-block;
    float: right;
    img {
      width: 100%;
      height: 70%;
    }
  }
}
</style>

