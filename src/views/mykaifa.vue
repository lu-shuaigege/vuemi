<template>
    <div class="mykaifa">
        <div class="mykaifa2">
            <router-link to="/my">
                <span>《</span>
            </router-link>
            
            <span>待开发</span>
        </div>
        <div class="mykaifa3">
          <p>待开发待开发待开发待开发待开发待开发待开发待开发待开发待开发待开发待开发待开发待开发待开发待开发待开发待开发待开发</p>
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
@import "../assets/sass/css";
.mykaifa {
  width: 100%;
  height: 100%;
  background: #999;
  position: fixed;
  z-index: 6666666666;
  .mykaifa2{
      width: 100%;
      height:20vw;
      background: #666;
      a{
          text-decoration: none;
          color: black;
      }
  }
  .mykaifa3{
      width: 100%;
      height:100%;
      p{
          width: 100%;

      }
  }
}
</style>