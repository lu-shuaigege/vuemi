<template>
    <div class="home">
<topa></topa>
<homebody></homebody>
    </div>
</template>
<script>
import topa from "./home/topa";
import homebody from "./home/homebody";
export default {
  data() {
    return {};
  },
  components: {
    topa,
    homebody
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/css"
</style>

