<template>
  <div class="section-root">
    <h2>{{ header }}</h2>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  header: {default: '', type: String}
})
</script>

<style lang="scss" scoped>
.section-root {
  width: 87%;
  margin: auto;
  padding: 40px 0;
  box-sizing: border-box;
  h2 {
    font-size: 2em;
    font-weight: normal;
    color: #9c9cf8;
    text-transform: uppercase;
  }
}
</style>