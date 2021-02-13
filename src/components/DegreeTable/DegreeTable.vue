<template>
  <v-card v-bind:style="mode.WrapperStyle" :dark="mode.isDark">
    <v-data-table
      class="transparent"
      :headers="Headers"
      :items="degree.SelectedCourses"
      :search="search"
      hide-default-footer
      disable-pagination
      :mobile-breakpoint="1200"
    >
      <template v-slot:top>
        <v-container fluid>
          <v-card-title :id="mode.inMobile ? 'cardTitleMobile' : 'cardTitle'">
            <degree-branches-menu />
            <v-spacer />
            <div class="mx-2" v-text="degree.SelectedBranch.Name" />
            <v-spacer />
            <div class="mx-2">
              Grades Average
              <v-chip
                class="mx-2"
                v-text="degree.SelectedCoursesAVG.toFixed(1)"
                v-bind:style="getGradeStyle(degree.SelectedCoursesAVG)"
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

  search: string = "";

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

  get Headers(): DataTableHeader[] {
    return this.degree.SelectedBranch.HasProjects
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

#cardTitleMobile {
  font-size: medium;
  line-height: 3;
}

#cardTitle {
  font-size: large;
}

a {
  font-size: medium;
  text-decoration: none;
}

.v-btn.v-size--default {
  font-size: large;
}
</style>
