<template>
  <OptySubjectTable :subjects="degreeSubjects" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OptySubjectTable from "@/components/OptySubjectTable.vue";
import DegreeSubjects from "@/assets/DegreeSubjects.json";

@Component({
  components: { OptySubjectTable }
})
export default class Degree extends Vue {
  readonly degreeSubjects: any = DegreeSubjects;
}
</script>
