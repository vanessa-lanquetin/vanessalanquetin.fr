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
            <input type="date" :value="draw.date" @blur="updateDate(draw, $event.target.value)" @keypress.enter="updateDate(draw, $event.target.value)">
          </div>
          <div class="input-container">
            <label>Tags</label>
            <div class="tags">
              <div class="tag" v-for="(tag, i) of draw.tags" :key="'tag-' + i">
                <input type="text" v-model="draw.tags[i].label" @input="updateDraw(draw)">
                <i class="fas fa-times" aria-hidden="true" @click="deleteTag(draw, i)"></i>
                <div class="sub-tags">
                  <div class="sub-tag" v-for="(subTag, j) of tag.subTags" :key="'subtag-' + j">
                    <input type="text" v-model="tag.subTags[j]" @input="updateDraw(draw)">
                    <i class="fas fa-times" aria-hidden="true" @click="deleteSubTag(tag, j, draw)"></i>
                  </div>
                  <button class="add" @click="addSubTag(tag, draw)">
                    <i class="fas fa-plus" aria-hidden="true"></i>Ajouter un sous tag
                  </button>
                </div>
              </div>
            </div>
            <button class="add" @click="addTag(draw)">
              <i class="fas fa-plus" aria-hidden="true"></i>Ajouter un tag
            </button>
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
      },
      updateDate(draw, date) {
        draw.date = date
        this.updateDraw(draw)
      },
      addTag(draw) {
        const tag = {label: '', subTags: []}
        if(draw.tags) {
          draw.tags.push(tag)
        } else {
          draw.tags = [tag]
        }
        this.updateDraw(draw)
      },
      addSubTag(tag, draw) {
        const subTag = ''
        if(tag.subTags) {
          tag.subTags.push(subTag)
        } else {
          tag.subTags = [subTag]
        }
        this.updateDraw(draw)
      },
      deleteTag(draw, i) {
        draw.tags.splice(i, 1)
        this.updateDraw(draw)
      }, 
      deleteSubTag(tag, i, draw) {
        tag.subTags.splice(i, 1)
        this.updateDraw(draw)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.draw-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top:20px ;
  width: max-content;
  margin: auto;
  border-bottom: 1px solid black;
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
    margin-left: 60px;
    margin-bottom:20px ;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    .input-container {
      margin-top: 20px;
      margin-bottom: 5px;
      label  {
        display: inline-block;
        width: 100px;
      }
      .tags {
        display: flex;
        flex-direction: column;
        .tag {
          .sub-tags {
            margin-left: 40px;
          }
        }
      }
    }
  }
}



</style>