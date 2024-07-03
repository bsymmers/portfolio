import * as React from 'react'
import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa6'
import './nav.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
function Nav() {
  return (
    <div className='navbar'>
      <Heading as='h3' size='lg'>
        Brandon Symmers
      </Heading>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to='/'>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to='/tech'>
            Tech
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to='/film'>
            Film
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* <BreadcrumbItem>
          <BreadcrumbLink href='#'>Food</BreadcrumbLink>
        </BreadcrumbItem> */}
      </Breadcrumb>
    </div>
  )
}

function NavMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div className='navbar'>
      <Heading as='h3' size='lg'>
        Brandon Symmers
      </Heading>
      <IconButton ref={btnRef} aria-label='Menu' icon={<GiHamburgerMenu />} size='md' onClick={onOpen} backgroundColor='white'>
        Open
      </IconButton>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} size='full'>
        <DrawerOverlay />
        <DrawerContent style={{ position: 'absolute' }}>
          <DrawerCloseButton alignSelf='center' />
          <DrawerHeader fontSize='4xl'>Menu</DrawerHeader>

          <DrawerBody display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Heading fontSize='4xl' as={Link} to='/'>
              About
            </Heading>
            <Heading fontSize='4xl' as={Link} to='/tech'>
              Tech
            </Heading>
            <Heading fontSize='4xl' as={Link} to='/film'>
              Film
            </Heading>
          </DrawerBody>

          <DrawerFooter justifyContent='center'>
            <Icon as={FaGithub} boxSize={8} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export { Nav, NavMobile }
