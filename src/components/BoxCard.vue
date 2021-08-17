<template>
  <div class="box-card reveal reveal-loaded" :class="{ noStyle }">
    <div class="card">
      <div class="title" v-if="title">{{ title }}</div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noStyle: { default: false, type: Boolean },
    title: { default: "", type: String },
  },
};
const threshold = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove('reveal')
      observer.unobserve(entry.target)
    }
  })
}

document.documentElement.classList.add('reveal-loaded')

window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(handleIntersect, options)
  const targets = document.querySelectorAll('.reveal')
  targets.forEach(function (target) {
    observer.observe(target)
  })
})
</script>

<style lang="scss" scoped>
.box-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  .card {
    padding: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 30px;
    width: 90%;
    max-width: 800px;
    box-shadow: -10px -10px 20px 5px rgba(0, 0, 0, 0.1),
      10px 10px 20px -5px rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  .title {
    font-family: "Monofett";
    font-size: 2.3em;
    margin-bottom: 28px;
  }
  .content {
    font-size: 1.7em;
    line-height: 1.5;
  }
  &.noStyle {
    .card {
      background-color: transparent;
      border: none;
      box-shadow: none;
      padding: 0;
    }
    .content {
      line-height: 1;
    }
  }
}
.reveal-loaded .reveal {
    opacity: 0;
    transform: translateY(30px);
}

.reveal-loaded{
    transition: 0.5s cubic-bezier(.5, 0, 0, 1);
}
@media screen and(max-width: 465px) {
  .box-card {
    .card {
      padding: 30px;
    }
    .title {
      font-size: 1.9em;
    }
    .content {
      font-size: 1.1em;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>