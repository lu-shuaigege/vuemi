<template>
    <div class="mybody4">
        <div class="mybody42">
          <router-link  to="/mykaifa">
          <p>
            <i class="iconfont icon-truck huoche"></i>
              <span>会员中心</span>
          </p>
              
            </router-link>
        </div>
        <div class="mybody43">
            <router-link  to="/mykaifa">
            <p>
              <i class="iconfont icon-truck huoche"></i>
              <span>我的优惠</span>
            </p>
              
            </router-link>
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
.mybody4 {
  width: 100%;
  height: 25vw;
  background: white;
  margin: 1% 0px;
  .mybody42 {
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #999;
    padding: 0px 5%;
    box-sizing: border-box;
    a {
      text-decoration: none;
      color: black;
      p{
        line-height: 12vw;
        .huoche{
          font-size: 6vw;
        }
      }
    }
  }
  .mybody43 {
    width: 100%;
    height: 50%;
    padding: 0px 5%;
    box-sizing: border-box;
    a {
      text-decoration: none;
      color: black;
      p{
        line-height: 12vw;
        .huoche{
          font-size: 6vw;
        }
      }
    }
  }
}
</style>