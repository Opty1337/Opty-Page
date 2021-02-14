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
      Icon: "fas fa-laptop",
    },
    ES: {
      Name: "Engineering Sciences",
      HasProjects: false,
      Icon: "fas fa-calculator",
    },
    CCS: {
      Name: "Cross-Cutting Skills",
      HasProjects: false,
      Icon: "fas fa-puzzle-piece",
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
      Icon: "fas fa-cloud",
      Mask: "fas fa-lock",
    },
    CB: {
      Name: "Common Branch",
      HasProjects: true,
      Icon: "fas fa-puzzle-piece",
    },
  },
  "SP"
);

export default new Vuex.Store({
  state: {
    mode: {
      inMobile: window.innerWidth < 1500,
      isDark: window.innerWidth < 1500,
      IconClassList:
        window.innerWidth < 1500
          ? ["blue--text", "text--accent-1"]
          : ["blue--text", "text--darken-4"],
      WrapperStyle: {
        backgroundColor:
          window.innerWidth < 1500
            ? "rgba(40, 45, 50, 0.95)"
            : "rgba(240, 245, 250,0.95)",
      },
    },
    degree: BSc,
  },
  mutations: {
    onResize(state) {
      state.mode.inMobile = window.innerWidth < 1350;
    },
    modifyMode(state, isDark) {
      if (state.mode.isDark === isDark) return;
      if (isDark) {
        state.mode.WrapperStyle.backgroundColor = "rgba(40, 45, 50,0.95)";
        state.mode.IconClassList = ["blue--text", "text--accent-1"];
      } else {
        state.mode.WrapperStyle.backgroundColor = "rgba(240, 245, 250,0.95)";
        state.mode.IconClassList = ["blue--text", "text--darken-4"];
      }
      state.mode.isDark = isDark;
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
