import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueKonva from 'vue-konva' 

createApp(App)
  .use(vuetify)
  .use(vueKonva) // comment this line to solve the problem
  .mount('#app')
