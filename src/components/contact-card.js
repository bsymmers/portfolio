import * as React from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Text,
  Icon
} from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function ContactCard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button variant='solid' background='#283316' color='white' onClick={onOpen}>
        Hire me!
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lets get in touch!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text display='flex' justifyContent='space-evenly'>
              <a href='https://linkedin.com/in/bsymmers'>
                <Icon as={FaLinkedin} w={12} h={12} />
              </a>
              <a href='https://github.com/bsymmers'>
                <Icon as={FaGithub} w={12} h={12} />
              </a>
              <a href={`mailto:bsymmers@alum.ubc.ca`}>
                <Icon as={MdEmail} w={12} h={12} />
              </a>
            </Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ContactCard
