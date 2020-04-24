<template>
  <div id="tab-ber">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBer"
  }
</script>

<style scoped>
  #tab-ber{
    display: flex;
    background-color: aliceblue;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 2px rgba(100,100,100, 0.08);
  }

</style>
