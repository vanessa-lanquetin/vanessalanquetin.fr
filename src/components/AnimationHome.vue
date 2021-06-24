<template>
  <div id="animation-home" @click="animate" @mousewheel="animate" ref="animationHome">
    <div class="layer">
      <div id="content" ref="content">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="description">
          <slot name="description"></slot>
        </div>
      </div>
    </div>
    <div class="layer">
      <div class="blocks open" ref="blocks">
        <div class="block block-left"></div>
        <div class="block block-right"> </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default {
  setup() {
    const blocks = ref(null) // C'est comme document.querySelctor mais en vue. Il faut ensuite retourner la variable du setup et mettre ref="blocks" sur l'element html que l'on veut cibler.
    const content = ref(null) // C'est comme document.querySelctor mais en vue. Il faut ensuite retourner la variable du setup et mettre ref="content" sur l'element html que l'on veut cibler.
    const animationHome = ref(null) // C'est comme document.querySelctor mais en vue. Il faut ensuite retourner la variable du setup et mettre ref="animationHome" sur l'element html que l'on veut cibler.
    const close = async() => {
      const blocksClassList = blocks.value.classList
      blocksClassList.remove('open')
      await wait(800)
    }
    const open = async () => {
      const blocksClassList = blocks.value.classList
      content.value.style.display = 'none'
      blocksClassList.add('open')
      await wait(800)
      animationHome.value.style.display = 'none'
    }
    const animate = async() => {
      await close()
      await open()
    }
    return {
      blocks,
      animationHome,
      content,
      animate
    }
  }
}
</script>

<style lang="scss" scoped>
#animation-home {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  .layer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  #content{
    width: 100%;
    font-size: 64px;
    display: flex;
    flex-direction: column;
    font-family: "PoiretOne-Regular",serif;
    color: white;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
    position: fixed;
    text-align: center;
    .description {
      font-size: 0.7em;
      margin-top: 30px;
    }
  }
  .blocks{
    .block {
      width: 100%;
      height: 100%;
      background-color: red;
      position: fixed;
      top: 0;
      transition: 800ms;
      &.block-left {
        left: 1px;
        transform-origin: center right;
        transform: translateX(-50%) rotate(25deg) scaleY(2) ;
      }
      &.block-right {
        right: -50%;
        transform-origin: center left;
        transform:  rotate(25deg) scaleY(2) ;
      }
    }
    
    &.open {
      .block {
        &.block-left{
          opacity: 0;
          transform: translateX(-150%) rotate(25deg) scaleY(2) ;
        }
        &.block-right {
          opacity: 0;
          transform: translateX(100%)  rotate(25deg) scaleY(2) ;
        }
      }
    }
  }
}
</style>