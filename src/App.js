import * as React from 'react'
import './App.css'
import { ChakraProvider, Icon, Text } from '@chakra-ui/react'
import Nav from './components/nav'
import About from './components/about'
import theme from './theme'
import { FaRegHeart } from 'react-icons/fa'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className='App'>
        <Nav />
        <About />
      </div>
      <span className='footer'>
        <Text fontSize='xs'>Made with </Text>
        <Icon as={FaRegHeart}></Icon>
        <Text fontSize='xs'>by Brandon Symmers</Text>
      </span>
    </ChakraProvider>
  )
}

export default App
