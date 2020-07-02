import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faUserGraduate,
  faProjectDiagram,
  faIdCardAlt,
  faCertificate,
  faEnvelope,
  faPhoneAlt,
  faChevronDown,
  faCalculator,
  faCode,
  faCubes,
  faChevronRight,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import {
  faFortAwesome,
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faDiscord,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faUserGraduate,
  faProjectDiagram,
  faIdCardAlt,
  faCertificate,
  faEnvelope,
  faPhoneAlt,
  faChevronDown,
  faCalculator,
  faCode,
  faCubes,
  faChevronRight,
  faLaptopCode,
  faFortAwesome,
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faDiscord,
  faCodepen
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
