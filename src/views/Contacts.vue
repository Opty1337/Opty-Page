<template>
  <v-card flat>
    <!-- LinkedIn -->
    <div
      class="LI-profile-badge"
      data-version="v1"
      data-size="large"
      data-locale="pt_BR"
      data-type="vertical"
      data-theme="dark"
      data-vanity="ricardograde"
    >
      <a
        class="LI-simple-link"
        href="https://pt.linkedin.com/in/ricardograde?trk=profile-badge"
        >Ricardo Grade</a
      >
    </div>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Contacts extends Vue {
  async created() {
    this.loadScript("https://platform.linkedin.com/badges/js/profile.js");
  }
  async loadScript(src: string) {
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
}
</script>

<style scoped></style>
