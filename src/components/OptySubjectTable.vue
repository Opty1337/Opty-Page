<template>
  <v-card id="card">
    <v-data-table
      id="data-table"
      :headers="compHeaders"
      :items="compItems"
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
                <font-awesome-icon
                  class="light-blue--text ma-2"
                  :icon="groups[crrGid].icon"
                  size="2x"
                />
                Group
                <font-awesome-icon
                  class="light-blue--text ma-2"
                  :icon="['fas', 'chevron-down']"
                />
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(group, i) in getGroups()"
                :key="i"
                @click="crrGid = group.id"
                link
                :style="inMobile ? 'font-size: medium;' : 'font-size: large;'"
              >
                <font-awesome-icon class="mx-2" :icon="group.icon" size="2x" />
                <v-list-item-title class="mx-2" v-text="group.name" />
              </v-list-item>
            </v-list>
          </v-menu>
          <v-spacer />
          <div class="mx-2" v-text="groups[crrGid].name" />
          <v-spacer />
          <div class="mx-2">
            Subjects Average
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

      <template v-slot:item.name="{ item }">
        <a
          class="light-blue--text text--darken-3"
          :href="item.href"
          target="_blank"
          v-text="item.name"
        />
      </template>

      <template v-slot:item.github="{ item }">
        <v-btn :href="item.github" target="_blank" color="primary" icon>
          <font-awesome-icon :icon="['fab', 'github']" size="2x" />
        </v-btn>
      </template>

      <template v-slot:item.interest="{ item }"
        >{{ item.interest + "/10" }}
      </template>

      <template v-slot:item.score="{ item }">
        <v-chip :style="getScoreStyle(item.score)" v-text="item.score" label />
      </template>

      <template v-slot:item.ECTS="{ item }"
        >{{ item.ECTS.toFixed(1) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Subject } from "@/models/Subject";

const CES = 0;
const ES = 1;
const CCS = 2;

@Component
export default class Degree extends Vue {
  @Prop({ required: true })
  readonly subjects: any;

  inMobile: boolean = window.innerWidth < 1250;
  search: string = "";
  crrGid: number = CES;
  crrAvg: number = -1;
  groups: object[] = [
    {
      id: CES,
      name: "Computer Engineering Sciences",
      icon: ["fas", "laptop"]
    },
    {
      id: ES,
      name: "Engineering Sciences",
      icon: ["fas", "calculator"]
    },
    {
      id: CCS,
      name: "Cross-Cutting Skills",
      icon: ["fas", "cubes"]
    }
  ];
  headers: object[] = [
    [
      /* Computer Engineering Sciences Header */
      {
        text: "Name",
        value: "name",
        align: "left"
      },
      {
        text: "Projects",
        value: "github",
        align: "center",
        sortable: false,
        filterable: false
      },
      {
        text: "Grade",
        value: "score",
        align: "center"
      },
      {
        text: "ECTS",
        value: "ECTS",
        align: "center"
      },
      {
        text: "Period",
        value: "period",
        align: "center"
      },
      {
        text: "Year",
        value: "year",
        align: "center"
      },
      {
        text: "Interest",
        value: "interest",
        align: "center"
      }
    ],
    [
      /* Engineering Sciences Header */
      {
        text: "Name",
        value: "name",
        align: "left"
      },
      {
        text: "Grade",
        value: "score",
        align: "center"
      },
      {
        text: "ECTS",
        value: "ECTS",
        align: "center"
      },
      {
        text: "Period",
        value: "period",
        align: "center"
      },
      {
        text: "Year",
        value: "year",
        align: "center"
      },
      {
        text: "Interest",
        value: "interest",
        align: "center"
      }
    ],
    [
      /* Cross-Cutting Skills Header */
      {
        text: "Name",
        value: "name",
        align: "left"
      },
      {
        text: "Grade",
        value: "score",
        align: "center"
      },
      {
        text: "ECTS",
        value: "ECTS",
        align: "center"
      },
      {
        text: "Period",
        value: "period",
        align: "center"
      },
      {
        text: "Year",
        value: "year",
        align: "center"
      },
      {
        text: "Interest",
        value: "interest",
        align: "center"
      }
    ]
  ];
  items: Subject[] = [];

  async created() {
    this.loadData();
    window.addEventListener("resize", () => {
      this.inMobile = window.innerWidth < 1250;
    });
  }

  loadData() {
    this.subjects["Groups"]["CES"].forEach((s: any) => this.newSubject(CES, s));
    this.subjects["Groups"]["ES"].forEach((s: any) => this.newSubject(ES, s));
    this.subjects["Groups"]["CCS"].forEach((s: any) => this.newSubject(CCS, s));
  }

  newSubject(gid: number, subject: any) {
    this.items.push(
      new Subject(
        gid,
        subject["Name"],
        subject["Href"],
        subject["Score"],
        subject["Interest"],
        subject["ECTS"],
        subject["Period"],
        subject["Year"],
        subject["Github"]
      )
    );
  }

  get compHeaders() {
    return this.headers[this.crrGid];
  }

  get compItems() {
    return this.items.filter(e => e.gid == this.crrGid);
  }

  setAvg(items: Subject[]) {
    let ECTS = (this.crrAvg = 0);
    items.forEach(e => {
      this.crrAvg += e.score * e.ECTS;
      ECTS += e.ECTS;
    });
    this.crrAvg /= ECTS;
  }

  getGroups() {
    return this.groups.filter((e, id) => id != this.crrGid);
  }

  getScoreStyle(score: number) {
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
a {
  text-decoration: none;
  font-size: medium;
}

#data-table {
  background-color: transparent;
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
