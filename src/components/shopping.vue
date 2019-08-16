<template>
    <div class="shopping">
<shoppingtop></shoppingtop>
<shoppingbody></shoppingbody>
    </div>
</template>
<script>
import shoppingtop from"./shopping/shoppingtop";
import shoppingbody from"./shopping/shoppingbody";
export default {
    data(){
        return{

        }
    },
    components:{
        shoppingtop,
        shoppingbody,
    }
}
</script>
<style lang="scss" scoped>

</style>