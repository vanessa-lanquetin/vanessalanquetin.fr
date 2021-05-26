<template>
  <gallery :imgs="imgsForGallery" v-model:currentIndex="imgsForGalleryCurrentIndex" @close="close()"></gallery>
  <section class="container-topics">
    <div class="items-topics">
      <div class="topic" @click="updateFilter('all')" :class="{active: filterTag === 'all'}">Tout</div>
      <div class="topic" v-for="tag of tags" :key="tag" @click="updateFilter(tag)" :class="{active: filterTag === tag}">{{tag}}</div>
    </div>
    <div class="items-topics" v-if="subTags.length>1">
      <div class="topic" @click="filterSubTag = 'all'" :class="{active: filterSubTag === 'all'}">Tout</div>
      <div class="topic" v-for="subTag of subTags" :key="subTag" @click="filterSubTag = subTag" :class="{active: filterSubTag === subTag}">{{subTag}}</div>
    </div>
  </section>
  <section>
    <gallery-preview :imgArray="imgsFiltered" @click-img="displayGallery(imgsFiltered, $event)"></gallery-preview>
  </section>
 <!--   <section class="container-timeline">
    <h2>Timeline</h2>
    <div class="items-timeline">
      <div class="timeline" v-for="group of groupByYear" :key="group.label">{{group.label}}</div>
    </div>
  </section>   
  <section>
    <div  v-for="(group) in groupByCategory" :key="group.label">
      <h3>{{group.label === 'undefined' ? 'Non catégorisées': group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section>
  <section>
    <div  v-for="(group) in groupBySubCategory" :key="group.label">
      <h3>{{group.label === 'undefined' ? 'Non sous-catégorisées': group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section>
    <section>
    <div  v-for="(group) in groupBySubCollections" :key="group.label">
      <h3>{{group.label === 'undefined' ? 'Non collections': group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section>
  <section>
    <div  v-for="(group) in groupByYear" :key="group.label">
      <h3>{{group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section>
  <section>
    <div  v-for="(group) in groupByMonth" :key="group.label">
      <h3>{{group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section>
  <section>
    <div  v-for="(group) in groupByDay" :key="group.label">
      <h3>{{group.label}}</h3>
      <gallery-preview :imgArray="group.imgs"></gallery-preview>
    </div>
  </section> -->
</template>

<script>
import { computed, ref } from 'vue'
import GalleryPreview from '../components/GalleryPreview.vue'
import Draw from '../models/Draw'
import Gallery from '../components/Gallery.vue'
export default {
  components: { GalleryPreview, Gallery},
  setup() {
    const filterTag = ref('all')
    const filterSubTag = ref('all')
    const subTags = ref([])
    const tags = ref([])
    const allImgs = ref([])
    const imgsForGallery = ref(null)
    const imgsForGalleryCurrentIndex = ref(0)
    Draw.getAllTags().then((res) => {
      tags.value = res
    })
    Draw.all(500).then((result) => {
      allImgs.value = result
    })

    
    return {
      filterTag,
      filterSubTag,
      tags,
      allImgs,
      subTags,
      imgsForGallery,
      imgsFiltered: computed(() => {
        if(filterTag.value === 'all') return allImgs.value
        return allImgs.value.filter((img) => {
          if(!img.tags)return false
          return img.tags.find(tag => 
            tag.label === filterTag.value &&
            (tag.subTags.includes(filterSubTag.value) || filterSubTag.value === 'all')
          )
        })
      }),
      imgsForGalleryCurrentIndex,
      displayGallery(imgs, img) {
        imgsForGallery.value = imgs
        imgsForGalleryCurrentIndex.value = imgs.findIndex(_img => _img._id === img._id)
      },
      close() {
        imgsForGallery.value = []
        imgsForGalleryCurrentIndex.value = 0
      },
      updateFilter(tag) {
        filterTag.value = tag
        filterSubTag.value = 'all'
        subTags.value = []
        allImgs.value.forEach(img => {
          if(!img.tags) return
          img.tags.forEach(_tag => {
            if(!_tag.subTags || _tag.label !== tag) return
            _tag.subTags.forEach(subTag => {
              if(subTags.value.includes(subTag)) return
              subTags.value.push(subTag)
            })
          });
        })
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
    color: #BFB4B4;
    text-decoration: none;
    cursor: pointer;
  }
  .topic.active {
    background-color: rgba(242, 236, 216, 0.5);
  }
  .topic:hover{
    color:#887f7f ;
  }
  .timeline:hover{
    color:#887f7f ;
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