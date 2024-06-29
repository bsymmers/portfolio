import { SimpleGrid, Heading, Text, Image } from '@chakra-ui/react'
import Terrascanlogo from '../media/t-logo.png'
import Tracer from '../media/ro-logo.png'
import CognateTranslator from '../media/ct-logo.png'
import * as React from 'react'
import './projects.css'
import { ProjDesc } from './project-descriptions'

function Projects() {
  const defaultState = { Terrascan: true, 'Cognate Translator': true, Tracer: true, default: true }
  const [selectedProject, setSelectedProject] = React.useState(defaultState)

  const handleSelect = (e) => {
    if (!selectedProject['default'] && selectedProject[e.target.alt]) {
      setSelectedProject(defaultState)
    } else if (e.target.alt == 'Terrascan') {
      setSelectedProject({ Terrascan: true, 'Cognate Translator': false, Tracer: false, default: false })
    } else if (e.target.alt == 'Cognate Translator') {
      setSelectedProject({ Terrascan: false, 'Cognate Translator': true, Tracer: false, default: false })
    } else {
      setSelectedProject({ Terrascan: false, 'Cognate Translator': false, Tracer: true, default: false })
    }
  }

  return (
    <div className='projects-wrap'>
      <Text color='grey'>My Projects</Text>
      <Heading>Presenting a Mix of my Personal & Academic Projects</Heading>
      <SimpleGrid
        justifyItems='center'
        marginTop='2%'
        marginBottom='2%'
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
          opacity={selectedProject['Terrascan'] ? 1 : 0.5}
        />
        <Image
          className='projectImg'
          src={CognateTranslator}
          boxSize='230px'
          alt='Cognate Translator'
          onClick={handleSelect}
          opacity={selectedProject['Cognate Translator'] ? 1 : 0.5}
        />
        <Image
          className='projectImg'
          src={Tracer}
          boxSize='230px'
          alt='Tracer'
          onClick={handleSelect}
          opacity={selectedProject['Tracer'] ? 1 : 0.5}
        />
      </SimpleGrid>
      {!selectedProject['default'] && selectedProject['Terrascan'] ? <ProjDesc proj='Terrascan' /> : null}
      {!selectedProject['default'] && selectedProject['Cognate Translator'] ? <ProjDesc proj='Ct' /> : null}

      {!selectedProject['default'] && selectedProject['Tracer'] ? <ProjDesc proj='Ro' /> : null}
    </div>
  )
}

export default Projects
