<template>
  <section>
    <h2>Toutes mes images</h2>
    <gallery-preview :imgArray="hrefImg"></gallery-preview>
  </section>
  <section>
    <h2>Mes images par Categories</h2>
    <div  v-for="(group) in groupByCategory" :key="group.label">
      <h3>{{group.label === 'undefined' ? 'Non catégorisées': group.label}}</h3>
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
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import GalleryPreview from '../components/GalleryPreview.vue'
import { onMounted } from '@vue/runtime-core'
import Draw from '../models/Draw'
export default {
  components: { GalleryPreview },
  setup() {

    const hrefImg = ref([])
    const groupByYear = ref({})
    const groupByMonth = ref({})
    const groupByDay = ref({})
    const groupByCategory = ref({})

    onMounted(async () => {
      hrefImg.value = await Draw.all(200)
      groupByYear.value = await Draw.allByYear(200)
      groupByMonth.value = await Draw.allByMonth(200)
      groupByDay.value = await Draw.allByDay(200)
      groupByCategory.value = await Draw.allByCategory(200)
    })
    return {
      hrefImg, 
      groupByYear, 
      groupByMonth, 
      groupByDay, 
      groupByCategory, 
    }
  }
}
</script>

<style scoped lang="scss">
section {
  margin-bottom: 200px;
}
</style>