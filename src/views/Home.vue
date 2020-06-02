<template>
  <v-card id="card">
    <v-row no-gutters>
      <v-col class="ma-2" cols="11" sm="4" md="4">
        <v-fab-transition>
          <v-card id="card-1" flat>
            <v-card-title class="justify-center" v-text="'<!-- Welcome -->'" />
            <v-img src="../assets/Perfil.jpg" />
            <v-card-title class="justify-center">Ricardo Grade</v-card-title>
            <!-- Contacts -->
            <v-card-text>
              <v-btn
                class="mx-2"
                color="primary"
                v-for="(link, i) in links"
                :key="i"
                :href="link.href"
                target="_blank"
                icon
              >
                <font-awesome-icon :icon="link.icon" size="3x" />
              </v-btn>
            </v-card-text>
          </v-card>
        </v-fab-transition>
      </v-col>
      <v-col class="ma-2" cols="11" sm="7" md="7">
        <v-card id="card-2" flat>
          <v-card-title class="justify-center" v-text="'<!-- Profile -->'" />
          <v-list id="list">
            <v-list-item v-for="desc in description" :key="desc">
              <v-list-item-icon>
                <font-awesome-icon
                  color="orangered"
                  :icon="['fas', 'chevron-right']"
                  size="3x"
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
  description: string[] = [
    "Hello! My name is Ricardo Grade. I am 21 Years old. I am a 3rd Year Computer Science & Engineering Student @Instituto Superior Técnico.",
    "This semester I will finish my Degree and start my Master's in which I will spend a semester in the Erasmus Program.",
    "Thanks to my creativity I can always find a simpler way to solve the problems to which I am challenged.",
    "I love to program. I love to be challenged. I like to solve difficult problems, think of solutions that no one thought of or discover better's."
  ];

  links: object = [
    {
      icon: ["fab", "discord"],
      href: "https://discord.gg/TB86QHg"
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
.v-card__title {
  font-size: x-large;
}
#card {
  background-color: rgba(255, 255, 255, 0.925);
  margin: 2%;
  padding: 0 2% 0 2%;
}
#card-1,
#card-2 {
  background-color: transparent;
}
#list {
  background-color: transparent;
  font-size: large;
}
</style>
