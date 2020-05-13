<template>
  <v-app id="app">
    <OptyToolbar />
    <router-view />
    <OptyFooter />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OptyToolbar from "./components/OptyToolBar.vue";
import OptyFooter from "./components/OptyFooter.vue";

@Component({
  components: { OptyToolbar, OptyFooter }
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
