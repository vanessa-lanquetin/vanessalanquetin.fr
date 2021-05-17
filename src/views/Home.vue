<template>
  <div>
    <div class="row">
      <presentation class="presentation"/>
      <last-posts class="last-posts"/>
    </div>
    <gallery-preview id="gallery-Draw"/>
  </div>
</template>

<script>
import GalleryPreview from "@/components/GalleryPreview.vue"
import LastPosts from "@/components/LastPosts.vue"
import Presentation from "@/components/Presentation.vue"
export default {
  components: {
    GalleryPreview,
    LastPosts,
    Presentation,
  },
  setup() {
    return {      
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
  max-width: 1000px;
}
.last-posts {
  flex-grow: 1;
  margin-left: 10px;
  position: relative;
  min-width: 500px;
  max-width: 600px;
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
  margin-top: 50px;
  position: relative;
  &::after {
    content: "";
    border-top: 5px solid #F2ECD8;
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    transform: translateX(-50%) translateY(-20px);
    margin-left: 50%;
  }
}

</style>