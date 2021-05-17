import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import CV from "@/views/CV.vue";
import Dessin from "@/views/Dessins.vue"
import Admin from "@/views/Admin.vue"
import Login from "@/views/Login.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/cv",
    name: "cv",
    component: CV,
  },
  {
    path: "/dessins",
    name: "dessins",
    component: Dessin,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
