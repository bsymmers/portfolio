import * as React from 'react'
import { Text, Image, Tab, Tabs, TabList, TabPanels, TabPanel, Icon } from '@chakra-ui/react'
import headshot from '../media/about-tech.jpg'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaPython, FaJava, FaHtml5, FaReact, FaGit, FaAws, FaDocker } from 'react-icons/fa'
import {
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiGnubash,
  SiPandas,
  SiScikitlearn,
  SiTerraform,
  SiPytest,
  SiKubernetes,
  SiCircleci,
  SiPostman
} from 'react-icons/si'
import { FaGolang } from 'react-icons/fa6'
import { motion } from 'framer-motion'

function AboutTech() {
  return (
    <motion.div className='tech-main' animate={{ x: 100 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Image className='headshot' src={headshot} alt='Brandon Symmers' border='10px solid white' />
      <div className='tech-text '>
        <Text fontSize='lg' color='grey'>
          ABOUT ME
        </Text>
        <Text fontSize='4xl'>
          A New Graduate with <Text as='b'>16 Months </Text> of Software Development Experience
        </Text>
        <Text fontSize='sm' color='grey'>
          Hey! I&apos;m Brandon. I&apos;m a fresh grad from
          <Text as='b'> the University of British Columbia </Text>
          who&apos;s passionate about full stack development. Over the course of my
          <Text as='b'> 5 years at UBC and during my 2 internships, </Text> I&apos;ve been able to build a strong foundation based on
          software best practices while being able to adapt to whatever tech stack is thrown at me!
        </Text>
        <Tabs variant='solid-rounded' colorScheme='olive' marginTop='5%' defaultIndex={0}>
          <TabList>
            <Tab>Languages</Tab>
            <Tab>Frameworks</Tab>
            <Tab>Tools</Tab>
          </TabList>
          <TabPanels>
            <TabPanel display='flex' justifyContent='space-between'>
              <Icon as={IoLogoJavascript} boxSize={8} />
              <Icon as={FaPython} boxSize={8} />
              <Icon as={FaJava} boxSize={8} />
              <Icon as={FaHtml5} boxSize={8} />
              <Icon as={SiGnubash} boxSize={8} />
              <Icon as={SiTypescript} boxSize={8} />
              <Icon as={SiCplusplus} boxSize={8} />
              <Icon as={SiMysql} boxSize={8} />
              <Icon as={FaGolang} boxSize={8} />
            </TabPanel>
            <TabPanel display='flex' justifyContent='space-between'>
              <Icon as={FaReact} boxSize={8} />
              <Icon as={SiPandas} boxSize={8} />
              <Icon as={SiScikitlearn} boxSize={8} />
              <Icon as={SiTerraform} boxSize={8} />
              <Icon as={SiPytest} boxSize={8} />
            </TabPanel>
            <TabPanel display='flex' justifyContent='space-between'>
              <Icon as={FaGit} boxSize={8} />
              <Icon as={FaAws} boxSize={8} />
              <Icon as={FaDocker} boxSize={8} />
              <Icon as={SiKubernetes} boxSize={8} />
              <Icon as={SiCircleci} boxSize={8} />
              <Icon as={SiPostman} boxSize={8} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default AboutTech
