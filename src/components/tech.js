import * as React from 'react'

import { Image, Text, Stack, Button } from '@chakra-ui/react'
import headshot from '../media/headshot-tech.jpg'
import { FiDownload } from 'react-icons/fi'
import { Nav, NavMobile } from './nav'
import pdf from '../media/cv.pdf'
import './tech.css'
import AboutTech from './about-tech'
import ContactCard from './contact-card'
import Experience from './experience'
import Projects from './projects'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function Tech({ isMobile }) {
  return (
    <>
      {isMobile ? <NavMobile /> : <Nav />}
      <motion.div className='tech-main' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <div className='tech-text'>
          <Text className='tech-text-item' fontSize='4xl' color='grey'>
            Hi! I&apos;m
          </Text>
          <Text className='tech-text-item' fontSize='4xl'>
            Brandon Symmers
          </Text>
          <Text className='tech-text-item' fontSize='4xl' color='grey'>
            Full Stack Engineer{' '}
          </Text>
          <Text fontSize='l' color='grey'>
            A new graduate from the University of British Columbia passionate about implementing front and backend infrastructure.
          </Text>
          <Stack direction='row' spacing={4} align='center' marginTop='2%'>
            <ContactCard />
            <a href={pdf}>
              <Button rightIcon={<FiDownload />} variant='outline' borderColor='#283316'>
                Download CV
              </Button>
            </a>
          </Stack>
        </div>
        <Image
          boxSize={isMobile ? 'xs' : 'lg'}
          className='headshot'
          src={headshot}
          alt='Brandon Symmers'
          border='10px solid white'
          display='flex'
        />
      </motion.div>
      <AboutTech isMobile={isMobile} />
      <Experience />
      <Projects />
    </>
  )
}

Tech.propTypes = {
  isMobile: PropTypes.bool
}
export default Tech
