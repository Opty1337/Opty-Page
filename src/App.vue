<template>
  <v-app id="app" v-bind:style="mode.WrapperStyle">
    <app-toolbar />
    <router-view
      class="pa-5 pa-md-10 rounded-0 flex"
      v-bind:style="RouterViewStyle"
    />
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppToolbar from "./components/AppToolbar.vue";
import AppFooter from "./components/AppFooter.vue";
import { Mode, Style } from "@/models/Types";

@Component({
  components: { AppToolbar, AppFooter },
})
export default class App extends Vue {
  readonly mode: Mode = this.$store.state.mode;

  created() {
    window.onresize = () => {
      this.$store.commit("onResize");
    };
  }

  get RouterViewStyle(): Style {
    const style: Style = {
      backgroundColor: "transparent",
    };
    style.borderTopStyle = style.borderBottomStyle = "solid";
    style.borderTopWidth = style.borderBottomWidth = "1px";
    style.borderTopColor = style.borderBottomColor = this.mode.isDark
      ? "rgba(255, 255, 255, 0.12)"
      : "rgba(0, 0, 0, 0.12)";
    return style;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@keyframes periodicallySpin {
  0% {
    transform: rotateZ(0deg);
  }
  5% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
