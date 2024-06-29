import * as React from 'react'
import { Image, Text, Icon, UnorderedList, ListItem } from '@chakra-ui/react'
import Terrascan from '../media/Terrascan.png'
import CognateTranslator from '../media/Cognate-Translator.png'
import PropTypes from 'prop-types'

import { IoLogoJavascript } from 'react-icons/io5'
import { FaReact, FaAws, FaGolang, FaHtml5, FaPython } from 'react-icons/fa6'

function LeftDescTerrascan() {
  return (
    <div className='left-desc'>
      <Image id='Terrascan-IMG' src={Terrascan}></Image>
      <div className='topHeader'>
        <Icon as={IoLogoJavascript} boxSize={'20%'} color='white' />
        <Icon as={FaReact} boxSize={'20%'} color='white' />
        <Icon as={FaAws} boxSize={'20%'} color='white' />
      </div>
    </div>
  )
}

function LeftDescCt() {
  return (
    <div className='left-desc'>
      <Image id='Terrascan-IMG' src={CognateTranslator}></Image>
      <div className='topHeader'>
        <Icon as={IoLogoJavascript} boxSize={'20%'} color='white' />
        <Icon as={FaReact} boxSize={'20%'} color='white' />
        <Icon as={FaGolang} boxSize={'20%'} color='white' />
        <Icon as={FaHtml5} boxSize={'20%'} color='white' />
      </div>
    </div>
  )
}

function LeftDescRo() {
  return (
    <div className='left-desc'>
      {/* <Image id='Terrascan-IMG' src={Tracer}></Image> */}
      <iframe
        src='https://drive.google.com/file/d/1oa341JJRY_7ZT6IQ0ygtZhj-emKMs_tT/preview'
        width='640'
        height='480'
        allow='autoplay'
        id='Terrascan-IMG'
      ></iframe>
      <div className='topHeader'>
        <Icon as={IoLogoJavascript} boxSize={'20%'} color='white' />
        <Icon as={FaReact} boxSize={'20%'} color='white' />
        <Icon as={FaPython} boxSize={'20%'} color='white' />
      </div>
    </div>
  )
}

function ListDescTerrascan() {
  return (
    <UnorderedList fontSize='lg' color='grey'>
      <ListItem>
        Collaborated with HSBC to develop a <Text as='b'> full-stack web application </Text> proof of concept that analyzes all
        <Text as='b'> Terraform</Text> files in a given repository for syntactical errors violating a set of given rules
      </ListItem>
      <ListItem>
        Designed a <Text as='b'> RESTful API</Text> receiving hundreds of requests from both our frontend and our GitHub webhook (which
        would trigger an analysis of the repository upon any changes to the main branch)
      </ListItem>
      <ListItem>
        Utilized a hierarchy of <Text as='b'> AWS Lambda </Text> functions to parse YAML ”rule” files and Terraform files stored in
        <Text as='b'> AWS EFS </Text> asynchronously
      </ListItem>
      <ListItem>
        Tracked performance through <Text as='b'> AWS Cloudwatch </Text> through monitoring of logging and errors
      </ListItem>
      <ListItem>Leveraged AWS services covered under their free tier to eliminate costs</ListItem>
    </UnorderedList>
  )
}
function ListDescCt() {
  return (
    <UnorderedList fontSize='lg' color='grey'>
      <ListItem>
        Developed a <Text as='b'>full stack web application </Text> using <Text as='b'> React </Text> and <Text as='b'> Go </Text> that
        serves as a language learning tool which converts the source language to a hybrid version of the source and target language where
        only cognates have been translated, allowing users to easily expand their vocabulary of the target language
      </ListItem>
      <ListItem>
        Trained an <Text as='b'>NLP machine learning model </Text> to automatically detect the input language
      </ListItem>
      <ListItem>
        Integrated with <Text as='b'>DeepL’s REST API </Text> to allow users to compare ”cognate” translation to full translation
      </ListItem>
    </UnorderedList>
  )
}
function ListDescRo() {
  return (
    <UnorderedList fontSize='lg' color='grey'>
      <ListItem>
        Developed an <Text as='b'> interactive full-stack web application </Text> that displays the connectedness of each function in a .py
        file
      </ListItem>
      <ListItem>
        Followed the runtime path of the functions noting the callers and callees and used this information to give each function a
        connectedness score based on its <Text as='b'> closeness centrality </Text> to all other functions
      </ListItem>
      <ListItem>
        Created an interactive flow chart with <Text as='b'> React </Text>highlighting the most central functions – suggesting that any
        efficiency changes would be more effective the more central the function is
      </ListItem>
    </UnorderedList>
  )
}
function ProjDesc({ proj }) {
  const projPicker = (placement) => {
    switch (proj) {
      case 'Terrascan':
        return placement == 'leftDesc' ? <LeftDescTerrascan /> : <ListDescTerrascan />
      case 'Ct':
        return placement == 'leftDesc' ? <LeftDescCt /> : <ListDescCt />

      case 'Ro':
        return placement == 'leftDesc' ? <LeftDescRo /> : <ListDescRo />
    }
  }
  return (
    <div className='bg-desc'>
      <div className='Terrascandesc'>
        <div className='descBody'>
          {projPicker('leftDesc')}
          <div className='descText'>
            <Text fontSize='4xl'>What did I do?</Text>
            {projPicker('descText')}
          </div>
        </div>
      </div>
    </div>
  )
}

ProjDesc.propTypes = {
  proj: PropTypes.string
}

export { ProjDesc }
