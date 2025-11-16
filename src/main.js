import router from '@/router'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import PrimeVue from 'primevue/config'

import 'primeicons/primeicons.css'

import Aura from '@primeuix/themes/aura'
/* import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primevue/resources/primevue.min.css' */

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount('#app')
