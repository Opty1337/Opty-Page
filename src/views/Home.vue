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
                :href="link.Href"
                target="_blank"
                icon
              >
                <font-awesome-icon
                  :icon="link.Icon"
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
        class="secondary pa-6"
        href="https://github.com/Opty1337/Opty-Page"
        target="_blank"
        elevation="5"
      >
        <font-awesome-icon
          class="light-blue--text ma-2"
          :icon="['fab', 'github']"
          size="2x"
        />
        Source Code
      </v-btn>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { SocialNetwork } from "@/models/Types";

@Component
export default class Home extends Vue {
  inMobile: boolean = window.innerWidth < 1250;

  readonly description: string[] = [
    "Hello! My name is Ricardo Grade. I'm 21 Years old. I'm a Bologna Master's Degree Student in Information Systems & Computer Engineering @Instituto Superior Técnico. In which I'm specializing in Distributed Systems & Cybersecurity.",
    "I'm ambitious. I'm guided by goals. I'm always improving myself. Thanks to my creativity I can always find a simpler way to solve the problems to which I'm challenged.",
    "I love to program. I love to be challenged. I like to solve difficult problems, think of solutions that no one thought of or discover better's."
  ];

  readonly links: SocialNetwork[] = [
    {
      Href: "https://discord.gg/TB86QHg",
      Icon: ["fab", "discord"]
    },
    {
      Href: "https://www.facebook.com/ricardo.grade.1337",
      Icon: ["fab", "facebook-square"]
    },
    {
      Href: "https://www.linkedin.com/in/ricardograde",
      Icon: ["fab", "linkedin"]
    },
    {
      Href: "https://github.com/Opty1337",
      Icon: ["fab", "github"]
    },
    {
      Href: "mailto:gradericardo@hotmail.com",
      Icon: ["fas", "envelope"]
    }
  ];

  async created(): Promise<void> {
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
