import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import "./icons"

import MajIcon from "./components/Maj-Kit/MajIcon.vue"
import MajContainer from "./components/Maj-Kit/MajContainer.vue"
import MajDivider from "./components/Maj-Kit/MajDivider.vue"
import MajTitle from "./components/Maj-Kit/MajTitle.vue"
import MajParagraph from "./components/Maj-Kit/MajParagraph.vue"

const app = createApp(App)

app.use(router)

app
  .component("MajIcon", MajIcon)
  .component("MajContainer", MajContainer)
  .component("MajDivider", MajDivider)
  .component("MajTitle", MajTitle)
  .component("MajParagraph", MajParagraph)

app.mount("#app")
