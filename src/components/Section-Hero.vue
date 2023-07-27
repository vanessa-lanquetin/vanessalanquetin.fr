<template>
  <div class="section-hero-root">
    <div class="section-hero-container">
      <div class="left">
        <h1>{{ header }}</h1>
        <div class="description">
          <slot name="description"></slot>
        </div>
        <a :href="callToAction.href" :target="isExternalUrl ? '_blank' : ''">
          <button :style="{
            backgroundColor: callToAction.backgroundColor || '#ff96da',
            color: callToAction.color || 'white'
          }">
            {{ callToAction.label }}
          </button>
        </a>
      </div>
      <div class="right">
        <img :src="img">
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  header: {default: '' , type: String},
  callToAction: {
    /** @type {{label: string, href: string, backgroundColor?: string, color?: string}} */
    default: {
      label:'',
      href: '',
      backgroundColor: '',
      color: '',
    }
  },
  img: {default: ''},
})

const isExternalUrl = computed(() => props.callToAction.href?.startsWith('https'))
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";
.section-hero-root {
  width: 100%;
  background-color: $back-color;
  text-align: left;
  .section-hero-container {
    padding: 100px 0 100px 100px;
    max-width: 1200px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;

    @media screen and (max-width: 980px) {
      flex-direction: column-reverse;
      padding: 100px 0px;
    }
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h1 {
      color: $primary-color;
    }
    img {
      width: 400px;
      max-width: 500px;
      object-fit: contain;
      @media screen and (max-width: 980px) {
        width: 90%;

      }
    }
  }
}

button {
  text-transform: uppercase;
  border-radius: 0;
  font-weight: bold;
  margin-top: 40px;
}
</style>