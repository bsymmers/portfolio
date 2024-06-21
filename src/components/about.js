import * as React from 'react'

import { Image, Text, Icon } from '@chakra-ui/react'
import headshot from '../media/headshot.JPG'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import './about.css'
import Nav from './nav'

function About() {
  return (
    <>
      <Nav />
      <div className='ab-main'>
        <div className='ab-text'>
          <Text fontSize='3xl' color='white'>
            About me
          </Text>
          <Text fontSize='md' color='white'>
            Hi! I&apos;m Brandon. I&apos;m a 24 year old from Vancouver, BC who&apos;s passionate about web development, film photography,
            and cooking. Take a look around my website for a glimpse into my hobbies and feel free to get in touch!
          </Text>
          <div className='ab-buttons'>
            <a href='https://linkedin.com/in/bsymmers'>
              <Icon as={FaLinkedin} w={8} h={8} color='white' />
            </a>
            <a href='https://github.com/bsymmers'>
              <Icon as={FaGithub} w={8} h={8} color='white' />
            </a>
            <a href={`mailto:bsymmers@alum.ubc.ca`}>
              <Icon as={MdEmail} w={8} h={8} color='white' />
            </a>
          </div>
        </div>
        {/* <Box boxSize='sm'> */}
        <Image className='headshot' src={headshot} alt='Brandon Symmers' border='10px solid white' />
      </div>
    </>
  )
}
export default About
