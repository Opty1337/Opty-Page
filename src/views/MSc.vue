<template>
  <courses-table />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoursesTable from "@/components/CoursesTable/CoursesTable.vue";
import CoursesService from "@/services/Courses/CoursesService";

@Component({
  components: { CoursesTable },
})
export default class BSc extends Vue {
  created(): void {
    CoursesService.singleton.toMSc();
  }
}
</script>
