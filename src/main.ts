import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { errorPopup } from "@/libs/errorHandler"

Vue.config.productionTip = false

Vue.config.errorHandler = errorPopup

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
