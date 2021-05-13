<template>
  <div>
    <div class="row">
      <presentation class="presentation"/>
      <last-posts class="last-posts"/>
    </div>
    <div v-for="i in nbDraws" :key="i">
      <gallery-preview/>
    </div>
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
    const nbDraws = 5
    return {
      nbDraws
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-around;
}
.presentation {
  width: 60%;
}
.last-posts {
  width: 20%;
}
</style>