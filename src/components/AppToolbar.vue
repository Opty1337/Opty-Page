<template>
  <div>
    <!-- TopBar -->
    <v-toolbar class="transparent" :dark="mode.isDark" flat>
      <v-toolbar-items v-if="!mode.inMobile">
        <v-btn to="/Home" active-class="no-effect" text>
          <v-list-item>
            <v-list-item-avatar tile>
              <v-img src="../assets/Images/Portfolio.png" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-toolbar-title>Opty Portfolio</v-toolbar-title>
            </v-list-item-content>
          </v-list-item>
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon v-else @click.stop="drawer = !drawer" />
      <v-spacer v-if="!mode.inMobile" />
      <v-toolbar-items v-if="!mode.inMobile">
        <v-btn
          active-class="effect"
          v-for="(item, i) in menuOptions"
          :key="i"
          :to="item.To"
          :href="item.Href"
          :target="item.Target"
          text
        >
          <v-icon
            class="ma-3"
            v-bind:class="mode.IconClassList"
            v-text="item.Icon"
            large
          />
          {{ item.Name }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items class="fill-height">
        <v-container>
          <v-switch
            v-model="DarkMode"
            prepend-icon="fas fa-moon"
            color="#FFC107"
            inset
          />
        </v-container>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Mobile Side Menu -->
    <v-navigation-drawer
      v-if="mode.inMobile"
      v-model="drawer"
      app
      absolute
      temporary
      v-bind:style="mode.WrapperStyle"
      :dark="mode.isDark"
    >
      <v-toolbar
        v-bind:style="mode.WrapperStyle"
        :dark="mode.isDark"
        :elevation="0"
      >
        <v-list nav>
          <v-list-item>
            <v-list-item-avatar tile>
              <v-img src="../assets/Images/Portfolio.png" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Menu</v-list-item-title>
              <v-list-item-subtitle>Opty Portfolio</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-toolbar>
      <v-divider />
      <v-list nav>
        <v-list-item
          v-for="(item, i) in menuOptions"
          :key="i"
          :to="item.To"
          :href="item.Href"
          :target="item.Target"
          link
        >
          <v-list-item-action>
            <v-icon
              v-bind:class="mode.IconClassList"
              v-text="item.Icon"
              large
            />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.Name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { MenuOption, Mode } from "@/models/Types";

@Component
export default class AppToolbar extends Vue {
  readonly mode: Mode = this.$store.state.mode;

  drawer: boolean = false;

  set DarkMode(isDark: boolean) {
    this.$store.commit("modifyMode", isDark);
  }

  get DarkMode() {
    return this.mode.isDark;
  }

  readonly menuOptions: MenuOption[] = [
    {
      Name: "Home",
      Icon: "fas fa-igloo",
      To: "/Home",
    },
    {
      Name: "BSc",
      Icon: "fas fa-user-graduate",
      To: "/BSc",
    },
    {
      Name: "MSc",
      Icon: "fas fa-graduation-cap",
      To: "/MSc",
    },
    {
      Name: "Curriculum Vitae",
      Icon: "fas fa-id-card-alt",
      Href: "./OptyCV.pdf",
      Target: "_blank",
    },
    {
      Name: "Personal Projects",
      Icon: "fab fa-github",
      Href: "https://github.com/Opty-Projects",
      Target: "_blank",
    },
    {
      Name: "Certificates",
      Icon: "fas fa-certificate",
      Href: "https://github.com/RicardoGrade/Certificates",
      Target: "_blank",
    },
  ];
}
</script>

<style scoped>
.effect::before {
  opacity: 0.175 !important;
}

.no-effect::before {
  opacity: 0 !important;
}
</style>
