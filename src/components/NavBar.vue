<template>
        <div id="nav-bar"
        :style="{filter: `drop-shadow(0 0 0.75rem ${color})`}"
        ></div>
</template>

<script>
export default {
    props: {
    color: {default: 'crimson'}
  }
};
</script>

<style lang="scss" scoped>
  #nav-bar{
    display: flex;
    flex-direction: column;
    font-family: "PoiretOne-Regular",serif;
    color: white;
    justify-content: center;
    align-items: center;    
    background-color: #ffffff;
    position: absolute;
    text-align: center;
    height: 495px;
    width: 20px;
    left: 1393px;
    top: 170px;
    border-radius: 30px;
  }
</style>