<template>
  <section>
    <h2>Toutes mes images</h2>
    <gallery-preview :imgArray="allImg"></gallery-preview>
  </section>
  <section>
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
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import GalleryPreview from '../components/GalleryPreview.vue'
import { onMounted } from '@vue/runtime-core'
import Draw from '../models/Draw'
import gridCell from '@/components/gridCell.vue'
export default {
  components: { GalleryPreview },gridCell,
  setup() {

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
      allImg, 
      groupByYear, 
      groupByMonth, 
      groupByDay, 
      groupByCategory, 
      groupBySubCategory,
    }
  }
}
</script>

<style scoped lang="scss">
section {
  margin-bottom: 200px;
}
</style>