<template>
  <CoursesTable :courses="courses" :s-keys-info="sKeysInfo" i-key="SP" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoursesTable from "@/components/CoursesTable.vue";
import MScCourses from "@/assets/json/MScCourses.json";
// eslint-disable-next-line no-unused-vars
import { SKeysInfo, Courses } from "@/models/Types";

@Component({
  components: { CoursesTable }
})
export default class MSc extends Vue {
  readonly courses: Courses = MScCourses;
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
