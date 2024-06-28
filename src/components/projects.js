import { SimpleGrid, Heading, Text, Image } from '@chakra-ui/react'
import Terrascanlogo from '../media/t-logo.png'
import Tracer from '../media/ro-logo.png'
import CognateTranslator from '../media/ct-logo.png'
import * as React from 'react'
import './projects.css'
import { TerrascanDesc } from './project-descriptions'

function Projects() {
  const defaultState = { Terrascan: 'inline', 'Cognate Translator': 'inline', Tracer: 'inline', default: true }
  const [selectedProject, setSelectedProject] = React.useState(defaultState)

  const handleSelect = (e) => {
    if (!selectedProject['default'] && selectedProject[e.target.alt] == 'inline') {
      setSelectedProject(defaultState)
    } else if (e.target.alt == 'Terrascan') {
      setSelectedProject({ Terrascan: 'inline', 'Cognate Translator': 'none', Tracer: 'none', default: false })
    } else if (e.target.alt == 'Cognate Translator') {
      setSelectedProject({ Terrascan: 'none', 'Cognate Translator': 'inline', Tracer: 'none', default: false })
    } else {
      setSelectedProject({ Terrascan: 'none', 'Cognate Translator': 'none', Tracer: 'inline', default: false })
    }
  }

  return (
    <div className='projects-wrap'>
      <Text color='grey'>My Projects</Text>
      <Heading>Presenting a Mix of my Personal & Academic Projects</Heading>
      <SimpleGrid
        justifyItems='center'
        marginTop='2%'
        width='50%'
        alignContent='space-around'
        spacing={4}
        templateColumns='repeat(auto-fit, minmax(230px, 1fr));'
      >
        <Image
          className='projectImg'
          src={Terrascanlogo}
          boxSize='230px'
          alt='Terrascan'
          onClick={handleSelect}
          display={selectedProject['Terrascan']}
        />
        <Image
          className='projectImg'
          src={CognateTranslator}
          boxSize='230px'
          alt='Cognate Translator'
          onClick={handleSelect}
          display={selectedProject['Cognate Translator']}
        />
        <Image
          className='projectImg'
          src={Tracer}
          boxSize='230px'
          alt='Tracer'
          onClick={handleSelect}
          display={selectedProject['Tracer']}
        />
      </SimpleGrid>
      {!selectedProject['default'] && selectedProject['Terrascan'] == 'inline' ? <TerrascanDesc /> : null}
    </div>
  )
}

export default Projects
