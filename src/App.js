import * as React from 'react'
import './App.css'
import './components/about.css'
import { Icon, Text } from '@chakra-ui/react'
// import About from './components/about'
import Film from './components/film'
// import theme from './theme'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import Tech from './components/tech'
import { useMediaQuery } from 'react-responsive'

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const router = createHashRouter([
    {
      path: '/',
      element: <Tech isMobile={isTabletOrMobile} />
    },
    {
      path: '/film',
      element: <Film isMobile={isTabletOrMobile} />
    },
    {
      path: '/tech',
      element: <Tech isMobile={isTabletOrMobile} />
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
      <div className='footer'>
        <Text fontSize='xs'>
          Made with <Icon as={FaRegHeart} verticalAlign='sub'></Icon> by Brandon Symmers{' '}
        </Text>
      </div>
    </div>
  )
}

export default App
