import { extendTheme } from '@chakra-ui/react'
import '@fontsource/dm-serif-display'
import '@fontsource/neuton'

const theme = extendTheme({
  fonts: {
    heading: `'Neuton', /neuton`,
    body: `'DM Serif Display', dm-serif-display`
  },
  styles: {
    global: {
      body: {
        color: '#283316'
      },
      heading: {
        color: '#283316'
      }
    }
  }
})

export default theme
