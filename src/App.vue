<template>
  <v-app id="app">
    <OptyToolbar />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OptyToolbar from "./components/OptyToolBar.vue";

@Component({
  components: { OptyToolbar }
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
  background-color: rgba(255, 255, 255, 0.925);
  margin: 2%;
  padding: 2%;
}
</style>
