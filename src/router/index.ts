import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Degree from "@/views/Degree.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "Opty Home"
      }
    },
    {
      path: "/Degree",
      name: "Degree",
      component: Degree,
      meta: {
        title: "Opty Degree"
      }
    },
    {
      path: "/CV",
      name: "CV",
      beforeEnter: (to, from, next) =>
        (window.location.href =
          "https://github.com/Opty1337/CV/blob/master/CV.pdf"),
      meta: {
        title: "Opty Curriculum"
      }
    },
    {
      path: "/PP",
      name: "PP",
      beforeEnter: (to, from, next) =>
        (window.location.href = "https://github.com/Opty-Projects"),
      meta: {
        title: "Opty Projects"
      }
    },
    {
      path: "/Certificates",
      name: "Certificates",
      beforeEnter: (to, from, next) =>
        (window.location.href = "https://github.com/Opty1337/Certificates"),
      meta: {
        title: "Opty Certificates"
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
