import * as React from 'react'
import './App.css'
import { Icon, Text } from '@chakra-ui/react'
import Nav from './components/nav'
import About from './components/about'
import Film from './components/film'
// import theme from './theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Nav /> <About />
      </>
    )
  },
  {
    path: 'film',
    element: (
      <>
        <Nav /> <Film />
      </>
    )
  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
      <div className='footer'>
        <Text fontSize='xs'>Made with </Text>
        <Icon as={FaRegHeart}></Icon>
        <Text fontSize='xs'>by Brandon Symmers</Text>
      </div>
    </div>
  )
}

export default App
