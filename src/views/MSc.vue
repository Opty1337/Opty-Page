<template>
  <SubjectsTable :subjects="subjects" :s-keys-info="sKeysInfo" i-key="SP" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SubjectsTable from "@/components/SubjectsTable.vue";
import MScSubjects from "@/assets/json/MScSubjects.json";
// eslint-disable-next-line no-unused-vars
import { SKeysInfo, Subjects } from "@/models/Types";

@Component({
  components: { SubjectsTable }
})
export default class MSc extends Vue {
  readonly subjects: Subjects = MScSubjects;
  readonly sKeysInfo: SKeysInfo = {
    SP: {
      Name: "Specializations",
      HasProjects: true,
      Icon: ["fas", "lock"],
      Mask: ["fas", "cloud"]
    },
    CB: {
      Name: "Common Branch",
      HasProjects: true,
      Icon: ["fas", "cubes"]
    }
  };
}
</script>
