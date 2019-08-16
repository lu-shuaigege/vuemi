<template>
    <div class="mybody2">
        <div class="mybody3">
          <router-link to="/mykaifa">
          <p>我的订单     全部订单》</p>
          </router-link>
        </div>
        <div class="mybody4">
          <div>
            <router-link  to="/mykaifa">
              <p><i class="iconfont icon-truck huoche"></i></p>
              <p>待付款</p>
            </router-link>
          </div>
          <div>
            <router-link  to="/mykaifa">
              <p><i class="iconfont icon-truck huoche"></i></p>
              <p>待收货</p>
            </router-link>
          </div>
          <div>
            <router-link  to="/mykaifa">
              <p><i class="iconfont icon-truck huoche"></i></p>
              <p>退换修</p>
            </router-link>
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
.mybody2 {
  width: 100%;
  height: 38vw;
  background: white;
  .mybody3 {
    width: 100%;
    height: 30%;
    border-bottom: 1px solid #999;
    padding: 0px 5%;
    box-sizing: border-box;
    a {
      text-decoration: none;
      color: black;
      line-height: 10vw;
    }
  }
  .mybody4 {
    width: 100%;
    height: 70%;
    div {
      display: inline-block;
      width: 32%;
      height: 100%;
      text-align: center;
      
      a{
        text-decoration: none;
        color: black;
        p:nth-child(1){
          margin-top: 5vw;
        }
        .huoche{
          font-size: 6vw; 
        }
      }
    }
  }
}
</style>