import * as React from 'react'
import { Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import './nav.css'
function Nav() {
  return (
    <div className='navbar'>
      <Heading as='h3' size='lg'>
        Brandon Symmers
      </Heading>
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Projects</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Film</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Food</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default Nav
