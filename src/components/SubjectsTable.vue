<template>
  <v-card id="card">
    <v-data-table
      id="data-table"
      :headers="compHeader"
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
                  :icon="groups[crrGid].Icon"
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
                v-for="(gid, i) in compGroups"
                :key="i"
                @click="crrGid = gid"
                link
                :style="inMobile ? 'font-size: medium;' : 'font-size: large;'"
              >
                <font-awesome-icon
                  class="mx-2"
                  :icon="groups[gid].Icon"
                  size="2x"
                />
                <v-list-item-title class="mx-2" v-text="groups[gid].Name" />
              </v-list-item>
            </v-list>
          </v-menu>
          <v-spacer />
          <div class="mx-2" v-text="groups[crrGid].Name" />
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
          class="light-blue--text text--darken-3"
          :href="item.Href"
          target="_blank"
          v-text="item.Name"
        />
      </template>

      <template v-slot:item.Github="{ item }">
        <v-btn :href="item.Github" target="_blank" color="primary" icon>
          <font-awesome-icon :icon="['fab', 'github']" size="2x" />
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
import { Subject, Gid, Groups, Subjects } from "@/models/Types";
// eslint-disable-next-line no-unused-vars
import { PropType } from "vue";
// eslint-disable-next-line no-unused-vars
import { DataTableHeader } from "vuetify";

@Component
export default class SubjectsTable extends Vue {
  @Prop({ type: Object as PropType<Subjects>, required: true })
  readonly items!: Subjects;

  inMobile: boolean = window.innerWidth < 1250;
  search: string = "";
  crrGid: Gid = "CES";
  crrAvg: number = -1;

  readonly header: DataTableHeader[] = [
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
  readonly groups: Groups = {
    /* Computer Engineering Sciences Group */
    CES: {
      Name: "Computer Engineering Sciences",
      Icon: ["fas", "laptop"]
    },
    /* Engineering Sciences Group */
    ES: {
      Name: "Engineering Sciences",
      Icon: ["fas", "calculator"]
    },
    /* Cross-Cutting Skills Group */
    CCS: {
      Name: "Cross-Cutting Skills",
      Icon: ["fas", "cubes"]
    }
  };

  async created(): Promise<void> {
    window.addEventListener("resize", () => {
      this.inMobile = window.innerWidth < 1250;
    });
  }

  get compHeader(): DataTableHeader[] {
    return this.crrGid != "CES"
      ? this.header
      : [
          ...this.header.slice(undefined, 1),
          {
            text: "Projects",
            value: "Github",
            align: "center",
            sortable: false,
            filterable: false
          },
          ...this.header.slice(1, undefined)
        ];
  }

  get compItems(): Subject[] {
    return this.items[this.crrGid];
  }

  get compGroups(): Gid[] {
    return Object.keys(this.groups).filter(gid => gid != this.crrGid) as Gid[];
  }

  setAvg(items: Subject[]): void {
    let ECTS = (this.crrAvg = 0);
    for (let e of items) {
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
