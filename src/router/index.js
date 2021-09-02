import { createWebHistory, createRouter } from "vue-router";
import batters from "@/views/batters.vue";
import pitchers from "@/views/pitchers.vue";
import staff from "@/views/staff.vue";
import entrance from "@/components/entrance.vue";
import batters_result from "@/views/batters_result.vue";
import pitchers_result from "@/views/pitchers_result.vue";
import staff_result from "@/views/staff_result.vue";
const routes = [
  {
    path: "",
    name: "Home",
    component:entrance,
  },
  {
    path: "/deck/batters/",
    name: "batters",
    component: batters,
  },
  {
    path: "/deck/batters/:team/:year",
    name: "batters2",
    component: batters_result,
  },
  {
    path: "/deck/pitchers",
    name: "pitchers",
    component: pitchers,
  },
  {
    path: "/deck/pitchers/:team/:year",
    name: "pitchers2",
    component: pitchers_result,
  },
  {
    path: "/deck/staff",
    name: "staff",
    component: staff,
  }, 
  {
    path: "/deck/staff/:team/:year",
    name: "staff2",
    component: staff_result,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;