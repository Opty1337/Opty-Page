import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Contacts from "@/views/Contacts.vue";
import AcademicScore from "@/views/AcademicScore.vue";
import Projects from "@/views/Projects.vue";
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
      path: "/AcademicScore",
      name: "AcademicScore",
      component: AcademicScore,
      meta: {
        title: "Opty Score"
      }
    },
    {
      path: "/Projects",
      name: "Projects",
      component: Projects,
      meta: {
        title: "Opty Projects"
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
