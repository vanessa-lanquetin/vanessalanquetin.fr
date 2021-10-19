import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ScrollReveal from './directives/ScrollReveal'

createApp(App)
  .use(router)
  .directive("scroll-reveal", ScrollReveal)
  .mount("#app");

