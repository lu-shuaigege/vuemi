<template>
  <div id="app">
<navigation></navigation>
<router-view></router-view>
  </div>
</template>

<script>
import navigation from "./components/navigation";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    navigation
  }
};
</script>

<style lang="scss">
@import "./assets/sass/css";
#app {
    // width: pxToVw(375);
  width: 100%;
  height: 100%;
  background: rgb(242,242,242);
  position: relative;
}
</style>
