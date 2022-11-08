import * as React from 'react'
import * as ReactRouter from 'react-router-dom';

import { ButtonText, ConfirmButton, DeclineButton } from '@/components/UI/buttons/modal'
import { Header3, Paragraph } from '@/components/UI/text'
import { Modal, ModalWrapper } from '@/components/UI/modals/confirm-modal'

import { Box } from '@/components/UI/box'
import { pathLobby } from '@/app/config/paths'
import { useModalDispatch } from '@/context/confirm-modal'
import { useStartGameDispatch } from '@/context/start-game'

interface ConfirmModalState {
  state: any
}
const ConfirmModal: React.FC<ConfirmModalState> = ({ state }) => {
  const navigate = ReactRouter.useNavigate()
  const dispatchStartGame = useStartGameDispatch()
  const dispatchConfirmModal = useModalDispatch()

  if (!state) {
    return null
  }

  const clear = () => {
    dispatchConfirmModal({
      type: 'REMOVE__MODAL',
    })
  }

  const confirmAction = () => {
    clear()
    dispatchStartGame({
      type: 'START__GAME',
      game: 'memo',
    })
  }

  const declineAction = () => {
    clear()
    navigate(pathLobby())
  }

  return (
    <ModalWrapper>
      <Modal>
        <Box position="fixed" top="76px" fd="column">
          <Header3 size="2.1rem">{state.name}</Header3>
        </Box>
        <Box>
          <Paragraph size="1.7rem" bright>
            {state.message}
          </Paragraph>
        </Box>
        <Box mt={30} disp="flex">
          <Box mr="50">
            <ConfirmButton onClick={() => confirmAction()}>
              <ButtonText>Yes</ButtonText>
            </ConfirmButton>
          </Box>
          <Box>
            <DeclineButton onClick={() => declineAction()}>
              <ButtonText>No</ButtonText>
            </DeclineButton>
          </Box>
        </Box>
      </Modal>
    </ModalWrapper>
  )
}

export default ConfirmModal
