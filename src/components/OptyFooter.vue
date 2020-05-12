<template>
  <v-footer app padless dark absolute>
    <v-card v-bind:class="bindClass" flat tile>
      <v-card-text class="pa-2">
        <v-btn v-for="(link, i) in links" :key="i" :href="link.href" dark icon>
          <font-awesome-icon :icon="link.icon" size="2x" />
        </v-btn>
      </v-card-text>
      <v-divider />
      <!---->
      <v-card-text class="pa-2" v-text="date + ' - Ricardo Grade'" />
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class OptyFooter extends Vue {
  bindClass: string[] = ["blue", "darken-1", "flex"];

  date: string = new Date().toDateString();

  links: object = [
    {
      icon: ["fas", "envelope"],
      href: "mailto:gradericardo@hotmail.com"
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
    }
  ];
}
</script>

<style scoped>
.theme--dark.v-card > .v-card__text {
  color: white;
}
</style>
