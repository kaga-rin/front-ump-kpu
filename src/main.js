import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import "bootstrap";
import "jquery";
window.$ = window.jQuery = require("jquery");
import vSelect from "vue-select";

Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
import vueHeadful from "vue-headful";
Vue.component("vhd", vueHeadful);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUserCheck,
  faChartPie,
  faChartBar,
  faCalendarCheck,
  faCheck,
  faUser,
  faAddressBook,
  faSearch,
  faSpinner,
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([
  faHome,
  faUserCheck,
  faChartPie,
  faChartBar,
  faCalendarCheck,
  faCheck,
  faUser,
  faAddressBook,
  faSearch,
  faSpinner,
  faCheckCircle,
  faTimesCircle
]);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = true;
Vue.component("navbar", require("./components/navbar.vue").default);
Vue.component("foot", require("./components/footer.vue").default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
