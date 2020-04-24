<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive>

     <tab-ber>
      <tab-ber-item path="/home" activeColor="red">
          <img slot="item-deactive-icon" src="./assets/imgs/pkq_deactive.jpg" alt="">
          <img slot="item-active-icon" src="./assets/imgs/pkq_active.jpg" alt="">
          <div slot="item-text">首页</div>
        </tab-ber-item>

      <tab-ber-item path="/car">
        <img slot="item-deactive-icon" src="./assets/imgs/pkq_deactive.jpg" alt="">
        <img slot="item-active-icon" src="./assets/imgs/pkq_active.jpg" alt="">
        <div  slot="item-text">购物车</div>
      </tab-ber-item>

      <tab-ber-item  path="/cate">
        <img slot="item-deactive-icon" src="./assets/imgs/pkq_deactive.jpg" alt="">
        <img slot="item-active-icon" src="./assets/imgs/pkq_active.jpg" alt="">
        <div  slot="item-text">分类</div>
      </tab-ber-item>

      <tab-ber-item path="/profile">
        <img slot="item-deactive-icon" src="./assets/imgs/pkq_deactive.jpg" alt="">
        <img slot="item-active-icon" src="./assets/imgs/pkq_active.jpg" alt="">
        <div  slot="item-text">个人</div>
      </tab-ber-item>

    </tab-ber>

  </div>
</template>

<script>
  import TabBer from "./components/tabber/TabBer"
  import TabBerItem from "./components/tabber/TabBerItem"

  export default {
    name: 'App',
    components:{
      TabBer,
      TabBerItem
    },
    computed:{

    },



}
</script>

<style>
  @import url("./assets/css/base.css");

</style>
