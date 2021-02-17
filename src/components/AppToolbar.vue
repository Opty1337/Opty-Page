<template>
  <div>
    <!-- TopBar -->
    <v-toolbar class="appBackground" :dark="aService.dark" flat>
      <v-toolbar-items v-if="!aService.inMobile">
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
      <v-spacer v-if="!aService.inMobile" />
      <v-toolbar-items v-if="!aService.inMobile">
        <v-btn
          active-class="effect"
          v-for="(item, i) in menuOptions"
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
            v-model="aService.dark"
            prepend-icon="$moon"
            color="rgb(255, 195, 5)"
            inset
          />
        </v-container>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Mobile Side Menu -->
    <v-navigation-drawer
      class="appBackground"
      :dark="aService.dark"
      v-if="aService.inMobile"
      v-model="drawer"
      app
      absolute
      temporary
    >
      <v-toolbar class="appBackground" flat :dark="aService.dark">
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
          v-for="(item, i) in menuOptions"
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
import AppService from "@/services/App/AppService";
import { MenuOption } from "@/models/App";

@Component
export default class AppToolbar extends Vue {
  readonly aService = AppService.singleton;

  drawer = false;

  readonly menuOptions: MenuOption[] = [
    {
      Name: "Home",
      Icon: ["fas", "igloo"],
      To: "/Home",
    },
    {
      Name: "BSc",
      Icon: ["fas", "university"],
      To: "/BSc",
    },
    {
      Name: "MSc",
      Icon: ["fas", "user-graduate"],
      To: "/MSc",
    },
    {
      Name: "Curriculum Vitae",
      Icon: ["fas", "id-card-alt"],
      Href: "./OptyCV.pdf",
      Target: "_blank",
    },
    {
      Name: "Personal Projects",
      Icon: ["fab", "github"],
      Href: "https://github.com/Opty-Projects",
      Target: "_blank",
    },
    {
      Name: "Certificates",
      Icon: ["fas", "certificate"],
      Href: "https://github.com/RicardoGrade/Certificates",
      Target: "_blank",
    },
  ];
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
