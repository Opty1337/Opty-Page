<template>
  <div>
    <v-toolbar class="indigo lighten-1">
      <v-app-bar-nav-icon
        style="color: white;"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title class="white--text">Opty@Page</v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer
      class="indigo lighten-1"
      v-model="drawer"
      absolute
      temporary
    >
      <v-img src="../assets/Perfil.jpg" />
      <v-list nav dense>
        <div v-for="(menu, i) in menus" :key="i">
          <v-list-item link>
            <v-list-item-action>
              <font-awesome-icon
                style="color: white;"
                :icon="menu.icon"
                size="2x"
              />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title id="item-title" v-text="menu.text" />
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class OptyToolbar extends Vue {
  drawer: boolean = false;
  menus: object = [
    {
      icon: ["fab", "fort-awesome"],
      text: "Home"
    },
    {
      icon: ["fas", "user-secret"],
      text: "About Me"
    },
    {
      icon: ["fas", "user-graduate"],
      text: "Academic Projects"
    },
    {
      icon: ["fab", "github"],
      text: "Personal Projects"
    },
    {
      icon: ["fas", "file-pdf"],
      text: "Curriculum Vitae"
    },
    {
      icon: ["fas", "medal"],
      text: "Awards"
    }
  ];
}
</script>

<style scoped>
#item-title {
  padding: inherit;
  font-size: large;
  color: white;
}
</style>
