<template>
  <v-card flat>
    <v-textarea
      v-for="desc in prof"
      :key="desc"
      solo
      name="input-7-4"
      label="About Me"
      v-text="desc"
    />
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  prof: string[] = [
    "Hello! My name is Ricardo Grade. I am 20 Years old. I am a 3rd Year Computer Science & Engineering Student @Instituto Superior Técnico",
    "Next semester I will finish my Degree and start my Master's in which I will spend a semester in the Erasmus Program.",
    "Being a little lazy increases my creativity. I can always find a simpler way to solve the problems to which I am challenged.",
    "I love to program. I love to be challenged. I like to solve difficult problems, think of solutions that no one thought of or discover better's."
  ];
}
</script>

<style scoped></style>
