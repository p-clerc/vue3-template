// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/main.scss'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'myLightTheme',
    themes: {
      myLightTheme: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          primary: '#ef4135',
          'primary-darken-1': '#de2012',
          secondary: '#424242',
          'secondary-darken-1': '#212121',
          error: '#b00020',
          info: '#2196f3',
          success: '#13ce66',
          warning: '#ffb447',
        },
        variables: {},
      },
    },
  },
  components,
  directives
})
