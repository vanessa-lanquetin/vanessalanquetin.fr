<template>
  <div class="subsection-root">
    <div class="left">
      <h3>{{ header }}</h3>
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <div class="right">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script setup>
defineProps({
  header: {default: '', type: String},
  img: {default: '', type: String},
})
</script>

<style lang="scss" scoped>
.subsection-root {
  display: flex;
  text-align: left;
  gap: 80px;
  align-items: center;
  font-weight: normal;
  padding: 20px 0;
  box-sizing: border-box;
  @media screen and (max-width: 980px) {
    gap: 20px;
    flex-direction: column-reverse;
  }
  h3 {
    color: #ff96da;
    font-size: 1.8em;
    margin-bottom: 40px;
  }
  img {
    background-color: #e5e5fc;
    height: 400px;
    object-fit: contain;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>