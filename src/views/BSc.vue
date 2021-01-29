<template>
  <SubjectsTable :subjects="subjects" :s-keys-info="sKeysInfo" i-key="CES" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SubjectsTable from "@/components/SubjectsTable.vue";
import BScSubjects from "@/assets/BScSubjects.json";
// eslint-disable-next-line no-unused-vars
import { SKeysInfo, Subjects } from "@/models/Types";

@Component({
  components: { SubjectsTable }
})
export default class BSc extends Vue {
  readonly subjects: Subjects = BScSubjects;
  readonly sKeysInfo: SKeysInfo = {
    CES: {
      Name: "Computer Engineering Sciences",
      HasProjects: true,
      Icon: ["fas", "laptop"]
    },
    ES: {
      Name: "Engineering Sciences",
      HasProjects: false,
      Icon: ["fas", "calculator"]
    },
    CCS: {
      Name: "Cross-Cutting Skills",
      HasProjects: false,
      Icon: ["fas", "cubes"]
    }
  };
}
</script>
