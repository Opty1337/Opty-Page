<template>
  <v-menu
    :dark="aService.dark"
    transition="slide-y-transition"
    open-on-hover
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn class="ma-2 py-8 rounded-0" :elevation="10" v-on="on" outlined>
        <font-awesome-icon
          class="fa-2x ma-2 periodicallySpin"
          :icon="cService.currentBranch.Icon"
          :mask="cService.currentBranch.Mask"
          :transform="
            cService.currentBranch.Mask === undefined ? undefined : 'shrink-8'
          "
        />
        <span class="appText">Branches</span>
        <font-awesome-icon class="ma-2" :icon="['fas', 'chevron-down']" />
      </v-btn>
    </template>
    <v-list class="appBackground">
      <v-list-item
        v-for="(bKey, i) in cService.nonCurrentBranchKeys"
        :key="i"
        @click="cService.currentBranchKey = bKey"
        link
      >
        <font-awesome-icon
          class="fa-2x ma-2"
          :icon="cService.cBranch(bKey).Icon"
          :mask="cService.cBranch(bKey).Mask"
          :transform="
            cService.cBranch(bKey).Mask === undefined ? undefined : 'shrink-8'
          "
        />
        <v-list-item-title
          class="appText ma-2"
          v-text="cService.cBranch(bKey).Name"
        />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppService from "@/services/App/AppService";
import CoursesService from "@/services/Courses/CoursesService";

@Component
export default class DegreeBranchesMenu extends Vue {
  readonly aService = AppService.singleton;
  readonly cService = CoursesService.singleton;
}
</script>

<style scoped>
.periodicallySpin {
  animation: periodicallySpin 10s linear infinite;
}
</style>
