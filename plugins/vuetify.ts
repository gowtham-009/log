// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/util/colors'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: colors.grey.darken1, // #E53935
              secondary: colors.red.lighten4, // #FFCDD2
              
            }
          },
        },
      },
  })
  app.vueApp.use(vuetify)
})




