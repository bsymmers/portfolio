import * as React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerOverlay,
  DrawerHeader
} from '@chakra-ui/react'
import { PhilipsList, ProcurifyList } from './philips-list'
function JobDrawer({ job, side }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        Job Duties
      </Button>
      <Drawer isOpen={isOpen} placement={side} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>What I did:</DrawerHeader>

          <DrawerBody>{job == 'Procurify' ? <ProcurifyList /> : <PhilipsList />}</DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default JobDrawer

JobDrawer.propTypes = {
  job: PropTypes.string,
  side: PropTypes.string
}
