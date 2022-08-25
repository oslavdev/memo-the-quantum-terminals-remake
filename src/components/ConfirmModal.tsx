import React from 'react'
import { Box } from '@/UI/Boxes'
import { ModalWrapper, Modal } from '@/UI/Modals/ConfirmModal'
import { Header3, Paragraph } from '@/UI/Text/Text'
import { ConfirmButton, DeclineButton, ButtonText } from '@/UI/Buttons/Modal'

interface ConfirmModalState {
  header: string,
  onDecline: () => void,
  onConfirm: () => void,
  text: string
}
const ConfirmModal: React.FC<ConfirmModalState> = (props) => {
  
  return (
    <ModalWrapper>
      <Modal>
        <Box position="fixed" top="76px" fd="column">
          <Header3 size="2.1rem">{props.header}</Header3>
        </Box>
        <Box>
          <Paragraph size="1.7rem" bright>
            {props.text || ''}
          </Paragraph>
        </Box>
        <Box mt={30} disp="flex">
          <Box mr="50">
            <ConfirmButton onClick={() => props.onDecline()}>
              <ButtonText>Yes</ButtonText>
            </ConfirmButton>
          </Box>
          <Box>
            <DeclineButton onClick={() => props.onConfirm()}>
              <ButtonText>No</ButtonText>
            </DeclineButton>
          </Box>
        </Box>
      </Modal>
    </ModalWrapper>
  )
}

export default ConfirmModal
