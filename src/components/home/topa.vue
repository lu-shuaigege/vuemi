<template>
    <div class="topa">
<i class="iconfont icon-xiaomi milogo" ></i>
<div class="topa-in">
  <router-link to="/sousuo">
    <input type="text" placeholder="请输入你想搜索的商品" class="in">
  </router-link>
</div>

<router-link to="/my">
<i class="iconfont icon-weixiao xiao"></i>
</router-link>

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
@import "../../assets/sass/css";

.topa {
  background: rgb(242,242,242);
  width: 100%;
  height: 48px;
  text-align: center;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 66666;
}
.topa-in{
    display: inline-block;
      width: 60%;
  height: 100%;
  line-height: 45px;
}
.milogo {
  font-size: 2rem;
  color: rgb(255, 107, 0);
  line-height: 48px;
  float: left;
  margin-left: 5%;
}
.xiao {
  font-size: 2rem;
  line-height: 40px;
  float: right;
  margin-right: 5%;
  color: #999;
}
.in {
  width: 100%;
  height: 70%;
  outline: none;
  border: 0px;
  border-radius: 5px;
  line-height: 48px;
}
</style>

