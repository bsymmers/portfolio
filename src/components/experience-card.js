import * as React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardFooter, Heading, Text, CardHeader, SimpleGrid, Image } from '@chakra-ui/react'
import Procurify from '../media/procurify_logo.jpg'
import Philips from '../media/philips-logo.jpg'
import JobDrawer from './job-drawer'
function ExperienceCard() {
  return (
    <SimpleGrid spacing={20} templateColumns='1fr 1fr'>
      <Card>
        <Image src={Procurify} margin='10%' alt='Procurify' borderRadius='lg' />

        <CardHeader>
          <Heading size='md'> Software Engineer</Heading>
          <Text>Procurify</Text>
        </CardHeader>
        <CardBody>
          <Text>🗓 January 2022 - August 2022</Text>
          <Text>📍 Vancouver, BC</Text>
          {/* <Text>{philipsDecs}</Text> */}
        </CardBody>
        <CardFooter>
          <JobDrawer job='Procurify' side='left' />
        </CardFooter>
      </Card>
      <Card>
        <Image src={Philips} margin='10%' alt='Philips Healthtech' borderRadius='lg' />

        <CardHeader>
          <Heading size='md'> DevOps Engineer</Heading>
          <Text>Philips Healthtech</Text>
        </CardHeader>
        <CardBody>
          <Text>🗓 May 2021 - December 2021</Text>
          <Text>📍 Vancouver, BC</Text>
          {/* <Text>{procurifyDecs}</Text> */}
        </CardBody>
        <CardFooter>
          <JobDrawer job='Philips' side='right' />
        </CardFooter>
      </Card>
    </SimpleGrid>
  )
}
ExperienceCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  dates: PropTypes.string
}
export default ExperienceCard
