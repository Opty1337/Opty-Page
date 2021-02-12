<template>
  <v-card id="card">
    <v-data-table
      class="transparent"
      :headers="compHeaders"
      :items="compCourses"
      :search="search"
      @current-items="setAvg"
      hide-default-footer
      disable-pagination
    >
      <template v-slot:top>
        <v-container fluid>
          <v-card-title
            v-bind:style="{
              fontSize: inMobile ? 'medium' : 'large',
              lineHeight: inMobile ? 3 : undefined,
            }"
          >
            <courses-branches-menu
              :c-branches="cBranches"
              :c-branch-key="cBranchKey"
              v-on:c-branch-update="(key) => (cBranchKey = key)"
            />
            <v-spacer />
            <div class="mx-2" v-text="cBranches[cBranchKey].Name" />
            <v-spacer />
            <div class="mx-2">
              Grades Average
              <v-chip
                class="mx-2"
                v-text="average.toFixed(1)"
                v-bind:style="getGradeStyle(average)"
                label
              />
            </div>
            <v-spacer />
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              class="mx-2"
              single-line
              hide-details
            />
          </v-card-title>
        </v-container>
      </template>

      <template v-slot:[`item.Name`]="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <a
              class="blue--text text--darken-4"
              :href="item.Href"
              target="_blank"
              v-bind="attrs"
              v-on="on"
              v-text="item.Name"
            />
          </template>
          <span>Course Page</span>
        </v-tooltip>
      </template>

      <template v-slot:[`item.Github`]="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="blue--text text--darken-4"
              :href="item.Github"
              target="_blank"
              v-bind="attrs"
              v-on="on"
              icon
            >
              <font-awesome-icon
                class="fa-2x periodicallySpinHover"
                :icon="['fab', 'github']"
              />
            </v-btn>
          </template>
          <span>Projects Repository</span>
        </v-tooltip>
      </template>

      <template v-slot:[`item.Interest`]="{ item }"
        >{{ item.Interest }}
      </template>

      <template v-slot:[`item.Grade`]="{ item }">
        <v-chip
          v-bind:style="getGradeStyle(item.Grade)"
          v-text="item.Grade"
          label
        />
      </template>

      <template v-slot:[`item.ECTS`]="{ item }"
        >{{ item.ECTS.toFixed(1) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Course, Courses, CoursesBranches, Style } from "@/models/Types";
// eslint-disable-next-line no-unused-vars
import { PropType } from "vue";
// eslint-disable-next-line no-unused-vars
import { DataTableHeader } from "vuetify";
import CoursesBranchesMenu from "@/components/CoursesTable/CoursesBranchesMenu.vue";

@Component({
  components: { CoursesBranchesMenu },
})
export default class CoursesTable extends Vue {
  @Prop({ type: Object as PropType<Courses>, required: true })
  readonly courses!: Courses;
  @Prop({ type: Object as PropType<CoursesBranches>, required: true })
  readonly cBranches!: CoursesBranches;
  @Prop({ type: String, required: true })
  readonly pinnedCBranchKey!: string;

  cBranchKey: string = this.pinnedCBranchKey;
  inMobile: boolean = window.innerWidth < 1250;
  search: string = "";
  average: number = -1;

  readonly headers: DataTableHeader[] = [
    {
      text: "Course",
      value: "Name",
      align: "start",
    },
    {
      text: "Grade [0, 20]",
      value: "Grade",
      align: "center",
    },
    {
      text: "ECTS",
      value: "ECTS",
      align: "center",
    },
    {
      text: "Period",
      value: "Period",
      align: "center",
    },
    {
      text: "Year",
      value: "Year",
      align: "center",
    },
    {
      text: "Interest [0, 10]",
      value: "Interest",
      align: "center",
    },
  ];

  async created() {
    window.onresize = this.onResize;
  }

  onResize() {
    this.inMobile = window.innerWidth < 1350;
  }

  get compHeaders(): DataTableHeader[] {
    return this.cBranches[this.cBranchKey].HasProjects
      ? [
          ...this.headers.slice(undefined, 1),
          {
            text: "Projects",
            value: "Github",
            align: "center",
            sortable: false,
            filterable: false,
          },
          ...this.headers.slice(1, undefined),
        ]
      : this.headers;
  }

  get compCourses(): Course[] {
    return this.courses[this.cBranchKey];
  }

  setAvg(courses: Course[]): void {
    let ECTS = (this.average = 0);
    for (const e of courses) {
      this.average += e.Grade * e.ECTS;
      ECTS += e.ECTS;
    }
    this.average /= ECTS;
  }

  getGradeStyle(grade: number): Style {
    const style: Style = {
      fontSize: "medium",
      fontWeight: "normal",
    };
    if (grade >= 18) {
      style.backgroundColor = "#4CAF50";
      style.color = "white";
    } else if (grade >= 15) {
      style.backgroundColor = "#CDDC39";
      style.color = "black";
    } else if (grade >= 10) {
      style.backgroundColor = "#FFC107";
      style.color = "black";
    } else {
      style.backgroundColor = "#F44336";
      style.color = "white";
    }
    return style;
  }
}
</script>

<style scoped>
tr:hover .periodicallySpinHover {
  animation: periodicallySpin 10s linear infinite;
}

a {
  font-size: medium;
  text-decoration: none;
}

.v-btn.v-size--default {
  font-size: large;
}
</style>
