import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Contacts from "@/views/Contacts.vue";
import AC from "@/views/AC.vue";
import CV from "@/views/CV.vue";
import Awards from "@/views/Awards.vue";

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
      path: "/Contacts",
      name: "Contacts",
      component: Contacts,
      meta: {
        title: "Opty Contacts"
      }
    },
    {
      path: "/AC",
      name: "AcademicCurriculum",
      component: AC,
      meta: {
        title: "Opty Score"
      }
    },
    {
      path: "/CV",
      name: "CV",
      component: CV,
      meta: {
        title: "Opty CV"
      }
    },
    {
      path: "/Awards",
      name: "Awards",
      component: Awards,
      meta: {
        title: "Opty Awards"
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
