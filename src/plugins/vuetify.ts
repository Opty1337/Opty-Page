import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { CUSTOM_ICONS } from "@/plugins/fontawesome";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "faSvg",
    values: CUSTOM_ICONS,
  },
});
