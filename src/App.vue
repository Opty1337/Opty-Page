<template>
  <v-app id="app">
    <Toolbar></Toolbar>
    <Home></Home>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Toolbar from "./views/Toolbar.vue";
import Home from "./views/Home.vue";

@Component({
  components: { Toolbar, Home }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
