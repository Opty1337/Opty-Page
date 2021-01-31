<template>
  <v-footer id="bar" padless>
    <v-card class="flex transparent pa-2">
      <v-card-text class="pa-1">
        <v-btn
          class="pa-6"
          v-for="(socialNet, i) in socialNetworks"
          :key="i"
          :href="socialNet.Href"
          target="_blank"
          icon
        >
          <font-awesome-icon
            class="blue--text text--darken-4"
            :icon="socialNet.Icon"
            size="2x"
          />
        </v-btn>
      </v-card-text>
      <v-card-text class="black--text pa-1"
        >Developed By Ricardo Grade
      </v-card-text>
      <v-card-text
        class="black--text pa-1"
        v-text="new Date().toDateString()"
      />
      <v-card-text class="pa-1">
        <v-btn
          class="secondary pa-6"
          href="https://github.com/Opty-Projects/Opty-Page"
          target="_blank"
          elevation="5"
        >
          <font-awesome-icon
            class="blue--text ma-2"
            :icon="['fab', 'github']"
            size="2x"
          />
          Source Code
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { SocialNetwork } from "@/models/Types";

@Component
export default class Footer extends Vue {
  readonly socialNetworks: SocialNetwork[] = [
    {
      Icon: ["fab", "github"],
      Href: "https://github.com/Opty1337"
    },
    {
      Icon: ["fab", "linkedin"],
      Href: "https://www.linkedin.com/in/RicardoGrade"
    },
    {
      Icon: ["fas", "envelope"],
      Href: "mailto:ricardo.grade@tecnico.ulisboa.pt"
    },
    {
      Icon: ["fab", "facebook-square"],
      Href: "https://www.facebook.com/Opty1337"
    },
    {
      Href: "https://discord.gg/TB86QHg",
      Icon: ["fab", "discord"]
    }
  ];
}
</script>

<style scoped>
.v-card__text {
  font-size: medium;
}

.theme--dark.v-card > .v-card__text {
  font-size: medium;
}

.v-btn {
  font-weight: normal;
  letter-spacing: normal;
  text-indent: inherit;
  text-transform: none;
  white-space: normal;
}

.v-btn.v-size--default {
  font-size: medium;
}
</style>
