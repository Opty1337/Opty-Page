<template>
  <v-card flat :dark="mode.isDark">
    <v-row no-gutters>
      <v-col class="ma-auto" cols="12" sm="12" md="12">
        <v-card-title class="justify-center" v-text="'<!-- Summary -->'" />
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="ma-6" no-gutters>
      <v-col class="ma-auto" cols="12" sm="4" md="4">
        <v-img
          class="ma-auto"
          src="../assets/Images/Portrait.jpg"
          max-width="65%"
        />
        <v-card-title class="justify-center oblique"
          >Ricardo Grade
        </v-card-title>
      </v-col>
      <v-col class="ma-auto" cols="12" sm="4" md="4">
        <v-list>
          <v-list-item v-for="desc in description" :key="desc">
            <v-list-item-icon>
              <v-icon class="deep-orange--text" large
                >fas fa-chevron-right
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content class="text-left" v-text="desc" />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Mode } from "@/models/Types";

@Component
export default class Home extends Vue {
  readonly mode: Mode = this.$store.state.mode;

  readonly description: string[] = [
    "Hi! My name is Ricardo Grade. I'm 21 Years old. I'm a Bologna MSc Student in Computer Science & Engineering @ Instituto Superior Técnico. In which I'm Specializing in Distributed Systems & Cyber-Security.",
    "I've a Scholarship within the Scope of the IST Project - Taguspark R&D Activities. In which I Develop & Maintain Functionalities of Applications to Support the Management of IST - Taguspark.",
    "I'm ambitious. I'm guided by goals. I'm always improving myself. Thanks to my creativity I can always find a simpler way to solve the problems to which I'm challenged.",
    "I love to program. I love to be challenged. I like to solve difficult problems, think of solutions that no one thought of or discover better's.",
  ];
}
</script>

<style scoped>
.v-list {
  background-color: transparent;
  font-size: large;
}

.v-card__title {
  font-size: x-large;
}

.oblique {
  font-style: oblique;
}
</style>
