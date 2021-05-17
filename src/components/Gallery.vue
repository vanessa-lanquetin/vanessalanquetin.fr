<template>
  <teleport to="body" v-if="imgs?.length">
    <div class="popup">
      <div class="popup-content">
        <div class="close">
          <i class="fas fa-times" @click="close()" aria-hidden="true"></i>
        </div>
        <div class="left">
          <i class="fas fa-chevron-left" id="left-arrow" @click="previous()" aria-hidden="true"></i>
        </div>
        <div class="right">
          <i class="fas fa-chevron-right" id="right-arrow" @click="next()" aria-hidden="true"></i>
        </div>
        <img :src="imgs[currentIndex]?.originalUrl + 'width=1920'" alt="">
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    imgs: {default: null},
    currentIndex: {default: 0}
  },
  setup(props, comp) {
    return {
      close() {
        comp.emit('close')
      },
      previous() {
        const currentIndex = props.currentIndex === 0
          ? props.imgs.length - 1
          : props.currentIndex - 1
        comp.emit('update:currentIndex', currentIndex)
      },
      next() {
        const currentIndex = props.currentIndex === props.imgs.length - 1
          ? 0
          : props.currentIndex + 1
        comp.emit('update:currentIndex', currentIndex)
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  .popup-content{
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.8);
    position: relative;
    .left, .right, .close, .img-number {
      position: absolute;
    }
    .left {
      left: 20px;
    }
    .right {
      right: 20px;
    }
    .close {
      top: 10px;
      right: 10px;
      color: white;
      font-size: 20px;
    }
  }    
    #left-arrow,#right-arrow{
      color: white;
      font-size: 30px;      
  }
  img{
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>