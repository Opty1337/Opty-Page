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
    mode: {
      inMobile: window.innerWidth < 1500,
      isDark: false,
      IconClassList: ["blue--text", "text--darken-4"],
      WrapperStyle: {
        backgroundColor: "rgba(230, 240, 250, 0.95)",
      },
    },
    degree: BSc,
  },
  mutations: {
    onResize(state) {
      state.mode.inMobile = window.innerWidth < 1350;
    },
    changeTheme(state, isDark) {
      if (state.mode.isDark === isDark) return;
      if (isDark) {
        state.mode.WrapperStyle.backgroundColor = "rgba(50, 60, 70, 0.95)";
        state.mode.IconClassList = ["blue--text", "text--accent-1"];
      } else {
        state.mode.WrapperStyle.backgroundColor = "rgba(230, 240, 250, 0.95)";
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
