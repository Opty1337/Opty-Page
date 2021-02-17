<template>
  <v-footer class="appBackground" :dark="aService.dark">
    <v-card class="flex transparent pa-2" flat>
      <v-card-text class="pa-1">
        <v-tooltip v-for="(sNet, i) in socialNetworks" :key="i" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="px-6 periodicallySpinHover"
              :href="sNet.Href"
              target="_blank"
              v-bind="attrs"
              v-on="on"
              icon
            >
              <font-awesome-icon class="bodyIcon fa-2x" :icon="sNet.Icon" />
            </v-btn>
          </template>
          <span class="appText" v-text="sNet.Label" />
        </v-tooltip>
      </v-card-text>
      <v-card-text class="appText pa-2">
        Ricardo Grade &bull; {{ new Date().toDateString() }}
      </v-card-text>
      <v-card-text class="pa-1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://github.com/Opty-Projects/Optyfolio"
              target="_blank"
              v-bind="attrs"
              v-on="on"
              icon
            >
              <font-awesome-icon
                class="bodyIcon fa-2x periodicallySpinHover"
                :icon="['fab', 'vuejs']"
              />
            </v-btn>
          </template>
          <span class="appText">Source Code</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppService from "@/services/App/AppService";
import { SocialNetwork } from "@/models/App";

@Component
export default class AppFooter extends Vue {
  readonly aService = AppService.singleton;

  readonly socialNetworks: SocialNetwork[] = [
    {
      Icon: ["fab", "github"],
      Href: "https://github.com/RicardoGrade",
      Label: "Github",
    },
    {
      Icon: ["fab", "linkedin"],
      Href: "https://www.linkedin.com/in/RicardoGrade",
      Label: "LinkedIn",
    },
    {
      Icon: ["fas", "envelope"],
      Href: "mailto:ricardo.grade@tecnico.ulisboa.pt",
      Label: "Mail",
    },
    {
      Icon: ["fab", "facebook-square"],
      Href: "https://www.facebook.com/Opty1337",
      Label: "Facebook",
    },
    {
      Href: "https://discord.gg/TB86QHg",
      Icon: ["fab", "discord"],
      Label: "Discord",
    },
  ];
}
</script>

<style scoped>
.periodicallySpinHover:hover {
  animation: periodicallySpin 10s linear infinite;
}

.v-card__text {
  font-size: medium;
}
</style>
