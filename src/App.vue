<template>
  <v-app id="app">
    <app-toolbar />
    <v-divider :dark="themeService.dark" />
    <router-view class="pa-5 pa-md-10 rounded-0 flex" />
    <v-divider :dark="themeService.dark" />
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppToolbar from "@/components/AppToolbar.vue";
import AppFooter from "@/components/AppFooter.vue";
import ThemeService from "@/services/ThemeService";

@Component({
  components: { AppToolbar, AppFooter },
})
export default class App extends Vue {
  readonly themeService = ThemeService.singleton;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.theme--light.appBackground {
  background-color: white !important;
}

.theme--dark.appBackground {
  background-color: #272727 !important;
}

.theme--light .appText,
.theme--light.v-data-table,
.theme--light.v-input input {
  color: black !important;
}

.theme--dark .appText,
.theme--dark.v-data-table,
.theme--dark.v-input input {
  color: rgba(255, 255, 255, 0.6) !important;
}

.theme--light .svg-inline--fa,
.theme--light .v-input__slot {
  color: rgb(100, 55, 180) !important;
}

.theme--light.v-divider,
.theme--light.v-btn--outlined {
  border-color: rgb(100, 55, 180) !important;
}

.theme--light .v-input__slot {
  caret-color: rgb(100, 55, 180) !important;
}

.theme--dark .svg-inline--fa,
.theme--dark .v-input__slot {
  color: rgb(255, 155, 0) !important;
}

.theme--dark.v-divider,
.theme--dark.v-btn--outlined {
  border-color: rgb(255, 155, 0) !important;
}

.theme--dark .v-input__slot {
  caret-color: rgb(255, 155, 0) !important;
}

.theme--light .bodyIcon,
.theme--light.v-data-table a {
  color: rgb(60, 80, 180) !important;
}

.theme--dark .bodyIcon,
.theme--dark.v-data-table a {
  color: rgba(30, 150, 240, 0.9) !important;
}

.v-btn {
  letter-spacing: normal;
  text-transform: none;
  font-size: large !important;
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
