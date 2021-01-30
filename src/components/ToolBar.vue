<template>
  <div>
    <!-- TopBar -->
    <v-toolbar id="toolbar" dark>
      <v-app-bar-nav-icon v-if="inMobile" @click.stop="drawer = !drawer" />
      <v-spacer v-if="inMobile" />
      <v-toolbar-items>
        <v-btn to="/" active-class="no-effect" text>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="../assets/jpg/Portrait.jpg" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-toolbar-title v-text="pageTitle" />
            </v-list-item-content>
          </v-list-item>
        </v-btn>
      </v-toolbar-items>
      <v-spacer v-if="!inMobile" />
      <v-toolbar-items v-if="!inMobile">
        <v-btn
          active-class="effect"
          v-for="(item, i) in menuOptions"
          :key="i"
          :to="item.To"
          :target="item.Target"
          text
        >
          <font-awesome-icon
            class="light-blue--text ma-3"
            :icon="item.Icon"
            size="2x"
          />
          {{ item.Name }}
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
              <v-img src="../assets/jpg/Portrait.jpg" />
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
          v-for="(item, i) in menuOptions"
          :key="i"
          :to="item.To"
          :target="item.Target"
          link
        >
          <v-list-item-action>
            <font-awesome-icon
              class="light-blue--text"
              :icon="item.Icon"
              size="2x"
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
// eslint-disable-next-line no-unused-vars
import { MenuOption } from "@/models/Types";

@Component
export default class ToolBar extends Vue {
  readonly pageTitle: string = "Opty Page";

  inMobile: boolean = window.innerWidth < 1250;
  drawer: boolean = false;
  readonly menuOptions: MenuOption[] = [
    {
      Name: "Home",
      Icon: ["fas", "igloo"],
      To: "/"
    },
    {
      Name: "BSc",
      Icon: ["fas", "user-graduate"],
      To: "/BSc"
    },
    {
      Name: "MSc",
      Icon: ["fas", "graduation-cap"],
      To: "/MSc"
    },
    {
      Name: "Curriculum Vitae",
      Icon: ["fas", "id-card-alt"],
      To: "/CV",
      Target: "_blank"
    },
    {
      Name: "Personal Projects",
      Icon: ["fab", "github"],
      To: "/PP",
      Target: "_blank"
    },
    {
      Name: "Certificates",
      Icon: ["fas", "certificate"],
      To: "/Certificates",
      Target: "_blank"
    }
  ];

  async created(): Promise<void> {
    window.addEventListener("resize", () => {
      this.inMobile = window.innerWidth < 1250;
    });
  }
}
</script>

<style scoped>
#toolbar {
  background-color: rgba(15, 15, 15, 0.925);
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
  font-size: medium;
}
</style>
