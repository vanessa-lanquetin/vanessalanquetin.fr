<template>
  <box-card id="hobbies" title="Centres d'intérêts">
    <ul class="hobbies">
      <li class="hobby" @mouseenter="currentCategory = 'cinema'" @mouseleave="currentCategory = null">Cinéma</li>
      <li class="hobby" @mouseenter="currentCategory = 'cook'" @mouseleave="currentCategory = null">Cuisine</li>
      <li class="hobby" @mouseenter="currentCategory = 'draw'" @mouseleave="currentCategory = null">Dessin</li>
      <li class="hobby" @mouseenter="currentCategory = 'reading'" @mouseleave="currentCategory = null">Lecture</li>
    </ul>
    <transition name="appear">
    <div class="more" v-if="currentCategory">
      {{more[currentCategory].label}}
      <img id="legend" :src="more[currentCategory].img" alt="movie i am legend" />
    </div>
    </transition>

    <!-- 
    <div class="more" :class="{active: currentCategory === 'cook'}">
      
      <img id="legend" src="" alt="movie i am legend" />
    </div> -->
    
  </box-card>
</template>

<script>
import { ref } from "@vue/reactivity";
import BoxCard from "./BoxCard.vue";
import legendImg from "@/assets/img/legend.jpg"
export default {
  components: { BoxCard },
  setup() {
    const more = {
      cinema: {
        label: 'Mon film préferé : "Je suis une légende"',
        img: legendImg
      },
      cook: {
        label: 'Mon repas préferé :',
        img: legendImg
      },
    }
    return {
      more,
      currentCategory: ref(),
    };
  },
};
</script>

<style lang="scss" scoped>
.hobbies {
  list-style: disc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    margin: 20px;
  }
}
.more {
  display: flex;
  flex-direction: column;
  color: rgb(250, 149, 149);
  width: max-content;
}
#legend {
  width: 200px;
  height: 100%;
}
/**
 * appear correspond au nom de la transition qu'on lui donne dans le html
 * appear-enter-active correspond a toute la phase d'apparition de l'element
 * appear-leave-active correspond a toute la phase disparition de l'element
 * on met donc une transition a la fois sur la phase d'apparition et de disparition de 300ms
 * lors de l'apparition de l'element il doit etre en opacity:0 (appear-enter-from) pas besoin de mettre la fin car de base c'est opacity: 1 (appear-enter-to)
 * lors de la dispartion de l'element il doit etre en opacity:1 (appear-leave-from pas besoin car de base opacity: 1) vers opacity 0 (appear-leave-to)
 */
.appear-enter-active,
.appear-leave-active {
  transition: 300ms;
}

.appear-enter-from,
.appear-leave-to {
  transform: scale(0);
  transform-origin: center center;
  opacity: 0;
}
</style>