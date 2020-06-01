<template>
  <div>
    <!-- TopBar -->
    <v-toolbar v-bind:class="bindClass" dark>
      <v-app-bar-nav-icon v-if="inMobile" @click.stop="drawer = !drawer" />
      <v-spacer v-if="inMobile" />
      <v-toolbar-items>
        <v-btn to="/" active-class="no-effect" text>
          <v-toolbar-title v-text="pageTitle" />
        </v-btn>
      </v-toolbar-items>
      <v-spacer v-if="!inMobile" />
      <v-toolbar-items v-if="!inMobile">
        <v-btn v-for="(item, i) in menu" :key="i" :to="item.to" text>
          <font-awesome-icon class="ma-2" :icon="item.icon" size="2x" />
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Mobile Side Menu -->
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
export default class OptyToolBar extends Vue {
  bindClass: string[] = ["light-blue", "darken-2"];
  pageTitle: string = "Opty@Page";

  inMobile: boolean = window.innerWidth < 1250;
  drawer: boolean = false;
  menu: object = [
    {
      icon: ["fas", "user-secret"],
      text: "Home",
      to: "/"
    },
    {
      icon: ["fas", "phone-alt"],
      text: "Contacts",
      to: "/Contacts"
    },
    {
      icon: ["fas", "user-graduate"],
      text: "Academic Curriculum",
      to: "/AC"
    },
    {
      icon: ["fas", "file-pdf"],
      text: "Curriculum Vitae",
      to: "/CV"
    },
    {
      icon: ["fas", "medal"],
      text: "Academic Awards",
      to: "/Awards"
    }
  ];

  async created() {
    window.addEventListener("resize", () => {
      this.inMobile = window.innerWidth < 1250;
    });
  }
}
</script>

<style scoped>
.v-toolbar__title,
.v-list--dense .v-list-item .v-list-item__subtitle {
  color: white;
  font-style: oblique;
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
