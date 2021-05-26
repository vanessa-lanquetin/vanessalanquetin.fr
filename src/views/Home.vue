<template>
  <div>
    <div class="row">
      <presentation class="presentation"/>
      <last-posts class="last-posts"/>
    </div>
    <gallery-preview id="gallery-Draw" :imgArray="allImg" :greyscale="true"></gallery-preview>
  </div>
</template>

<script>
import GalleryPreview from "@/components/GalleryPreview.vue"
import LastPosts from "@/components/LastPosts.vue"
import Presentation from "@/components/Presentation.vue"
import { onMounted, ref } from '@vue/runtime-core'
import Draw from '../models/Draw'

export default {
  components: {
    GalleryPreview,
    LastPosts,
    Presentation,
  },
  setup() {
    const allImg = ref([])
    onMounted(async() => {
      allImg.value = await Draw.all(600)
    })
    return {      
      allImg
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: auto;
}
.presentation {
  flex-grow: 2;
  margin-right: 40px;
  text-align: justify;
  max-width: 800px;
}
.last-posts {
  flex-grow: 1;
  margin-left: 10px;
  position: relative;
  min-width: 400px;
  max-width: 400px;
  flex-shrink: 0;
  &::after {
    content: "";
    border-left: 5px solid #F2ECD8;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(-30px);
  }
}
#gallery-Draw{
  width:90%;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 50px;
  position: relative;
  
  &::after {
    content: "";
    border-top: 5px solid #F2ECD8;
    position: absolute;
    top: 0;
    left: 0;
    width: 98%;
    transform: translateX(-50%) translateY(-30px);
    margin-left: 50%;
  }
}
@media screen and (max-width: 1400px) {
  body{
    margin-right: 10px;
  }
  .row{
    flex-direction: column;
    flex-wrap: wrap;
  }

  .last-posts{
    margin-top: 40px;
    &::after {
      position: fixed;
      top: 0;
      left: 0;
      flex-direction: column;
      height: 100vh;
      border-right: 1px solid #f8edc9;
      box-shadow: 0 0 10px 0 #e4e4e4;
      background-color: #fff;
      justify-content: flex-start;
      width: 0;
      transition: 300ms;
      overflow: hidden;
      }
  }
  #containt-presentation{
    padding-bottom: 0;
  }
} 

@media screen and (max-width: 1111px){
  #gallery-Draw{
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;

      }
} 
</style>