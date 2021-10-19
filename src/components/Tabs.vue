<template>
  <div class="tabs">
    <div class="buttons" :class="{invert:invertColor}">
      <button @click="currentTab = tab;save()" v-for="tab of tabs" :key="tab.label" :class="{active: tab?.id === currentTab?.id}">
        <div v-if="tab.label && !tab.icon">{{tab.label}}</div>
        <i v-if="tab.icon" :class="tab.icon" aria-hidden="true"></i>
        <label v-if="showLabels">{{tab?.data?.value?.length || tab?.data?.length || 0}}</label>
      </button>
    </div>
    <div class="content">
      <slot :name="currentTab?.id" :data="unref(currentTab?.data)" :tab="currentTab" v-if="currentTab"/>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, unref } from 'vue'
export default {
  props: {
    tabs: {default: () => []},
    showLabels: {default: true},
    invertColor: {default: false}
  },
  setup(props) {
    const currentTab = ref()
    onMounted(() => {
      if(props.tabs) {
        const tabId = localStorage.getItem('tab')
        currentTab.value = props.tabs[+tabId || 0]
      }
    })
    return {
      unref,
      currentTab,
      save() {
        localStorage.setItem('tab', props.tabs.findIndex(tab => tab.id === currentTab.value.id))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$color: rgba(16,226,215,.8156862745098039);
.tabs {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-grow: 1;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: auto;
  margin-bottom: 10px;
  height: 60px;
  flex-shrink: 0;
  width: 90%;
  &.invert {
    button.active {
      color: #fff;
      border-bottom-color: #fff;
      background: transparent;
    }
    button {
      color: #ccc;
      border-color: rgba(0,0,0,0.1);
      border-color: transparent;
    }
  }
  button {
    outline: none;
    color: white;
    border-radius: 5px 5px 0 0;
    transition: 200ms;
    transition-property: font-size, box-shadow;
    border-bottom: 0;
    height: 50px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    font-size: 1em;
    border: 1px solid $color;
    &:hover {
      box-shadow: none;
      transform: none;
    }
    i {
      font-size: 1.2em;
    }
    &.active {
      border-radius: 5px 5px 0 0;
      color: white;
      background-color: $color;
    }
    label {
      background-color: #fff;
      margin-left: 10px;
      color: #0076bc;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      padding-top: 2px;
      box-sizing: border-box;
    }
  }
}
.content {
  position: relative;
  overflow: auto;
  flex-grow: 1;
  color: white;
}
</style>