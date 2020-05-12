<template>
  <div>
    <!---->
    <v-toolbar v-bind:class="bindClass" dark>
      <v-toolbar-items v-if="!inMobile">
        <v-btn to="/" active-class="no-effect" text>
          <v-toolbar-title v-text="pageTitle" />
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon v-else @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-items v-if="!inMobile">
        <v-btn v-for="(item, i) in menu" :key="i" :to="item.to" text>
          {{ item.text }}
          <font-awesome-icon class="ma-2" :icon="item.icon" size="2x" />
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn to="/" active-class="no-effect" text>
          <v-toolbar-title v-text="pageTitle" />
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!---->
    <v-navigation-drawer
      v-if="inMobile"
      v-bind:class="bindClass"
      v-model="drawer"
      app
      dark
      absolute
      temporary
    >
      <v-toolbar v-bind:class="bindClass">
        <v-list nav dense>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="../assets/Perfil.jpg" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Menu</v-list-item-title>
              <v-list-item-subtitle v-text="pageTitle" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-toolbar>
      <v-list nav dense>
        <div v-for="(item, i) in menu" :key="i">
          <v-list-item :to="item.to" link>
            <v-list-item-action>
              <font-awesome-icon :icon="item.icon" size="2x" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.text" />
            </v-list-item-content>
          </v-list-item>
          <v-divider />
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class OptyToolbar extends Vue {
  bindClass: string[] = ["blue", "darken-1"];
  pageTitle: string = "Opty@Page";
  inMobile: boolean = window.innerWidth < 1000;

  drawer: boolean = false;
  menu: object = [
    {
      icon: ["fab", "fort-awesome"],
      text: "Home",
      to: "/Home"
    },
    {
      icon: ["fas", "user-secret"],
      text: "About Me",
      to: "/AboutMe"
    },
    {
      icon: ["fab", "github"],
      text: "Projects",
      to: "/Projects"
    },
    {
      icon: ["fas", "file-pdf"],
      text: "Curriculum Vitae",
      to: "/Projects"
    },
    {
      icon: ["fas", "medal"],
      text: "Awards",
      to: "/Projects"
    }
  ];
}
</script>

<style scoped>
.v-toolbar__title,
.v-list--dense .v-list-item .v-list-item__subtitle {
  color: white;
}
.v-btn {
  font-weight: normal;
  letter-spacing: normal;
  text-indent: inherit;
  text-transform: none;
  white-space: normal;
}
.v-btn.v-size--default {
  font-size: large;
}
.v-list--dense .v-list-item .v-list-item__title {
  font-size: large;
}
.no-effect::before {
  opacity: 0 !important;
}
</style>
