<template>
  <div>
    <v-toolbar dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="color: #A6E22E;">Opty@Page</v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" dark temporary absolute>
      <v-list dense>
        <v-list-item class="pa-3" v-for="menu in menus" :key="menu" link>
          <v-list-item-action>
            <font-awesome-icon
              style="font-size: xx-large; color: #ED872D;"
              :icon="menu.icon"
            />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style="font-size: large;" v-text="menu.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Toolbar extends Vue {
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

<style scoped></style>
