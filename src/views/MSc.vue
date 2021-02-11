<template>
  <courses-table :courses="courses" :c-branches="cBranches" c-branch-key="SP" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoursesTable from "@/components/CoursesTable/CoursesTable.vue";
import MScCourses from "@/assets/json/MScCourses.json";
// eslint-disable-next-line no-unused-vars
import { CoursesBranches, Courses } from "@/models/Types";

@Component({
  components: { CoursesTable },
})
export default class MSc extends Vue {
  readonly courses: Courses = MScCourses;
  readonly cBranches: CoursesBranches = {
    SP: {
      Name: "Specializations",
      HasProjects: true,
      Icon: ["fas", "lock"],
      Mask: ["fas", "cloud"],
    },
    CB: {
      Name: "Common Branch",
      HasProjects: true,
      Icon: ["fas", "cubes"],
    },
  };
}
</script>
