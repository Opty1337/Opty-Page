<template>
  <v-app id="app">
    <app-toolbar />
    <router-view class="flex" />
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppToolbar from "./components/AppToolbar.vue";
import AppFooter from "./components/AppFooter.vue";

@Component({
  components: { AppToolbar, AppFooter },
})
export default class App extends Vue {
  created() {
    window.onresize = () => {
      this.$store.commit("onResize");
    };
  }
}
</script>

<style>
#app {
  background-image: url("assets/Images/Background.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#card,
#bar {
  background-color: rgba(245, 245, 245, 0.925);
}

#card {
  margin: 2%;
  padding: 2%;
}

.effect::before {
  opacity: 0.175 !important;
}

.no-effect::before {
  opacity: 0 !important;
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
