<template>
  <div id="animation-home" ref="animationHome">
    <div><slot/></div>
    <div class="layer no-event">
      <div class="blocks open" ref="blocks">
        <div class="block block-left"></div>
        <div class="block block-right"> </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import AnimationHomeTrigger from './AnimationHomeTrigger'
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default {
  setup() {
    const blocks = ref(null) // C'est comme document.querySelctor mais en vue. Il faut ensuite retourner la variable du setup et mettre ref="blocks" sur l'element html que l'on veut cibler.
    const animationHome = ref(null) // C'est comme document.querySelctor mais en vue. Il faut ensuite retourner la variable du setup et mettre ref="animationHome" sur l'element html que l'on veut cibler.
    const close = async(color) => {
      const blocksClassList = blocks.value.classList
      blocks.value.children.forEach((child) => child.style.backgroundColor = color ||'#fbf980')
      blocksClassList.remove('open')
      await wait(800)
    }
    const open = async (color) => {
      const blocksClassList = blocks.value.classList
      blocks.value.children.forEach((child) => child.style.backgroundColor = color ||'#fbf980')
      blocksClassList.add('open')
      await wait(800)
    }
    const animate = async(color, callback) => {
      await close(color)
      callback()
      await open(color)
    }
    AnimationHomeTrigger.register(animate)
    return {
      blocks,
      animationHome,
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
    &.no-event {
      pointer-events: none;
    }
  }

  .blocks{
    .block {
      width: 100%;
      height: 100%;
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