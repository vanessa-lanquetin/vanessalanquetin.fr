<template>
    <SectionHero
      header="Contact"
      :call-to-action="{
        label: 'Voir mon github',
        href: 'https://github.com/vanessa-lanquetin',
      }"
      :img="HeroImg"
    >
      <template #description>
        Si vous souhaitez me contacter, je vous invite à m'envoyer un mail via ce formulaire ci-dessous ou à me contacter directement sur mes réseaux.
      </template>
    </SectionHero>
    <ContactComponent/>

</template>

<script setup>
import ContactComponent from '../components/contact-component.vue';
import SectionHero from '../components/Section-Hero.vue'
import HeroImg from '../assets/img/gum/home.gif'
</script>

<style lang="scss" scoped>

</style>