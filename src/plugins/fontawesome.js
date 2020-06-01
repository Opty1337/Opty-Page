import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faUserGraduate,
  faProjectDiagram,
  faFilePdf,
  faMedal,
  faEnvelope,
  faPhoneAlt,
  faChevronDown,
  faCalculator,
  faCode,
  faCubes
} from "@fortawesome/free-solid-svg-icons";
import {
  faFortAwesome,
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faUserGraduate,
  faProjectDiagram,
  faFilePdf,
  faMedal,
  faFortAwesome,
  faGithub,
  faEnvelope,
  faFacebookSquare,
  faLinkedin,
  faPhoneAlt,
  faDiscord,
  faChevronDown,
  faCalculator,
  faCode,
  faCubes
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
