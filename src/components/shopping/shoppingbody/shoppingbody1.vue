<template>
    <div class="shoppingbody1">
            <div>
                <img src="/static/img/11.jpg" alt="" class="imgx">
                <p>asdfasdfas</p>
                <p>123</p>
            </div>
            <div>
                <img src="/static/img/12.jpg" alt="" class="imgx">
                <p>asdfasdfas</p>
                <p>234</p>
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
.shoppingbody1 { 
    width: 100%;
    height: pxToVw(245);  
    border-bottom: 1px solid #999; 
    div:nth-child(1){
        width: 49%;
        height: 100%;
        text-align: center;
        float: left;
    }
    div:nth-child(2){
        width: 49%;
        height: 100%;
        text-align: center;
        float: right;
    }
  }
.imgx {
      width: pxToVw(185);
      height: pxToVw(185);
    }
</style>
