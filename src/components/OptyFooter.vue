<template>
  <v-footer app padless dark absolute>
    <v-card v-bind:class="bindClass" flat tile>
      <!-- Contacts -->
      <v-card-text class="pa-2">
        <v-btn v-for="(link, i) in links" :key="i" :href="link.href" dark icon>
          <font-awesome-icon :icon="link.icon" size="2x" />
        </v-btn>
      </v-card-text>
      <v-divider />
      <!-- Author -->
      <v-card-text class="pa-2" v-text="date + ' - Ricardo Grade'" />
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class OptyFooter extends Vue {
  bindClass: string[] = ["light-blue", "darken-2", "flex"];

  date: string = new Date().toDateString();

  links: object = [
    {
      icon: ["fab", "discord"],
      href: "https://discord.gg/sXMSwTy"
    },
    {
      icon: ["fab", "facebook-square"],
      href: "https://www.facebook.com/ricardo.grade.1337"
    },
    {
      icon: ["fab", "linkedin"],
      href: "https://www.linkedin.com/in/ricardograde"
    },
    {
      icon: ["fab", "github"],
      href: "https://github.com/Opty1337"
    },
    {
      icon: ["fas", "envelope"],
      href: "mailto:gradericardo@hotmail.com"
    }
  ];
}
</script>

<style scoped>
.theme--dark.v-card > .v-card__text {
  color: white;
}
</style>
