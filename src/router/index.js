import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Admin from "@/views/Admin.vue"
import Login from "@/views/Login.vue"
import Introduction from "@/views/Introduction.vue";
import Blabla from "@/views/Blabla.vue";
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
    path: "/blabla",
    name: "blabla",
    component: Blabla,
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
