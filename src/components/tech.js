import * as React from 'react'

import { Image, Text, Stack, Button } from '@chakra-ui/react'
import headshot from '../media/headshot-tech.jpg'
import { FiDownload } from 'react-icons/fi'
import Nav from './nav'
import pdf from '../media/cv.pdf'
import './tech.css'
import AboutTech from './about-tech'

function Tech() {
  return (
    <>
      <Nav />
      <div className='tech-main'>
        <div className='tech-text'>
          <Text fontSize='4xl' color='grey'>
            Hi! I&apos;m
          </Text>
          <Text fontSize='4xl'>Brandon Symmers </Text>
          <Text fontSize='4xl' color='grey'>
            Full Stack Engineer{' '}
          </Text>
          <Text fontSize='l' color='grey'>
            A new graduate from the University of British Columbia passionate about implementing front and backend infrastructure.
          </Text>
          <Stack direction='row' spacing={4} align='center' marginTop='2%'>
            <Button variant='solid' background='#283316' color='white'>
              Hire me!
            </Button>
            <a href={pdf}>
              <Button rightIcon={<FiDownload />} variant='outline' borderColor='#283316'>
                Download CV
              </Button>
            </a>
          </Stack>
        </div>

        <Image className='headshot' src={headshot} alt='Brandon Symmers' border='10px solid white' />
      </div>
      <AboutTech />
    </>
  )
}
export default Tech
