<template>
  <div class="box-card" :class="{noStyle}">
    <div class="card">
      <div class="title" v-if="title">{{title}}</div>
      <div class="content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noStyle: {default: false, type: Boolean},
    title: {default: '', type: String}
  }

}
</script>

<style lang="scss" scoped>
.box-card{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  .card{
    padding: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 30px;
    width: 90%;
    max-width: 800px;
    box-shadow: -10px -10px 20px 5px rgba(0,0,0,0.1), 10px 10px 20px -5px rgba(255,255,255,0.3);
    border: 1px solid rgba(0,0,0,0.3);
  }
  .title{
    font-family: "Monofett";
    font-size: 2.3em;
    margin-bottom: 28px;
  }
  .content {
    font-size: 26px;
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
@media screen and(max-width: 465px) {
  .box-card{
    .card{
      padding: 30px;
    }
    .title{
      font-size: 1.9em;
    }
    .content{
      font-size: 1.1em;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>