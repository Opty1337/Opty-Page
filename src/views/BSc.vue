<template>
  <courses-table
    :courses="courses"
    :c-branches="cBranches"
    :pinned-c-branch-key="pinnedCBranchKey"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoursesTable from "@/components/CoursesTable/CoursesTable.vue";
import BScCourses from "@/assets/Data/BScCourses.json";
// eslint-disable-next-line no-unused-vars
import { CoursesBranches, Courses } from "@/models/Types";

@Component({
  components: { CoursesTable },
})
export default class BSc extends Vue {
  readonly courses: Courses = BScCourses;
  readonly pinnedCBranchKey: string = "CES";
  readonly cBranches: CoursesBranches = {
    CES: {
      Name: "Computer Engineering Sciences",
      HasProjects: true,
      Icon: ["fas", "laptop"],
    },
    ES: {
      Name: "Engineering Sciences",
      HasProjects: false,
      Icon: ["fas", "calculator"],
    },
    CCS: {
      Name: "Cross-Cutting Skills",
      HasProjects: false,
      Icon: ["fas", "cubes"],
    },
  };
}
</script>
