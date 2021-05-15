<template>
  <div>
    <upload @upload-complete="uploadComplete"/>
    <div class="all-draws">
      <div v-for="draw of allDraws" :key="draw._id" class="draw-container">
        <i class="delete-button fas fa-times" @click="deleteDraw(draw)" aria-hidden="true"></i>
        <img :src="draw.url" alt="">
        <div class="inputs-container">
          <div class="input-container">
            <label>Nom</label>
            <input type="text" v-model="draw.name" @input="updateDraw(draw)">
          </div>
          <div class="input-container">
            <label>Date</label>
            <input type="date" v-model="draw.date" @input="updateDraw(draw)">
          </div>
          <div class="input-container">
            <label>Catégorie</label>
            <input type="text" v-model="draw.category" @input="updateDraw(draw)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import router from '../router'
import auth from '../models/Auth'
import Draw from '../models/Draw'
import Upload from '../components/Upload.vue'
export default {
  components: { Upload },
  setup() {
    onMounted(async () => {
      if(!localStorage.getItem('token')){
        router.push({name: 'login'})
      }
      if(!(await auth.isAuthenticated())) {
        router.push({name: 'login'})
      }
    })
    const allDraws = ref([])
    onMounted(async() => {
      allDraws.value = await Draw.all(null, 200)
    })
    return {
      allDraws,
      async uploadComplete() {
        allDraws.value = await Draw.all(null, 200)
      },
      async updateDraw(draw) {
        await draw.save()
        allDraws.value = await Draw.all(null, 200)
      },
      async deleteDraw(draw) {
        await draw.delete()
        allDraws.value = await Draw.all(null, 200)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.draw-container {
  display: flex;
  align-items: center;
  height: 100px;
  margin-bottom: 10px;
  img {
    height: 100%;
    width: 100px;
    object-fit: contain;
  }
  .delete-button {
    margin: 0 20px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
    border-radius: 50%;
    cursor: pointer;
    flex-shrink: 0;
    &:hover {
      background-color: rgba(0,0,0,0.5);
      color: white;
    }
  }
  .inputs-container {
    margin-left: 20px;
    .input-container {
      margin-bottom: 5px;
      label  {
        display: inline-block;
        width: 100px;
      }
    }
  }
}



</style>