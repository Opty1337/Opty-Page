<template>
  <v-menu transition="slide-y-transition" open-on-hover offset-y>
    <template v-slot:activator="{ on }">
      <v-btn class="ma-2 py-8 rounded-0" :elevation="10" v-on="on" outlined>
        <font-awesome-icon
          class="periodicallySpin ma-2 fa-2x"
          v-bind:class="mode.IconClassList"
          :icon="degree.SelectedBranch.Icon"
          :mask="degree.SelectedBranch.Mask"
          :transform="
            degree.SelectedBranch.Mask === undefined ? undefined : 'shrink-8'
          "
        />
        <span>Branches</span>
        <font-awesome-icon
          class="ma-2"
          v-bind:class="mode.IconClassList"
          :icon="['fas', 'chevron-down']"
        />
      </v-btn>
    </template>
    <v-list v-bind:style="mode.WrapperStyle" :dark="mode.isDark">
      <v-list-item
        v-for="(key, i) in degree.UnselectedKeys"
        :key="i"
        @click="degree.SelectedKey = key"
        link
      >
        <font-awesome-icon
          class="ma-2 fa-2x"
          v-bind:class="mode.IconClassList"
          :icon="degree.getBranch(key).Icon"
          :mask="degree.getBranch(key).Mask"
          :transform="
            degree.getBranch(key).Mask === undefined ? undefined : 'shrink-8'
          "
        />
        <v-list-item-title class="ma-2" v-text="degree.getBranch(key).Name" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Mode } from "@/models/Types";
import Degree from "@/models/Degree";

@Component
export default class DegreeBranchesMenu extends Vue {
  readonly mode: Mode = this.$store.state.mode;
  readonly degree: Degree = this.$store.state.degree;
}
</script>

<style scoped>
.periodicallySpin {
  animation: periodicallySpin 10s linear infinite;
}

.v-btn {
  font-weight: normal;
  letter-spacing: normal;
  text-transform: none;
  text-decoration: none;
}

.v-btn.v-size--default {
  font-size: large;
}
</style>
