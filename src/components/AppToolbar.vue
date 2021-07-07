<template>
  <div>
    <!-- TopBar -->
    <v-toolbar class="appBackground" :dark="themeService.dark" flat>
      <v-toolbar-items v-if="!deviceService.inMobile">
        <v-btn to="/Home" active-class="no-effect" text>
          <v-list-item>
            <v-list-item-avatar tile>
              <v-img src="../assets/Images/Portfolio.png" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-toolbar-title class="appText">Optyfolio</v-toolbar-title>
            </v-list-item-content>
          </v-list-item>
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon v-else @click.stop="drawer = !drawer" />
      <v-spacer v-if="!deviceService.inMobile" />
      <v-toolbar-items v-if="!deviceService.inMobile">
        <v-btn
          active-class="effect"
          v-for="(item, i) in menu"
          :key="i"
          :to="item.To"
          :href="item.Href"
          :target="item.Target"
          text
        >
          <font-awesome-icon class="fa-2x ma-3" :icon="item.Icon" />
          <v-toolbar-title class="appText" v-text="item.Name" />
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items class="fill-height">
        <v-container>
          <v-switch
            v-model="themeService.dark"
            prepend-icon="$moon"
            color="rgb(255, 185, 75)"
            flat
          />
        </v-container>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Mobile Side Menu -->
    <v-navigation-drawer
      class="appBackground"
      :dark="themeService.dark"
      v-if="deviceService.inMobile"
      v-model="drawer"
      app
      absolute
      temporary
    >
      <v-toolbar class="appBackground" flat :dark="themeService.dark">
        <v-list nav>
          <v-list-item>
            <v-list-item-avatar tile>
              <v-img src="../assets/Images/Portfolio.png" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="appText">Menu</v-list-item-title>
              <v-list-item-subtitle class="appText"
                >Optyfolio
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-toolbar>
      <v-divider />
      <v-list nav>
        <v-list-item
          active-class="effect"
          v-for="(item, i) in menu"
          :key="i"
          :to="item.To"
          :href="item.Href"
          :target="item.Target"
          link
        >
          <v-list-item-action>
            <font-awesome-icon class="fa-2x" :icon="item.Icon" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="appText" v-text="item.Name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MenuOption from "@/models/MenuOption";
import Menu from "@/assets/Data/Menu.json";
import ThemeService from "@/services/ThemeService";
import DeviceService from "@/services/DeviceService";

@Component
export default class AppToolbar extends Vue {
  readonly themeService = ThemeService.singleton;
  readonly deviceService = DeviceService.singleton;
  readonly menu: MenuOption[] = Menu;
  drawer = false;
}
</script>

<style scoped>
.effect::before {
  opacity: 0.15 !important;
}

.no-effect::before {
  opacity: 0 !important;
}
</style>
