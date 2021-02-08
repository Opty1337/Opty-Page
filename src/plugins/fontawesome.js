import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faIgloo,
  faUserGraduate,
  faGraduationCap,
  faProjectDiagram,
  faIdCardAlt,
  faCertificate,
  faEnvelope,
  faPhoneAlt,
  faArrowDown,
  faCalculator,
  faCubes,
  faChevronRight,
  faChevronDown,
  faLaptop,
  faTerminal,
  faLock,
  faCloud
} from "@fortawesome/free-solid-svg-icons";
import {
  faFortAwesome,
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faDiscord,
  faVuejs
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faIgloo,
  faUserGraduate,
  faGraduationCap,
  faProjectDiagram,
  faIdCardAlt,
  faCertificate,
  faEnvelope,
  faPhoneAlt,
  faArrowDown,
  faCalculator,
  faCubes,
  faChevronRight,
  faChevronDown,
  faLaptop,
  faTerminal,
  faFortAwesome,
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faDiscord,
  faLock,
  faCloud,
  faVuejs
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
