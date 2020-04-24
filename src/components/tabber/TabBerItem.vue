<template>
  <div class="tab-ber-item" @click="itemClick" >
    <div v-if="!activeFlag"><slot name="item-active-icon"></slot></div>
    <div v-else><slot name="item-deactive-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBerItem",
    props:{
      path:{
        type: String,
        required: true
      },
      activeColor:{
        type: String,
        default:"red"
      }
    },
    data(){
      return {

      }
    },
    computed:{
      activeFlag(){
        return this.path.indexOf(this.$route.path) == -1
      },
      activeStyle(){
        return this.activeFlag ? {}:{color:this.activeColor};
      }
    },
    methods:{
      itemClick(){
        //防止控制台报错
        if(this.$route.path !=this.path){
          this.$router.push(this.path)
        }else {
          return;
        }
      }
    }
  }
</script>

<style scoped>
  .tab-ber-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-ber-item img{
    width: 26px;
    margin-top: 3px;
  }
  .tab-ber-item div{
    font-size: 12px;
  }
</style>
