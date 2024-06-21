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
  },
  colors: {
    olive: {
      50: '#ffffff',
      100: '#283316',
      200: '#1E2D13',
      600: '#142710',
      // 600: '#4A4F35',
      // 650: '#6A6A53',
      // // 600: '#868272',
      // 700: '#A19B91',
      // 800: '#BCB6B1',
      900: '#0A1B0E'

      // 50: '#0A1B0E',
      // 100: '#142710',
      // 200: '#1E2D13',
      // 600: '#283316',
      // 600: '#4A4F35',
      // 650: '#6A6A53',
      // // 600: '#868272',
      // 700: '#A19B91',
      // 800: '#BCB6B1',
      // 900: '#D7D2D0'
    }
  }
})

export default theme
