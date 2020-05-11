<template>
  <v-footer padless dark fixed>
    <v-card class="flex indigo lighten-1" flat tile>
      <v-card-text>
        <v-btn v-for="(link, i) in links" :key="i" :href="link.href" dark icon>
          <font-awesome-icon :icon="link.icon" size="2x" />
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ getDate() }} - Ricardo Grade
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class OptyFooter extends Vue {
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

  getDate() {
    return new Date().toDateString();
  }
}
</script>

<style scoped></style>
