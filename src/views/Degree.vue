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
              <v-btn class="transparent mx-2 pa-8" elevation="5" v-on="on">
                <font-awesome-icon :icon="groups[crrGid].icon" size="3x" />
                <font-awesome-icon
                  class="mx-2 primary--text"
                  :icon="['fas', 'arrow-down']"
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
        <a :href="item.href" target="_blank" v-text="item.name" />
      </template>

      <template v-slot:item.github="{ item }">
        <v-btn :href="item.github" target="_blank" color="primary" icon>
          <font-awesome-icon :icon="['fab', 'github']" size="3x" />
        </v-btn>
      </template>

      <template v-slot:item.interest="{ item }">{{
        item.interest + "/10"
      }}</template>

      <template v-slot:item.score="{ item }">
        <v-chip :style="getScoreStyle(item.score)" v-text="item.score" label />
      </template>

      <template v-slot:item.ECTS="{ item }">{{
        item.ECTS.toFixed(1)
      }}</template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Subject } from "@/models/Subject";

const CES = 0;
const ES = 1;
const CCS = 2;

@Component
export default class Degree extends Vue {
  inMobile: boolean = window.innerWidth < 1250;
  search: string = "";
  crrGid: number = CES;
  crrAvg: number = -1;
  groups: object[] = [
    {
      id: CES,
      name: "Computer Engineering Sciences",
      icon: ["fas", "laptop-code"]
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
  items!: Subject[];

  async created() {
    this.loadData();
    window.addEventListener("resize", () => {
      this.inMobile = window.innerWidth < 1250;
    });
  }

  loadData() {
    this.items = [
      /* Year 3, Sem. 2 */
      new Subject(
        CES,
        "Software Engineering",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/ESof96451113264/2019-2020/2-semestre",
        20,
        10,
        7.5,
        "Year 3, Sem. 2",
        "2019/2020",
        "https://github.com/Opty1337/Quizzes-Tutor"
      ),
      new Subject(
        CES,
        "Distributed Systems",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/SDis151113264/2019-2020/2-semestre",
        19,
        10,
        7.5,
        "Year 3, Sem. 2",
        "2019/2020",
        "https://github.com/Opty1337/DS"
      ),
      new Subject(
        CES,
        "Compilers",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/Com564511132624/2019-2020/2-semestre",
        18,
        9,
        6,
        "Year 3, Sem. 2",
        "2019/2020",
        "https://github.com/Opty1337/Comp"
      ),
      new Subject(
        CES,
        "Systems Analysis & Modeling",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/AMS1113264/2019-2020/2-semestre",
        15,
        7,
        6,
        "Year 3, Sem. 2",
        "2019/2020",
        "https://github.com/Opty1337/SAM"
      ),
      new Subject(
        CCS,
        "Computing & Society",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/CS1113264/2019-2020/2-semestre",
        17,
        5,
        3,
        "Year 3, Sem. 2",
        "2019/2020"
      ),
      /* Year 3, Sem. 1 */
      new Subject(
        CES,
        "Computer Networks",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/RC9179577/2019-2020/1-semestre",
        20,
        10,
        6,
        "Year 3, Sem. 1",
        "2019/2020",
        "https://github.com/Opty1337/CN"
      ),
      new Subject(
        CES,
        "Artificial Intelligence",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/IArt9179577/2019-2020/1-semestre",
        18,
        9,
        7.5,
        "Year 3, Sem. 1",
        "2019/2020",
        "https://github.com/Opty1337/AI"
      ),
      new Subject(
        CES,
        "Databases",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/BD8179577/2019-2020/1-semestre",
        19,
        8,
        6,
        "Year 3, Sem. 1",
        "2019/2020",
        "https://github.com/Opty1337/DB"
      ),
      new Subject(
        CES,
        "Computer Graphics",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/CGra8179577/2019-2020/1-semestre",
        18,
        8,
        4.5,
        "Year 3, Sem. 1",
        "2019/2020",
        "https://github.com/Opty1337/CG"
      ),
      new Subject(
        CES,
        "Computer Organization",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/OC12179577/2019-2020/1-semestre",
        18,
        7,
        6,
        "Year 3, Sem. 1",
        "2019/2020",
        "https://github.com/Opty1337/CO"
      ),
      /* Year 2, Sem. 2 */
      new Subject(
        ES,
        "Probability & Statistics",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/PEst20111326/2018-2019/2-semestre",
        18,
        8,
        6,
        "Year 2, Sem. 2",
        "2018/2019"
      ),
      new Subject(
        CES,
        "Algorithms Analysis & Synthesis",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/ASA10111326/2018-2019/2-semestre",
        16,
        8,
        6,
        "Year 2, Sem. 2",
        "2018/2019",
        "https://github.com/Opty1337/AAS"
      ),
      new Subject(
        ES,
        "Computer Theory",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/TCom111326/2018-2019/2-semestre",
        19,
        7,
        4.5,
        "Year 2, Sem. 2",
        "2018/2019"
      ),
      new Subject(
        CES,
        "Human Machine Interfaces",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/IPM17111326/2018-2019/2-semestre",
        15,
        7,
        7.5,
        "Year 2, Sem. 2",
        "2018/2019",
        "https://github.com/Opty1337/HMI"
      ),
      new Subject(
        ES,
        "Electromagnetism & Optics",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/EO9111326/2018-2019/2-semestre",
        18,
        6,
        6,
        "Year 2, Sem. 2",
        "2018/2019"
      ),
      /* Year 2, Sem. 1 */
      new Subject(
        CES,
        "Operating Systems",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/SO717957/2018-2019/1-semestre",
        19,
        10,
        6,
        "Year 2, Sem. 1",
        "2018/2019",
        "https://github.com/Opty1337/OS"
      ),
      new Subject(
        CES,
        "Object Oriented Programming",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/PO1717957/2018-2019/1-semestre",
        19,
        9,
        6,
        "Year 2, Sem. 1",
        "2018/2019",
        "https://github.com/Opty1337/OOP"
      ),
      new Subject(
        ES,
        "Mechanics & Waves",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/MO317957/2018-2019/1-semestre",
        17,
        6,
        6,
        "Year 2, Sem. 1",
        "2018/2019"
      ),
      new Subject(
        ES,
        "Complex Analysis & Differential Equations",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/ACED2117957/2018-2019/1-semestre",
        15,
        6,
        7.5,
        "Year 2, Sem. 1",
        "2018/2019"
      ),
      new Subject(
        CCS,
        "Management",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/Ges1117957/2018-2019/1-semestre",
        16,
        5,
        4.5,
        "Year 2, Sem. 1",
        "2018/2019"
      ),
      /* Year 1, Sem. 2 */
      new Subject(
        CES,
        "Algorithms & Data Structures Introduction",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/IAED10111326/2017-2018/2-semestre",
        19,
        10,
        7.5,
        "Year 1, Sem. 2",
        "2017/2018",
        "https://github.com/Opty1337/ADSI"
      ),
      new Subject(
        ES,
        "Discrete Mathematics",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/MD5111326/2017-2018/2-semestre",
        19,
        9,
        7.5,
        "Year 1, Sem. 2",
        "2017/2018"
      ),
      new Subject(
        CES,
        "Programming Logic",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/LP5111326/2017-2018/2-semestre",
        20,
        7,
        7.5,
        "Year 1, Sem. 2",
        "2017/2018",
        "https://github.com/Opty1337/PL"
      ),
      new Subject(
        ES,
        "Differential & Integral Calculus II",
        "https://cdi2tp.math.tecnico.ulisboa.pt/?semestre=2017_2",
        14,
        6,
        7.5,
        "Year 1, Sem. 2",
        "2017/2018"
      ),
      /* Year 1, Sem. 1 */
      new Subject(
        CES,
        "Programming Fundamentals",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/FP1795/2017-2018/1-semestre",
        19,
        10,
        7.5,
        "Year 1, Sem. 1",
        "2017/2018",
        "https://github.com/Opty1337/PF"
      ),
      new Subject(
        ES,
        "Linear Algebra",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/AL291795-2/2017-2018/1-semestre",
        19,
        8,
        6,
        "Year 1, Sem. 1",
        "2017/2018"
      ),
      new Subject(
        CES,
        "Computer Architecture Introduction",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/IAC31795/2017-2018/1-semestre",
        18,
        7,
        7.5,
        "Year 1, Sem. 1",
        "2017/2018",
        "https://github.com/Opty1337/CAI"
      ),
      new Subject(
        ES,
        "Differential & Integral Calculus I",
        "https://cdi1tp.math.tecnico.ulisboa.pt/?semestre=2017_1",
        16,
        6,
        6,
        "Year 1, Sem. 1",
        "2017/2018"
      ),
      new Subject(
        CCS,
        "Computer Engineering Introduction",
        "https://fenix.tecnico.ulisboa.pt/disciplinas/IEI71795/2017-2018/1-semestre",
        16,
        5,
        3,
        "Year 1, Sem. 1",
        "2017/2018"
      )
    ];
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
</style>
