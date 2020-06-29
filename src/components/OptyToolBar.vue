<template>
  <div>
    <!-- TopBar -->
    <v-toolbar dark>
      <v-app-bar-nav-icon v-if="inMobile" @click.stop="drawer = !drawer" />
      <v-spacer v-if="inMobile" />
      <v-toolbar-items>
        <v-btn to="/" active-class="no-effect" text>
          <v-toolbar-title v-text="pageTitle" />
        </v-btn>
      </v-toolbar-items>
      <v-spacer v-if="!inMobile" />
      <v-toolbar-items v-if="!inMobile">
        <v-btn
          v-for="(item, i) in menu"
          :key="i"
          :to="item.to"
          :target="item.target"
          text
        >
          <font-awesome-icon class="ma-2" :icon="item.icon" size="2x" />
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Mobile Side Menu -->
    <v-navigation-drawer
      v-if="inMobile"
      v-model="drawer"
      app
      dark
      absolute
      temporary
    >
      <v-toolbar>
        <v-list nav>
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
      <v-list nav>
        <v-list-item
          v-for="(item, i) in menu"
          :key="i"
          :to="item.to"
          :target="item.target"
          link
        >
          <v-list-item-action>
            <font-awesome-icon :icon="item.icon" size="2x" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class OptyToolBar extends Vue {
  pageTitle: string = "Opty@Page";

  inMobile: boolean = window.innerWidth < 1250;
  drawer: boolean = false;
  menu: object[] = [
    {
      icon: ["fas", "user-secret"],
      text: "Home",
      to: "/",
      target: undefined
    },
    {
      icon: ["fas", "user-graduate"],
      text: "Degree",
      to: "/Degree",
      target: undefined
    },
    {
      icon: ["fas", "id-card-alt"],
      text: "Curriculum Vitae",
      to: "/CV",
      target: "_blank"
    },
    {
      icon: ["fab", "github"],
      text: "Personal Projects",
      to: "/PP",
      target: "_blank"
    },
    {
      icon: ["fas", "certificate"],
      text: "Certificates",
      to: "/Certificates",
      target: "_blank"
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
.v-list-item .v-list-item__subtitle {
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
.v-list-item .v-list-item__title {
  font-size: large;
}
.no-effect::before {
  opacity: 0 !important;
}
</style>
