<template>
  <v-card id="card">
    <v-data-table
      class="transparent"
      :headers="compHeaders"
      :items="compSubjects"
      :search="search"
      @current-items="setAvg"
      hide-default-footer
      disable-pagination
    >
      <template v-slot:top>
        <v-card-title
          :style="
            inMobile
              ? 'font-size: medium; line-height: 3;'
              : 'font-size: large;'
          "
        >
          <v-menu transition="slide-y-transition" offset-y>
            <template v-slot:activator="{ on }">
              <v-btn class="secondary mx-2 py-8" elevation="5" v-on="on" dark>
                <div class="blue--text ma-2 fa-2x">
                  <font-awesome-icon
                    v-if="sKeysInfo[iKey].Mask === undefined"
                    :icon="sKeysInfo[iKey].Icon"
                    spin
                  />
                  <font-awesome-icon
                    v-else
                    :icon="sKeysInfo[iKey].Icon"
                    :mask="sKeysInfo[iKey].Mask"
                    transform="shrink-8"
                    spin
                  />
                </div>
                Branches
                <font-awesome-icon
                  class="blue--text ma-2"
                  :icon="['fas', 'chevron-down']"
                />
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(key, i) in compSKeysInfo"
                :key="i"
                @click="iKey = key"
                link
                :style="inMobile ? 'font-size: medium;' : 'font-size: large;'"
              >
                <div class="ma-2 fa-2x">
                  <font-awesome-icon
                    v-if="sKeysInfo[key].Mask === undefined"
                    :icon="sKeysInfo[key].Icon"
                  />
                  <font-awesome-icon
                    v-else
                    :icon="sKeysInfo[key].Icon"
                    :mask="sKeysInfo[key].Mask"
                    transform="shrink-8"
                  />
                </div>
                <v-list-item-title class="mx-2" v-text="sKeysInfo[key].Name" />
              </v-list-item>
            </v-list>
          </v-menu>
          <v-spacer />
          <div class="mx-2" v-text="sKeysInfo[iKey].Name" />
          <v-spacer />
          <div class="mx-2">
            Grades Average
            <v-chip
              class="mx-2"
              :style="getScoreStyle(crrAvg)"
              v-text="crrAvg.toFixed(1)"
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
      </template>

      <template v-slot:item.Name="{ item }">
        <a
          class="blue--text text--darken-4"
          :href="item.Href"
          target="_blank"
          v-text="item.Name"
        />
      </template>

      <template v-slot:item.Github="{ item }">
        <v-btn
          class="blue--text text--darken-4"
          :href="item.Github"
          target="_blank"
          icon
        >
          <font-awesome-icon
            class="fa-2x fa-spin-hover"
            :icon="['fab', 'github']"
          />
        </v-btn>
      </template>

      <template v-slot:item.Interest="{ item }">{{ item.Interest }}</template>

      <template v-slot:item.Score="{ item }">
        <v-chip :style="getScoreStyle(item.Score)" v-text="item.Score" label />
      </template>

      <template v-slot:item.ECTS="{ item }"
        >{{ item.ECTS.toFixed(1) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Subject, Subjects, SKeysInfo } from "@/models/Types";
// eslint-disable-next-line no-unused-vars
import { PropType } from "vue";
// eslint-disable-next-line no-unused-vars
import { DataTableHeader } from "vuetify";

@Component
export default class SubjectsTable extends Vue {
  @Prop({ type: Object as PropType<Subjects>, required: true })
  readonly subjects!: Subjects;
  @Prop({ type: Object as PropType<SKeysInfo>, required: true })
  readonly sKeysInfo!: SKeysInfo;
  @Prop({ type: String, required: true })
  iKey!: string;

  inMobile: boolean = window.innerWidth < 1250;
  search: string = "";
  crrAvg: number = -1;

  readonly headers: DataTableHeader[] = [
    {
      text: "Name",
      value: "Name",
      align: "start"
    },
    {
      text: "Grade [0, 20]",
      value: "Score",
      align: "center"
    },
    {
      text: "ECTS",
      value: "ECTS",
      align: "center"
    },
    {
      text: "Period",
      value: "Period",
      align: "center"
    },
    {
      text: "Year",
      value: "Year",
      align: "center"
    },
    {
      text: "Interest [0, 10]",
      value: "Interest",
      align: "center"
    }
  ];

  async created(): Promise<void> {
    window.addEventListener("resize", () => {
      this.inMobile = window.innerWidth < 1250;
    });
  }

  get compHeaders(): DataTableHeader[] {
    return this.sKeysInfo[this.iKey].HasProjects
      ? [
          ...this.headers.slice(undefined, 1),
          {
            text: "Projects",
            value: "Github",
            align: "center",
            sortable: false,
            filterable: false
          },
          ...this.headers.slice(1, undefined)
        ]
      : this.headers;
  }

  get compSubjects(): Subject[] {
    return this.subjects[this.iKey];
  }

  get compSKeysInfo(): string[] {
    return Object.keys(this.sKeysInfo).filter(key => key != this.iKey);
  }

  setAvg(subjects: Subject[]): void {
    let ECTS = (this.crrAvg = 0);
    for (let e of subjects) {
      this.crrAvg += e.Score * e.ECTS;
      ECTS += e.ECTS;
    }
    this.crrAvg /= ECTS;
  }

  getScoreStyle(score: number): string {
    let style = "font-size: medium; font-weight: normal;";
    if (score < 10) style += "background-color: #F44336; color: white;";
    else if (score < 15) style += "background-color: #FFC107; color: black;";
    else if (score < 18) style += "background-color: #CDDC39; color: black;";
    else style += "background-color: #4CAF50; color: white;";
    return style;
  }
}
</script>

<style scoped>
tr:hover .fa-spin-hover {
  animation: fa-spin 3s infinite linear;
}

a {
  text-decoration: none;
  font-size: medium;
}

.fa-spin {
  animation-duration: 3s;
}

.v-list-item__title {
  font-size: inherit;
}

.v-btn {
  font-weight: normal;
  letter-spacing: normal;
  text-indent: inherit;
  text-transform: none;
  white-space: normal;
}

.v-btn.v-size--default {
  font-size: large;
}
</style>
