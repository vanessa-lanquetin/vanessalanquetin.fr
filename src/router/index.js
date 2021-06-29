import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Admin from "@/views/Admin.vue"
import Login from "@/views/Login.vue"
import Introduction from "@/views/Introduction.vue";
import Parcours from "@/views/Parcours.vue";
import Experiences from "@/views/Experiences.vue";
import Formations from "@/views/Formations.vue";
import Savoir from "@/views/Savoir.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/introduction",
    name: "introduction",
    component: Introduction,
  },
  {
    path: "/savoir",
    name: "savoir",
    component: Savoir,
  },
  {
    path: "/formations",
    name: "formations",
    component: Formations,
  },
  {
    path: "/experiences",
    name: "experiences",
    component: Experiences,
  },
  {
    path: "/parcours",
    name: "parcours",
    component: Parcours,
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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
