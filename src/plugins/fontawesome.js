import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faUserGraduate,
  faProjectDiagram,
  faFilePdf,
  faMedal
} from "@fortawesome/free-solid-svg-icons";
import { faFortAwesome, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faUserGraduate,
  faProjectDiagram,
  faFilePdf,
  faMedal,
  faFortAwesome,
  faGithub
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
