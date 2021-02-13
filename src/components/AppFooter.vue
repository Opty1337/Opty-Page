<template>
  <v-footer id="bar" padless>
    <v-card class="flex transparent pa-2">
      <v-card-text class="pa-1">
        <v-tooltip v-for="(socialNet, i) in socialNetworks" :key="i" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="px-6 periodicallySpinHover"
              :href="socialNet.Href"
              target="_blank"
              v-bind="attrs"
              v-on="on"
              icon
            >
              <font-awesome-icon
                class="blue--text text--darken-4 fa-2x"
                :icon="socialNet.Icon"
              />
            </v-btn>
          </template>
          <span v-text="socialNet.Label" />
        </v-tooltip>
      </v-card-text>
      <v-card-text class="black--text pa-1">
        Ricardo Grade &#8226; {{ new Date().toDateString() }}
      </v-card-text>
      <v-card-text class="pa-1">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://github.com/Opty-Projects/Portfolio"
              target="_blank"
              v-bind="attrs"
              v-on="on"
              icon
            >
              <font-awesome-icon
                class="blue--text text--darken-4 fa-3x periodicallySpinHover"
                :icon="['fab', 'vuejs']"
              />
            </v-btn>
          </template>
          <span>Source Code</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { SocialNetwork } from "@/models/Types";

@Component
export default class AppFooter extends Vue {
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

.v-btn.v-size--default {
  font-size: medium;
}
</style>
