<template>
  <v-data-table
    class="appBackground"
    :dark="themeService.dark"
    :headers="headers"
    :items="degreeService.branch.Courses"
    :search="search"
    hide-default-footer
    disable-pagination
    :mobile-breakpoint="1200"
  >
    <template v-slot:top>
      <v-container fluid>
        <v-card-title v-bind:style="cardTitleStyle">
          <degree-branches-menu :degree-service="degreeService" />
          <v-spacer />
          <div class="appText mx-2" v-text="degreeService.branch.Name" />
          <v-spacer />
          <div class="mx-2">
            <span class="appText">Weighted Average</span>
            <v-chip
              class="appText mx-2 pa-6 rounded-0"
              v-text="degreeService.branch.WeightedAVG.toFixed(1)"
              v-bind:style="getGradeStyle(degreeService.branch.WeightedAVG)"
            />
          </div>
          <v-spacer />
          <v-switch v-model="cDetails" label="Courses Details" inset />
          <v-spacer />
          <v-text-field
            class="mx-2"
            v-model="search"
            append-icon="$search"
            label="Search"
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
            :href="item.Href"
            target="_blank"
            v-bind="attrs"
            v-on="on"
            v-text="item.Name"
          />
        </template>
        <span class="appText">Course Page</span>
      </v-tooltip>
    </template>

    <template v-slot:[`item.Github`]="{ item }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :href="item.Github"
            target="_blank"
            v-bind="attrs"
            v-on="on"
            icon
          >
            <font-awesome-icon
              class="bodyIcon fa-2x periodicallySpinHover"
              :icon="['fab', 'github']"
            />
          </v-btn>
        </template>
        <span class="appText">Projects Repository</span>
      </v-tooltip>
    </template>

    <template v-slot:[`item.Grade`]="{ item }">
      <v-chip
        class="appText pa-6 rounded-0"
        v-bind:style="getGradeStyle(item.Grade)"
        v-text="item.Grade"
      />
    </template>

    <template v-slot:[`item.ECTS`]="{ item }">
      <span class="appText" v-text="item.ECTS.toFixed(1)" />
    </template>

    <template v-slot:[`item.Period`]="{ item }">
      <span class="appText" v-text="item.Period" />
    </template>

    <template v-slot:[`item.Year`]="{ item }">
      <span class="appText" v-text="item.Year" />
    </template>

    <template v-slot:[`item.Interest`]="{ item }">
      <span class="appText" v-text="item.Interest" />
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PropType } from "vue";
import { DataTableHeader } from "vuetify";
import Style from "@/models/Style";
import DegreeBranchesMenu from "@/components/DegreeTable/DegreeBranchesMenu.vue";
import DegreeService from "@/services/Degree/DegreeService";
import ThemeService from "@/services/ThemeService";
import DeviceService from "@/services/DeviceService";

@Component({
  components: { DegreeBranchesMenu },
})
export default class DegreeTable extends Vue {
  @Prop({ type: Object as PropType<DegreeService>, required: true })
  readonly degreeService!: DegreeService;
  readonly themeService = ThemeService.singleton;
  readonly deviceService = DeviceService.singleton;
  cDetails = false;
  search = "";

  get headers(): DataTableHeader[] {
    let headers: DataTableHeader[] = [
      {
        text: "Course",
        value: "Name",
        align: "start",
      },
    ];
    if (this.degreeService.branch.HasGithub) {
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
    if (this.cDetails) {
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
      style.backgroundColor = "rgba(75, 175, 80, 0.6)";
    } else if (grade >= 15) {
      style.backgroundColor = "rgba(205, 220, 55, 0.6)";
    } else if (grade >= 10) {
      style.backgroundColor = "rgba(255, 195, 5, 0.6)";
    } else {
      style.backgroundColor = "rgba(255, 85, 35, 0.6)";
    }
    return style;
  }

  get cardTitleStyle(): Style {
    return this.deviceService.inMobile
      ? {
          fontSize: "medium",
          lineHeight: 3,
        }
      : {
          fontSize: "large",
        };
  }
}
</script>

<style scoped>
a {
  font-size: medium;
  text-decoration: none;
}

tr:hover .periodicallySpinHover {
  animation: periodicallySpin 10s linear infinite;
}

.theme--light.v-data-table tr:hover {
  background: rgba(0, 0, 0, 0.05) !important;
}

.theme--dark.v-data-table tr:hover {
  background: rgba(255, 255, 255, 0.05) !important;
}

.v-data-table__mobile-row__header {
  font-weight: normal !important;
}
</style>
