<template>
  <v-data-table
    :headers="Headers"
    :items="degree.SelectedCourses"
    :search="search"
    hide-default-footer
    disable-pagination
    :mobile-breakpoint="1200"
    :dark="mode.isDark"
  >
    <template v-slot:top>
      <v-container fluid>
        <v-card-title v-bind:style="CardTitleStyle">
          <degree-branches-menu />
          <v-spacer />
          <div class="mx-2" v-text="degree.SelectedBranch.Name" />
          <v-spacer />
          <div class="mx-2">
            Grades Average
            <v-chip
              class="mx-2 pa-6 rounded-0"
              v-text="degree.SelectedCoursesAVG.toFixed(1)"
              v-bind:style="getGradeStyle(degree.SelectedCoursesAVG)"
            />
          </div>
          <v-spacer />
          <v-switch v-model="coursesDetails" label="Courses Details" inset />
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="fas fa-search"
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
            v-bind:class="mode.IconClassList"
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
            v-bind:class="mode.IconClassList"
            :href="item.Github"
            target="_blank"
            v-bind="attrs"
            v-on="on"
            icon
          >
            <v-icon class="periodicallySpinHover" large>fab fa-github</v-icon>
          </v-btn>
        </template>
        <span>Projects Repository</span>
      </v-tooltip>
    </template>

    <template v-slot:[`item.Grade`]="{ item }">
      <v-chip
        class="pa-6 rounded-0"
        v-bind:style="getGradeStyle(item.Grade)"
        v-text="item.Grade"
      />
    </template>

    <template v-slot:[`item.ECTS`]="{ item }"
      >{{ item.ECTS.toFixed(1) }}
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Mode, Style } from "@/models/Types";
import { DataTableHeader } from "vuetify";
import DegreeBranchesMenu from "@/components/DegreeTable/DegreeBranchesMenu.vue";
import Degree from "@/models/Degree";

@Component({
  components: { DegreeBranchesMenu },
})
export default class DegreeTable extends Vue {
  readonly mode: Mode = this.$store.state.mode;
  readonly degree: Degree = this.$store.state.degree;

  coursesDetails: boolean = false;
  search: string = "";

  get Headers(): DataTableHeader[] {
    let headers: DataTableHeader[] = [
      {
        text: "Course",
        value: "Name",
        align: "start",
      },
    ];
    if (this.degree.SelectedBranch.HasProjects) {
      headers.push({
        text: "Projects",
        value: "Github",
        align: "center",
        sortable: false,
        filterable: false,
      });
    }
    headers.push({
      text: "Grade [0 - 20]",
      value: "Grade",
      align: "center",
    });
    if (this.coursesDetails) {
      headers.push({
        text: "ECTS",
        value: "ECTS",
        align: "center",
      });
      headers.push({
        text: "Period",
        value: "Period",
        align: "center",
      });
      headers.push({
        text: "Year",
        value: "Year",
        align: "center",
      });
      headers.push({
        text: "Interest [0 - 10]",
        value: "Interest",
        align: "center",
      });
    }
    return headers;
  }

  getGradeStyle(grade: number): Style {
    const style: Style = {
      fontSize: "large",
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

  get CardTitleStyle(): Style {
    return this.mode.inMobile
      ? {
          fontSize: "medium",
          lineHeight: "3",
        }
      : {
          fontSize: "large",
        };
  }
}
</script>

<style scoped>
tr:hover .periodicallySpinHover {
  animation: periodicallySpin 10s linear infinite;
}
</style>
