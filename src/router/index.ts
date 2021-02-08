import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import BSc from "@/views/BSc.vue";
import MSc from "@/views/MSc.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "Opty's Home"
      }
    },
    {
      path: "/BSc",
      name: "BSc",
      component: BSc,
      meta: {
        title: "Opty's BSc"
      }
    },
    {
      path: "/MSc",
      name: "MSc",
      component: MSc,
      meta: {
        title: "Opty's MSc"
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
