<template>
  <v-menu
    :dark="themeService.dark"
    transition="slide-y-transition"
    open-on-hover
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn class="ma-2 py-8 rounded-0" :elevation="10" v-on="on" outlined>
        <font-awesome-icon
          class="fa-2x ma-2 periodicallySpin"
          :icon="degreeService.branch.Icon"
          :mask="degreeService.branch.Mask"
          :transform="getBranchTransform(degreeService.branch)"
        />
        <span class="appText">Branches</span>
        <font-awesome-icon class="ma-2" :icon="['fas', 'chevron-down']" />
      </v-btn>
    </template>
    <v-list class="appBackground">
      <v-list-item
        v-for="(bKey, i) in degreeService.nonCurrentBranchKeys"
        :key="i"
        @click="degreeService.currentBranchKey = bKey"
        link
      >
        <font-awesome-icon
          class="fa-2x ma-2"
          :icon="degreeService.getBranchByKey(bKey).Icon"
          :mask="degreeService.getBranchByKey(bKey).Mask"
          :transform="getBranchTransform(degreeService.getBranchByKey(bKey))"
        />
        <v-list-item-title
          class="appText ma-2"
          v-text="degreeService.getBranchByKey(bKey).Name"
        />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PropType } from "vue";
import Branch from "@/models/Degree/Branch";
import DegreeService from "@/services/Degree/DegreeService";
import ThemeService from "@/services/ThemeService";

@Component
export default class DegreeBranchesMenu extends Vue {
  @Prop({ type: Object as PropType<DegreeService>, required: true })
  readonly degreeService!: DegreeService;
  readonly themeService = ThemeService.singleton;

  getBranchTransform(branch: Branch): string | undefined {
    return branch.Mask === undefined ? undefined : "shrink-8";
  }
}
</script>

<style scoped>
.periodicallySpin {
  animation: periodicallySpin 10s linear infinite;
}
</style>
