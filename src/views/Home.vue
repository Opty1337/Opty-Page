<template>
  <v-card id="card">
    <v-row no-gutters>
      <v-col class="ma-2" cols="11" sm="4" md="4">
        <v-fab-transition>
          <v-card class="transparent" flat>
            <v-card-title class="justify-center" v-text="'<!-- Welcome -->'" />
            <v-img src="../assets/jpg/Portrait.jpg" />
            <v-card-title class="justify-center oblique"
              >Ricardo Grade
            </v-card-title>
          </v-card>
        </v-fab-transition>
      </v-col>
      <v-col class="ma-2" cols="11" sm="7" md="7">
        <v-card class="transparent" flat>
          <v-card-title class="justify-center" v-text="'<!-- Summary -->'" />
          <v-list>
            <v-list-item v-for="desc in description" :key="desc">
              <v-list-item-icon>
                <font-awesome-icon
                  color="orangered"
                  :icon="['fas', 'chevron-right']"
                  size="2x"
                />
              </v-list-item-icon>
              <v-list-item-content class="text-left" v-text="desc" />
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  readonly description: string[] = [
    "Hi! My name is Ricardo Grade. I'm 21 Years old. I'm a Bologna Master's Degree Student in Information Systems & Computer Engineering @ Instituto Superior Técnico. In which I'm specializing in Distributed Systems & Cyber-Security.",
    "I have a Scholarship in Taguspark R&D Activities. My Role consists in the Development & Maintenance of Functionalities of Applications to Support the Management of Técnico-Taguspark.",
    "I'm ambitious. I'm guided by goals. I'm always improving myself. Thanks to my creativity I can always find a simpler way to solve the problems to which I'm challenged.",
    "I love to program. I love to be challenged. I like to solve difficult problems, think of solutions that no one thought of or discover better's."
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
