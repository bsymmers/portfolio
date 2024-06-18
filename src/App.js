import * as React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/nav'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className='App'>
        <Nav />
      </div>
    </ChakraProvider>
  )
}

export default App
