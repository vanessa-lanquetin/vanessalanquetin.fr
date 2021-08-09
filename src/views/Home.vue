<template>
<div>
  <header-welcome/>
  <introduction/>
  <informations/>
  <formations/>
  <hobbies/>
  <contact/>
</div>
</template>

<script>
import Contact from '../components/Contact.vue'
import Formations from '../components/Formations.vue'
import HeaderWelcome from '../components/HeaderWelcome.vue'
import Hobbies from '../components/Hobbies.vue'
import Informations from '../components/Informations.vue'
import Introduction from '../components/Introduction.vue'
export default {
  name: 'Home',
  components: {
    HeaderWelcome,
    Introduction,
    Informations,
    Formations,
    Hobbies,
    Contact
  }
}
</script>