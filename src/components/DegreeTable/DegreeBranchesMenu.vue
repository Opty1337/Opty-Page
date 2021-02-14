<template>
  <v-menu transition="slide-y-transition" open-on-hover offset-y>
    <template v-slot:activator="{ on }">
      <v-btn class="ma-2 py-8 rounded-0" :elevation="10" v-on="on" outlined>
        <span
          class="ma-2 fa-stack periodicallySpin"
          v-bind:class="mode.IconClassList"
        >
          <i v-bind:class="[degree.SelectedBranch.Icon, 'fa-stack-2x']" />
          <i
            v-bind:class="[degree.SelectedBranch.Mask, 'fa-stack-1x']"
            v-bind:style="MaskStyle"
          />
        </span>
        <span>Branches</span>
        <v-icon class="ma-2" v-bind:class="mode.IconClassList" small
          >fas fa-chevron-down
        </v-icon>
      </v-btn>
    </template>
    <v-list v-bind:style="mode.WrapperStyle" :dark="mode.isDark">
      <v-list-item
        v-for="(key, i) in degree.UnselectedKeys"
        :key="i"
        @click="degree.SelectedKey = key"
        link
      >
        <v-list-item-title class="text-left">
          <span class="ma-2 fa-stack" v-bind:class="mode.IconClassList">
            <i v-bind:class="[degree.getBranch(key).Icon, 'fa-stack-2x']" />
            <i
              v-bind:class="[degree.getBranch(key).Mask, 'fa-stack-1x']"
              v-bind:style="MaskStyle"
            />
          </span>
          {{ degree.getBranch(key).Name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Mode, Style } from "@/models/Types";
import Degree from "@/models/Degree";

@Component
export default class DegreeBranchesMenu extends Vue {
  readonly mode: Mode = this.$store.state.mode;
  readonly degree: Degree = this.$store.state.degree;

  get MaskStyle(): Style {
    return { color: this.mode.WrapperStyle.backgroundColor };
  }
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
