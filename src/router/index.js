import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/profile",
    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
