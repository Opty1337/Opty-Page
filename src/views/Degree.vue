<template>
  <SubjectsTable :items="degreeSubjects" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SubjectsTable from "@/components/SubjectsTable.vue";
import DegreeSubjects from "@/assets/DegreeSubjects.json";
// eslint-disable-next-line no-unused-vars
import { Subjects } from "@/models/Types";

@Component({
  components: { SubjectsTable }
})
export default class Degree extends Vue {
  readonly degreeSubjects: Subjects = DegreeSubjects;
}
</script>
