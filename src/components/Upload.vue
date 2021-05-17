<template>
<div class="upload-root">
  <label class="upload-container">
    <i class="fas fa-upload"></i>
    <span>Uploader des images</span>
    <input type="file" multiple @change="addFiles($event.target.files)" accept="image/png,image/jpg,image/jpeg">
  </label>
  <div class="files">
    <div class="file" v-for="(file, i) of  files" :key="'file' + i">
      <div class="progress-container" :style="{width: isProgressing ? 100+'px' : 0}">
        <div class="progress"  :style="{width: progress[i] + '%', backgroundColor: 'hsl('+progress[i]+', 70%, 50%)'}"></div>
      </div>
      {{file.name}}
    </div>
  </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import API from '../service/API'
import PromiseB from 'bluebird'
export default {
  setup(props, comp) {
    const files = ref([])
    const progress = ref([])
    const isProgressing = ref(false)
    return {
      progress,
      files,
      isProgressing,
      addFiles(_files) {
        files.value.push(..._files)
        this.upload()
      },
      async upload() {
        comp.emit('upload', files.value)
        if(files.value.length) {
          isProgressing.value = true
          await PromiseB.map(files.value, (file, i) => {
            const formData = new FormData();
            formData.append('files', file)
            return API.post('/draws', formData, {
                onUploadProgress: function(progressEvent) {
                  const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                  progress.value[i] = percentCompleted
                  if(percentCompleted === 100) {
                    comp.emit('upload-complete')
                  }
                }
              })
          }).then(async () => {
            files.value = []
            progress.value = []
            comp.emit('upload-complete', files.value)
            isProgressing.value = false
          })
        }
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 1px dashed black;
  .files {
    padding-bottom: 10px;
  }
  .file {
    display: flex;
    margin-right: 10px;
    margin-top: 5px;
    .progress-container {
      position: relative;
      margin-right: 10px;
      width: 100px;
      height: 20px;
      background-color: #eee;
      border-radius: 4px;
      overflow: hidden;
      transition: 300ms;
      .progress {
        position: absolute;
        left: 0;
        top: 0px;
        height: 100%;
        background-color: red;
        transition: 300ms;
      }
    }
  }
  .upload-container {
    width: 50%;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    font-family: sans-serif;
    transition: 300ms;
    color: #777;
    i {
      font-size: 2em;
      margin: 10px;
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    input {
      display:none;
    }
  }
}

</style>