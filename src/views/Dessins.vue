<template>
  <gallery :imgs="imgsForGallery" v-model:currentIndex="imgsForGalleryCurrentIndex" @close="close()"></gallery>
  <section>
    <section class="container-topics">
        <div class="items-topics">
          <div class="topic">Collections</div>
          <div class="topic">Personnages</div>
          <div class="topic">Animaux</div>
          <div class="topic">Nourritures</div>
        </div>
    </section>
    <section class="container-timeline">
      <h2>Timeline</h2>
      <div class="items-timeline">
        <div class="timeline" v-for="group of groupByYear" :key="group.label">{{group.label}}</div>
      </div>
    </section>   
      <!-- <div>Toutes mes dessins</div> -->
      <gallery-preview :imgArray="allImg" @click-img="displayGallery(allImg, $event)"></gallery-preview>
    </section>
    <!--  <section>
    <h2>Mes images par Categories</h2>
    <div  v-for="(group) in groupByCategory" :key="group.label">
      <h3>{{group.label === 'undefined' ? 'Non catégorisées': group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section>
  <section>
    <h2>Mes images par Sous-Categories</h2>
    <div  v-for="(group) in groupBySubCategory" :key="group.label">
      <h3>{{group.label === 'undefined' ? 'Non sous-catégorisées': group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section>
  <section>
    <h2>Mes images par Années</h2>
    <div  v-for="(group) in groupByYear" :key="group.label">
      <h3>{{group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section>
  <section>
    <h2>Mes images par mois</h2>
    <div  v-for="(group) in groupByMonth" :key="group.label">
      <h3>{{group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section>
  <section>
    <h2>Mes images par jours</h2>
    <div  v-for="(group) in groupByDay" :key="group.label">
      <h3>{{group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section> -->
</template>

<script>
import { ref } from '@vue/reactivity'
import GalleryPreview from '../components/GalleryPreview.vue'
import { onMounted } from '@vue/runtime-core'
import Draw from '../models/Draw'
import Gallery from '../components/Gallery.vue'
export default {
  components: { GalleryPreview, Gallery},
  setup() {

    const imgsForGallery = ref([])
    const imgsForGalleryCurrentIndex = ref(0)
    const allImg = ref([])
    const groupByYear = ref({})
    const groupByMonth = ref({})
    const groupByDay = ref({})
    const groupByCategory = ref({})
    const groupBySubCategory = ref({})

    onMounted(async () => {
      allImg.value = await Draw.all(500)
      groupByYear.value = await Draw.allByYear(500)
      groupByMonth.value = await Draw.allByMonth(500)
      groupByDay.value = await Draw.allByDay(500)
      groupByCategory.value = await Draw.allByCategory(500)
      groupBySubCategory.value = await Draw.allBySubCategory(500)
    })
    return {
      imgsForGallery,
      imgsForGalleryCurrentIndex,
      allImg, 
      groupByYear, 
      groupByMonth, 
      groupByDay, 
      groupByCategory, 
      groupBySubCategory,

      displayGallery(imgs, img) {
        imgsForGallery.value = imgs
        imgsForGalleryCurrentIndex.value = imgs.findIndex(_img => _img._id === img._id)
      },
      close() {
        imgsForGallery.value = []
        imgsForGalleryCurrentIndex.value = 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
  h2{
    color:#BFB4B4;
    text-decoration: underline;
    font-size: 36px;
    font-weight: normal;
    width: max-content;
    margin:20px auto;
  }
  .container-topics, .container-timeline{
    margin-top: 30px; 
  }
  .items-topics{
    display: flex;
    justify-content: center;
    color: #BFB4B4;
    width: 80%;
    font-size: 30px;
    margin:35px auto;
    flex-wrap: wrap;
  }
  .topic, .timeline{
    margin: 20px 20px;
    padding: 10px 50px;
    border: 1px solid #C4C4C4;
    box-shadow: 0 8px 10px 0 #e4e4e4;

  }
  .container-timeline {
    h2 {
      margin-bottom: 0;
    }
    .items-timeline{
      display: flex;
      justify-content: center;
      color: #BFB4B4;
      width: 80%;
      font-size: 30px;
      margin:20px auto;
      margin-top: 0;
      position: relative;
    }
  }

</style>