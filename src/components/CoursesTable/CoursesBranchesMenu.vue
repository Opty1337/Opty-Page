<template>
  <v-menu transition="slide-y-transition" open-on-hover offset-y>
    <template v-slot:activator="{ on }">
      <v-btn
        class="ma-2 py-8 blue--text text--darken-4"
        :elevation="10"
        v-on="on"
        outlined
      >
        <font-awesome-icon
          class="periodicallySpin ma-2 fa-2x"
          :icon="cBranches[cBranchKey].Icon"
          :mask="cBranches[cBranchKey].Mask"
          :transform="
            cBranches[cBranchKey].Mask === undefined ? undefined : 'shrink-8'
          "
        />
        <span class="black--text">Branches</span>
        <font-awesome-icon class="ma-2" :icon="['fas', 'chevron-down']" />
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(key, i) in cBranchesFilter()"
        :key="i"
        @click="onBranchChange(key)"
        link
      >
        <font-awesome-icon
          class="ma-2 fa-2x blue--text text--darken-4"
          :icon="cBranches[key].Icon"
          :mask="cBranches[key].Mask"
          :transform="
            cBranches[key].Mask === undefined ? undefined : 'shrink-8'
          "
        />
        <v-list-item-title class="ma-2" v-text="cBranches[key].Name" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component, Model, Prop } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { CoursesBranches } from "@/models/Types";
// eslint-disable-next-line no-unused-vars
import { PropType } from "vue";

@Component
export default class CoursesBranchesMenu extends Vue {
  @Model("onBranchChange", { type: String, required: true })
  cBranchKey!: string;
  @Prop({ type: Object as PropType<CoursesBranches>, required: true })
  readonly cBranches!: CoursesBranches;

  cBranchesFilter(): string[] {
    return Object.keys(this.cBranches).filter((key) => key != this.cBranchKey);
  }

  onBranchChange(key: string) {
    this.cBranchKey = key;
    this.$emit("onBranchChange", key);
  }
}
</script>

<style scoped>
.periodicallySpin {
  animation: periodicallySpin 10s linear infinite;
}

.fa-border {
  color: black;
  background-color: black;
}

.v-btn {
  font-weight: normal;
  letter-spacing: normal;
  text-transform: none;
  text-decoration: none;
  border-width: 2px;
}

.v-btn.v-size--default {
  font-size: large;
}
</style>
