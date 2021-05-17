<template>
  <div class="login-root">
    Login
    <input type="text" placeholder="Email..." v-model="user.email" @keypress.enter="login">
    <input type="password" placeholder="Mot de passe..." v-model="user.password" @keypress.enter="login">
    <button @click="login">Valider</button>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import router from '../router'
import auth from '../models/Auth'
export default {
  setup() {
    const user = ref({email: '', password: ''})
    onMounted(async () => {
      if(!localStorage.getItem('token')){
        router.push({name: 'login'})
      }
      if(!(await auth.isAuthenticated())) {
        router.push({name: 'login'})
      }
    })
    return {
      user,
      async login() {
        await auth.login(user.value.email, user.value.password)
          .then(() => {
            router.push({name: 'admin'})
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-root {
  display: flex;
  flex-direction: column;
}
</style>