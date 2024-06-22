import * as React from 'react'
import './experience.css'
import { Text } from '@chakra-ui/react'
import ExperienceCard from './experience-card'
function Experience() {
  return (
    <div className='experience-wrap'>
      <div className='experience-text'>
        <Text fontSize='lg' color='white'>
          Work Experience
        </Text>
        <Text fontSize='4xl' color='white'>
          My Past Internships
        </Text>
        <Text fontSize='sm' color='white'>
          I&apos;ve had the opportunity to participate in 2 different full time internships, each being 8 months in duration
        </Text>
      </div>
      <div className='experience-cards'>
        <ExperienceCard name='Procurify' dates='January 2022 - August 2022' title='Backend Software Engineer' />
        {/* <ExperienceCard name='Philips Healthtech' dates='May 2021 - December 2021' title='DevOps Engineer' /> */}
      </div>
    </div>
  )
}

export default Experience
