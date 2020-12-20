<template>
  <v-app id="app">
    <ToolBar />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToolBar from "./components/ToolBar.vue";

@Component({
  components: { ToolBar }
})
export default class App extends Vue {}
</script>

<style>
#app {
  background-image: url("assets/Background.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#card {
  background-color: rgba(245, 245, 245, 0.925);
  margin: 2%;
  padding: 2%;
}

.effect::before {
  opacity: 0.175 !important;
}

.no-effect::before {
  opacity: 0 !important;
}
</style>
