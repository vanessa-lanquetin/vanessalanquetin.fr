import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Portfolio from "../views/Portfolio.vue";
import Project from "../views/Project.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
      children: [
        {path: ':filter', name: 'portfolio-filtered', component: Portfolio}
      ]
    },
    {
      path: "/project/:projectId",
      name: "project",
      component: Project,
    },
  ],
});

export default router;
