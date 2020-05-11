import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Toolbar from "@/views/Toolbar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Toolbar",
    component: Toolbar
  }
];

const router = new VueRouter({
  routes
});

export default router;
