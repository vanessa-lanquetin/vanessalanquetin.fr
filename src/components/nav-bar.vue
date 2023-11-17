<template>
  <div class="navbar-root">
    <!-- Bouton de déclenchement du menu déroulant -->
    <div class="trigger" v-if="!opened || size > 980" @click="open"><i class="fas fa-bars"></i></div>

    <!-- Contenu du menu déroulant -->
    <template v-if="opened || size > 980">
      <div class="close" @click="close"><i class="fas fa-times"></i></div>
      <div class="overlay" @click="close"></div>
    </template>

    <!-- Transition pour l'animation du menu déroulant -->
    <Transition name="slide-fade">
      <div class="navbar-content" v-if="opened || size > 980">
        <!-- Liens principaux -->
        <div class="items">
          <div class="item" v-for="link of navbar.links" :key="link.label">
            <!-- Lien externe -->
            <a :href="link.link.path" @click.stop="close" v-if="link.link.external" target="_blank">{{ link.label }}</a>
            <!-- Lien interne (utilise le composant RouterLink) -->
            <RouterLink :to="link.link" @click.stop="close" v-else>
              {{ link.label }}
            </RouterLink>

            <!-- Sous-menu -->
            <div class="submenu" v-if="link.submenu">
              <div v-for="sublink of link.submenu" :key="sublink.label">
                <!-- Lien externe du sous-menu -->
                <a :href="link.link.path" @click.stop="close" v-if="link.link.external" target="_blank">{{ link.label }}</a>
                <!-- Lien interne du sous-menu (utilise le composant RouterLink) -->
                <RouterLink :to="sublink.link" @click.stop="close" v-else>
                  {{ sublink.label }}
                </RouterLink>  
              </div>
            </div>
          </div>
        </div>

        <!-- Liens des réseaux sociaux -->
        <div class="items">
          <template v-for="link of navbar.socialMedia" :key="link.label">
            <!-- Lien externe des réseaux sociaux -->
            <a :href="link.link.path" @click.stop="close" v-if="link.link.external" target="_blank"><i :class="link.icon"></i></a>
            <!-- Lien interne des réseaux sociaux (utilise le composant RouterLink) -->
            <RouterLink :to="link.link" @click.stop="close" v-else>
              <div class="item">
                <i :class="link.icon"></i>
              </div>
            </RouterLink>
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import {RouterLink} from 'vue-router'
import navbar from '../services/navbar'

const opened = ref(false)
const size = ref(0)

// Fonction de redimensionnement pour ajuster la taille de l'écran
const resize = (ev) => {
  size.value = ev.target.innerWidth
}
window.addEventListener('resize', resize)
onBeforeUnmount(() => window.removeEventListener('resize', resize))
onMounted(() => resize({target: window}))

// Fonctions pour ouvrir et fermer le menu déroulant
const close = () => opened.value = false
const open = () => opened.value = true
</script>

<style lang="scss" scoped>
$gap: 40px;
.navbar-root {
  color: #fff;
  background-color: #007172;
  font-family: Arial;
  font-weight: 600;
  height: 70px;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  z-index: 2;

  .close,.trigger {
    display: none;
    position: absolute;
    right: 20px;
    top: 15px;
    @media screen and (max-width: 980px) {
      display: inline-block;
    }
  }
  .navbar-content {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    background-color: #007172;
    position: relative;
    z-index: 1000;
    a {
      position: relative;
      color: #fff;
      display: inline-block;
      text-decoration: none;
    }
    .items {
      display: flex;
      gap: $gap;
      a:after {
        content: "";
        height: 2px;
        background-color: #F49B3D;
        width: 0;
        position: absolute;
        bottom: -5px;
        right: 0;
        transition: 0.2s all ease-in-out;
      }
      .submenu:hover {
        display: flex;
      }
      a:hover {
        &~.submenu {
          display: flex;
        }
        &::after {
          width: 100%;
          left: 0;
        }
      }
    }
    .submenu {
      display: none;
      flex-direction: column;
      gap: 10px;
      z-index: 1;
      background-color: #007172;
      padding: 25px;
      position: absolute;
      text-align: left;
    }
  }
  @media screen and (max-width: 980px) {
    padding: 0;
    height: 0;
    .navbar-content {
      padding-top: 50px;
      position: fixed;
      width: 80%;
      right: 0;
      flex-direction: column;
      justify-content: flex-start;
      height: 100vh;
      align-items: center;
      background-color: white;
      gap: $gap;
      a{
        color: #007172;
      }
    }
    .overlay {
      width: 100vw;
      height: 100vh;
      background-color: rgba(0,0,0,0.8);
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
    }
    .items {
      width: 75%;
      font-size: 1.5em;
      flex-direction: column;
      gap: 20px;
      text-align: left;
    }
    
    .navbar-content .submenu {
      position: relative;
      font-size: 0.7em;
      width: max-content;
      display: flex;
      width: 100%;
      box-shadow: none;
      border: none;
      padding-left: 40px;
      padding-bottom: 0;
      background-color: #fff;
    }
    .close, .trigger {
      position: fixed;
      right: 20px;
      top: 10px;
      display: inline-block;
      z-index: 10000;
      background-color: #007172;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 300ms;
      &:hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/

.slide-fade-leave-active, .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}
</style>
