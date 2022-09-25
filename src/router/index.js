import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "../views/AboutMeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'about' }
    },
    {
      path: "/portfolio",
      name: "about",
      component: AboutMe,
    },
    {
      path: "/portfolio/resume",
      name: "resume",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ResumeView.vue"),
    },
    {
      path: "/portfolio/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/portfolio/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
