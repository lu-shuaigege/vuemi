<template>
    <div class="homebody">
      <lunbo></lunbo>  
      <homeclass></homeclass>
      <new1></new1>
      <product></product>
      <product2></product2>
      <di></di>
    </div>
</template>
<script>
import lunbo from"./homebody/lunbo";
import homeclass from"./homebody/homeclass";
import new1 from"./homebody/new1";
import product from"./homebody/product";
import product2 from"./homebody/product2";
import di from"./homebody/di";
export default {
  data() {
    return {
      
    };
  },
  components: {
    lunbo,
    homeclass,
    new1,
    product,
    product2,
    di,
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/css";
.homebody {
  overflow: auto;
  margin-top:48px; 
}
</style>

