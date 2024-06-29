import * as React from 'react'
import { Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import './nav.css'
import { Link } from 'react-router-dom'
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

export default Nav
