<template>
    <div class="sousuo">
        <div class="sousuo1">
            
                <span @click="fn">《</span>
           
            
            <span>待开发</span>
        </div>
        <div class="mykaifa3">
          <p>搜索</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    fn() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/css";
.sousuo {
  width: 100%;
  height: 100%;
  background: #999;
  position: fixed;
  z-index: 6666666666;
  .sousuo1 {
    width: 100%;
    height: 20vw;
    background: #666;
    a {
      text-decoration: none;
      color: black;
    }
  }
  .mykaifa3 {
    width: 100%;
    height: 100%;
    p {
      width: 100%;
    }
  }
}
</style>