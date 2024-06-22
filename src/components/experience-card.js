import * as React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardFooter, Heading, Text, CardHeader, SimpleGrid, Image } from '@chakra-ui/react'
import Procurify from '../media/procurify_logo.jpg'
import Philips from '../media/philips-logo.jpg'
import JobDrawer from './job-drawer'
function ExperienceCard() {
  //   const procurifyDecs =
  //     '• Implemented a microservice and its subsequent REST API which facilitated the syncing of bills from our native app to Netsuite, allowing the company to greatly expand their customer base to include Netsuite customers' +
  //     '• Optimized existing Terraform infrastructure to reduce code duplication and costs of unused AWS services while provisioning new AWS services to better suite our needs' +
  //     '• Spearheaded the transition away from hashicorp vault to AWS Secrets manager, accordingly updating all environment variables in our codebase to reflect these changes' +
  //     '• Launched a proof of concept testing the feasability of replacing Terraform with AWS CDK aiming to explore the possibility for developers to provision their own infrastructure without outside DevOps support'
  //   const philipsDecs =
  //     '• Automated the process of onboarding / offboarding through building a full-stack web application that gave / withdrew access to different services such as AWS IAM, Slack, Jira' +
  //     '• Refactored/maintained Bamboo CI/CD pipelines, whilst working with development teams to create new ones depending on their needs, thus reducing their time dedicated to deployment' +
  //     '    • Supported software development teams through any server side complications & actively partook in their agile development processes'
  //   //   const getCompany = (n) => {
  //     if (n == 'Procurify') {
  //       //   imgWidth = '90%'
  //       return Procurify
  //     } else {
  //       //   imgWidth = '90%'
  //       return Philips
  //     }
  //   }
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
