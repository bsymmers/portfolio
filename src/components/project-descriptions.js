import * as React from 'react'
import { Image, Text, Icon, UnorderedList, ListItem } from '@chakra-ui/react'
import Terrascan from '../media/Terrascan.png'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaReact, FaAws } from 'react-icons/fa6'

function TerrascanDesc() {
  return (
    <div className='Terrascandesc'>
      <Text>Made with:</Text>
      <Icon as={IoLogoJavascript} boxSize={12} />
      <Icon as={FaReact} boxSize={12} />
      <Icon as={FaAws} boxSize={12} />
      <Image src={Terrascan} boxSize='60%'></Image>
      <Text>What did I do?</Text>
      <UnorderedList>
        <ListItem>
          Collaborated with HSBC to develop a full-stack web application proof of concept that analyzes all Terraform files in a given
          repository for syntactical errors violating a set of given rules
        </ListItem>
        <ListItem>
          Designed a RESTful API receiving hundreds of requests from both our frontend and our GitHub webhook (which would trigger an
          analysis of the repository upon any changes to the main branch)
        </ListItem>
        <ListItem>
          Utilized a hierarchy of AWS Lambda functions to parse YAML ”rule” files and Terraform files stored in AWS EFS asynchronously
        </ListItem>
        <ListItem>Tracked performance through AWS Cloudwatch through monitoring of logging and errors</ListItem>
        <ListItem>Leveraged AWS services covered under their free tier to eliminate costs</ListItem>
      </UnorderedList>
    </div>
  )
}
function CtDesc() {}
function RoDesc() {}

export { TerrascanDesc, CtDesc, RoDesc }
