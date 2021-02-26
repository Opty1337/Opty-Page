<template>
  <v-footer class="appBackground" :dark="themeService.dark">
    <v-card class="flex transparent pa-2" flat>
      <v-card-text class="pa-1">
        <v-tooltip v-for="(sNet, i) in sNetworks" :key="i" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="px-6 periodicallySpinHover"
              :href="sNet.Href"
              target="_blank"
              v-bind="attrs"
              v-on="on"
              icon
            >
              <font-awesome-icon class="fa-2x" :icon="sNet.Icon" />
            </v-btn>
          </template>
          <span v-text="sNet.Label" />
        </v-tooltip>
      </v-card-text>
      <v-card-text class="appText pa-2">
        &copy; Copyright {{ new Date().getFullYear() }}, Ricardo Grade
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
                class="fa-2x periodicallySpinHover"
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
import SocialNetwork from "@/models/SocialNetwork";
import SocialNetworks from "@/assets/Data/SocialNetworks.json";
import ThemeService from "@/services/ThemeService";

@Component
export default class AppFooter extends Vue {
  readonly themeService = ThemeService.singleton;
  readonly sNetworks: SocialNetwork[] = SocialNetworks;
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
