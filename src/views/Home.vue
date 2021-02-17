<template>
  <v-card class="appBackground" :dark="aService.dark" flat>
    <v-row no-gutters>
      <v-col class="ma-auto" cols="12" sm="12" md="12">
        <v-card-title
          class="appText justify-center"
          v-text="'<!-- Summary -->'"
        />
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="ma-6" no-gutters>
      <v-col class="ma-auto" cols="12" sm="6" md="6" lg="4">
        <v-img
          class="ma-auto rounded-circle"
          src="../assets/Images/Portrait.jpg"
          max-width="65%"
        />
        <v-card-title class="appText justify-center oblique"
          >Ricardo Grade
        </v-card-title>
      </v-col>
      <v-col class="ma-auto" cols="12" sm="6" md="6" lg="4">
        <v-list class="transparent">
          <v-list-item v-for="desc in description" :key="desc">
            <v-list-item-icon>
              <font-awesome-icon
                class="bodyIcon fa-2x"
                :icon="['fas', 'chevron-right']"
              />
            </v-list-item-icon>
            <v-list-item-content class="appText text-left" v-text="desc" />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppService from "@/services/App/AppService";

@Component
export default class Home extends Vue {
  readonly aService = AppService.singleton;

  readonly description: string[] = [
    "Hi! My name is Ricardo Grade. I'm 21 Years old. I'm a Bologna MSc Student in Computer Science & Engineering @ Instituto Superior Técnico. In which I'm Specializing in Distributed Systems & Cyber-Security.",
    "I've a Scholarship within the Scope of the IST Project - Taguspark R&D Activities. In which I Develop & Maintain Functionalities of Applications to Support the Management of IST - Taguspark.",
    "I'm ambitious. I'm guided by goals. I'm always improving myself. Thanks to my creativity I can always find a simpler way to solve the problems to which I'm challenged.",
    "I love to program. I love to be challenged. I like to solve difficult problems, think of solutions that no one thought of or discover better's.",
  ];
}
</script>

<style scoped>
.v-card__title {
  font-size: x-large !important;
}

.v-list-item {
  font-size: large;
}

.oblique {
  font-style: oblique;
}
</style>
