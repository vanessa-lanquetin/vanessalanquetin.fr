<template>
  <div class="tags-root">
    <div class="tag" v-for="tag of tags" :key="tag.label" :class="`color-${tag.color}`">
      {{ tag.label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    /** @type {{label: string, color: 'yellow' | 'pink'| 'purple'}[]} */
    default: [],
  }
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";
.tags-root {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .tag {
    padding: 5px 10px;
    transition: 300ms;
    color:#fff;
    will-change: padding-left, padding-right;
    cursor: pointer;
    &:hover {
      padding-left: 15px;
      padding-right: 15px;
    }
    &.color- {
      &purple {
        background-color: $pastelPurple;
      }
      &pink {
        background-color: $pastelPink;
      }
      &yellow {
        background-color: $pastelYellow;
      }
    }
  }
}
</style>