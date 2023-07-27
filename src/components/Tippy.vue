<template>
  <div id="btnTheme" ref="tippyRef">
    <slot name="trigger"/>
    <div ref="contentRef">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { onMounted, ref } from 'vue';

export default {
  props: {
    trigger: {default: null}
  },
  setup(props) {
    const tippyRef = ref()
    const contentRef = ref()
    onMounted(()=> {
      console.log('hey', contentRef.value)
      tippy(tippyRef.value, {
        content: contentRef.value,
        trigger: props.trigger,
        hideOnClick: true,
        interactive: true,
      });
    })
    return {
      tippyRef,
      contentRef,
    }
  }
}
</script>

<style lang="scss" scoped>
  #btnTheme{
    cursor: pointer;
  }
</style>