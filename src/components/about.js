import * as React from 'react'

import { Text, Icon } from '@chakra-ui/react'
import headshot from '../media/headshot.JPG'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import './about.css'
import { Nav, NavMobile } from './nav'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function About({ isMobile }) {
  return (
    <>
      {isMobile ? <NavMobile /> : <Nav />}
      <motion.div className='ab-main' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
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
        <img className='headshot' src={headshot} alt='Brandon Symmers' />
      </motion.div>
    </>
  )
}

About.propTypes = {
  isMobile: PropTypes.bool
}

export default About
