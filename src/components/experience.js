import * as React from 'react'
import './experience.css'
import { Text } from '@chakra-ui/react'
import procurify from '../media/procurify.png'
import philips from '../media/philips.png'
import { motion } from 'framer-motion'

function Experience() {
  return (
    <motion.div className='experience-wrap' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className='experience-text'>
        <Text fontSize='lg' color='white'>
          Work Experience
        </Text>
        <Text fontSize='4xl' color='white'>
          My Past Internships
        </Text>
        <Text fontSize='sm' color='white' textAlign='center'>
          I&apos;ve had the opportunity to participate in 2 different full time internships, each being 8 months in duration
        </Text>
      </div>
      <div className='experience-cards'>
        <img className='experience-pics' src={procurify} alt='Procurify' />
        <img className='experience-pics' src={philips} alt='Philips' />
      </div>
    </motion.div>
  )
}

export default Experience
