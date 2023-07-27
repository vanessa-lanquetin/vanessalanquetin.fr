<template>
  <div class="root-carousel">
    <div class="carousel-content" ref="scrollerRef">
      <img v-for="(image, i) in images" :key="image"
        :src="image"
        class="image"
        :class="{active: index === i}"
        ref="imagesRef"
        @click.stop="fullscreen(i)"
      />
    </div>
    <template v-if="images?.length > 1">
      <button @click.stop="previous" class="action previous">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button @click.stop="next" class="action next">
        <i class="fas fa-chevron-right"></i>
      </button>
    </template>
    <div class="root-fullscreen"
      v-if="selectedImageIndex != null"
      @click.stop="selectedImageIndex = null"
    >
      <img :src="images[selectedImageIndex]" class="image-fullscreen"/>
      <Carrousel
        :images="images"
        :noFullScreen="true"
        :default-index="selectedImageIndex"
        @clickImage="fullscreen($event)"
      />
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const emit = defineEmits([
  'clickImage'
])
const props = defineProps({
  images: {
    /** @type {string[]} */
    default: [],
  },
  noFullScreen: {
    default: false
  },
  defaultIndex: {
    default: 0
  }
})

const index = ref(props.defaultIndex)
const next = () => {
  const currentImage = imagesRef.value[index.value]
  scrollerRef.value.scrollLeft += currentImage.offsetWidth
  index.value += 1
  if(index.value > imagesRef.value.length - 1) {
    index.value = 0
    scrollerRef.value.scrollLeft = 0
  }
  emit('clickImage', index.value)
}
const previous = () => {
  const currentImage = imagesRef.value[index.value]
  scrollerRef.value.scrollLeft -= currentImage.offsetWidth
  index.value -= 1
  if(index.value < 0) {
    index.value = imagesRef.value.length - 1
    scrollerRef.value.scrollLeft = scrollerRef.value.offsetWidth
  }
  emit('clickImage', index.value)
}
const imagesRef = ref()
const scrollerRef = ref()

const selectedImageIndex = ref()
const fullscreen = (i) => {
  index.value = i
  emit('clickImage', i)
  if(!props.noFullScreen) {
    selectedImageIndex.value = i
  }
}
</script>

<style scoped lang="scss">
.root-carousel {
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  background-color: #555;
  width: 100%;
  margin: auto;
  button.action {
    position: absolute;
    z-index: 1;
    background-color: red;
    width: 50px;
    height: 50px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
    &.previous {
      left: 0;
    }
    &.next {
      right: 0;
    }
  }
  .carousel-content {
    max-width: calc(100% - 5px);
    width: max-content;
    margin: auto;
    overflow: auto;
    display: flex;
    gap: 20px;
    height: 300px;
    scroll-behavior: smooth;
    .image {
      transition: 300ms;
      &.active {
        border: 8px solid red;
      }
    }
  }
}
.root-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image-fullscreen {
    flex-grow: 1;
    padding: 20px;
    margin: auto;
    width: calc(100vw - 40px);
    height: calc(100vh - 340px);
    object-fit: contain;
  }
}
</style>
