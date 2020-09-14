import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap'
// import vuetify from "@/plugins/vuetify"

const app = createApp(App)
app.use(bootstrap)

app.mount('#app')
