import * as React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardFooter, Heading, Text, CardHeader, Image } from '@chakra-ui/react'
import Procurify from '../media/procurify_logo.jpg'
import Philips from '../media/philips-logo.jpg'
import JobDrawer from './job-drawer'
import './tech.css'
function ExperienceCard() {
  return (
    <div className='experience-cards'>
      <Card margin='2%'>
        <Image src={Procurify} margin='10%' alt='Procurify' borderRadius='lg' />
        <CardHeader>
          <Heading size='md'> Software Engineer</Heading>
          <Text>Procurify</Text>
        </CardHeader>
        <CardBody>
          <Text>🗓 January 2022 - August 2022</Text>
          <Text>📍 Vancouver, BC</Text>
        </CardBody>
        <CardFooter>
          <JobDrawer job='Procurify' side='left' />
        </CardFooter>
      </Card>
      <Card margin='2%'>
        <Image src={Philips} margin='10%' alt='Philips Healthtech' borderRadius='lg' />
        <CardHeader>
          <Heading size='md'> DevOps Engineer</Heading>
          <Text>Philips Healthtech</Text>
        </CardHeader>
        <CardBody>
          <Text>🗓 May 2021 - December 2021</Text>
          <Text>📍 Vancouver, BC</Text>
        </CardBody>
        <CardFooter>
          <JobDrawer job='Philips' side='right' />
        </CardFooter>
      </Card>
    </div>
  )
}
ExperienceCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  dates: PropTypes.string
}
export default ExperienceCard
