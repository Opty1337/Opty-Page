import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import BSc from "@/views/BSc.vue";
import MSc from "@/views/MSc.vue";

Vue.use(VueRouter);

function goto(href: string): void {
  window.location.href = href;
}

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
      path: "/CV",
      name: "CV",
      beforeEnter: (): void =>
        goto("https://github.com/Opty1337/CV/blob/master/CV.pdf"),
      meta: {
        title: "Opty's Curriculum"
      }
    },
    {
      path: "/PP",
      name: "PP",
      beforeEnter: (): void => goto("https://github.com/Opty-Projects"),
      meta: {
        title: "Opty's Projects"
      }
    },
    {
      path: "/Certificates",
      name: "Certificates",
      beforeEnter: (): void => goto("https://github.com/Opty1337/Certificates"),
      meta: {
        title: "Opty's Certificates"
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
