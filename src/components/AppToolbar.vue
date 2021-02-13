<template>
  <div>
    <!-- TopBar -->
    <v-toolbar v-bind:style="mode.WrapperStyle" :dark="mode.isDark">
      <v-toolbar-items v-if="!mode.inMobile">
        <v-btn to="/" active-class="no-effect" text>
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
          <font-awesome-icon
            class="ma-3 fa-2x"
            v-bind:class="mode.IconClassList"
            :icon="item.Icon"
          />
          {{ item.Name }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items class="fill-height">
        <v-container>
          <v-switch
            v-model="Switch"
            :label="mode.isDark ? 'Darken' : 'Lighten'"
            inset
          ></v-switch>
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
      <v-toolbar v-bind:style="mode.WrapperStyle" :dark="mode.isDark">
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
            <font-awesome-icon
              class="fa-2x"
              v-bind:class="mode.IconClassList"
              :icon="item.Icon"
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

  set Switch(isDark: boolean) {
    this.$store.commit("changeTheme", isDark);
  }

  get Switch() {
    return this.mode.isDark;
  }

  readonly menuOptions: MenuOption[] = [
    {
      Name: "Home",
      Icon: ["fas", "igloo"],
      To: "/",
    },
    {
      Name: "BSc",
      Icon: ["fas", "user-graduate"],
      To: "/BSc",
    },
    {
      Name: "MSc",
      Icon: ["fas", "graduation-cap"],
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

.effect::before {
  opacity: 0.175 !important;
}

.no-effect::before {
  opacity: 0 !important;
}

.v-list-item .v-list-item__title {
  font-size: medium;
}
</style>
