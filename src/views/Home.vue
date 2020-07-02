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
                :class="inMobile ? 'mx-1' : 'mx-3'"
                color="primary"
                v-for="(link, i) in links"
                :key="i"
                :href="link.href"
                target="_blank"
                icon
              >
                <font-awesome-icon
                  :icon="link.icon"
                  :size="inMobile ? '2x' : '3x'"
                />
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
                  :size="inMobile ? '2x' : '3x'"
                />
              </v-list-item-icon>
              <v-list-item-content class="text-left" v-text="desc" />
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-3" no-gutters>
      <v-spacer />
      <v-btn
        class="pa-5"
        color="secondary"
        href="https://github.com/Opty1337/Opty-Page"
        target="_blank"
        dark
        :style="inMobile ? 'font-size: medium;' : 'font-size: large;'"
      >
        <font-awesome-icon
          class="ma-2"
          :icon="['fab', 'github']"
          size="2x"
        />Source Code
      </v-btn>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  inMobile: boolean = window.innerWidth < 1250;

  description: string[] = [
    "Hello! My name is Ricardo Grade. I am 21 Years old. I am a Master's Degree Student in Computer Science & Engineering @Instituto Superior Técnico.",
    "I am ambitious. I am guided by goals. I am always improving myself. Thanks to my creativity I can always find a simpler way to solve the problems to which I am challenged.",
    "I love to program. I love to be challenged. I like to solve difficult problems, think of solutions that no one thought of or discover better's."
  ];

  links: object[] = [
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

  async created() {
    window.addEventListener("resize", () => {
      this.inMobile = window.innerWidth < 1250;
    });
  }
}
</script>

<style scoped>
#card-1,
#card-2 {
  background-color: transparent;
}
#list {
  background-color: transparent;
  font-size: large;
}
.v-card__title {
  font-size: x-large;
}
.v-btn {
  font-weight: normal;
  letter-spacing: normal;
  text-indent: inherit;
  text-transform: none;
  white-space: normal;
}
.v-btn.v-size--default {
  font-size: large;
}
</style>
