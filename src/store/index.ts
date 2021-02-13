import Vue from "vue";
import Vuex from "vuex";
import BScCourses from "@/assets/Data/BScCourses.json";
import MScCourses from "@/assets/Data/MScCourses.json";
import Degree from "@/models/Degree";

Vue.use(Vuex);

const BSc = new Degree(
  BScCourses,
  {
    CES: {
      Name: "Computer Engineering Sciences",
      HasProjects: true,
      Icon: ["fas", "laptop"],
    },
    ES: {
      Name: "Engineering Sciences",
      HasProjects: false,
      Icon: ["fas", "calculator"],
    },
    CCS: {
      Name: "Cross-Cutting Skills",
      HasProjects: false,
      Icon: ["fas", "cubes"],
    },
  },
  "CES"
);

const MSc = new Degree(
  MScCourses,
  {
    SP: {
      Name: "Specializations",
      HasProjects: true,
      Icon: ["fas", "lock"],
      Mask: ["fas", "cloud"],
    },
    CB: {
      Name: "Common Branch",
      HasProjects: true,
      Icon: ["fas", "cubes"],
    },
  },
  "SP"
);

export default new Vuex.Store({
  state: {
    inMobile: window.innerWidth < 1350,
    degree: BSc,
  },
  mutations: {
    onResize(state) {
      state.inMobile = window.innerWidth < 1350;
    },
    inBSc(state) {
      state.degree = BSc;
    },
    inMSc(state) {
      state.degree = MSc;
    },
  },
  actions: {},
  modules: {},
});
