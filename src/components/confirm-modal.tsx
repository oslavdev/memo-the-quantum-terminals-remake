import * as React from 'react'
import * as ReactRouter from 'react-router-dom';
import * as UI from '@/components/UI'

import { ButtonText, ConfirmButton, DeclineButton } from '@/components/UI/buttons/modal'

import { pathLobby } from '@/app/config/paths'
import { useModalDispatch } from '@/context/confirm-modal'
import { useStartGameDispatch } from '@/context/start-game'

type stateType = {
  name: string
  message: string
}

interface ConfirmModalState {
  state: stateType
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
    <UI.ModalWrapper>
      <UI.Modal>
        <UI.Box position="fixed" top="76px" fd="column">
          <UI.Header3 size="2.1rem">{state.name}</UI.Header3>
        </UI.Box>
        <UI.Box>
          <UI.Paragraph size="1.7rem" bright>
            {state.message}
          </UI.Paragraph>
        </UI.Box>
        <UI.Box mt={30} disp="flex">
          <UI.Box mr="50">
            <ConfirmButton onClick={() => confirmAction()}>
              <ButtonText>Yes</ButtonText>
            </ConfirmButton>
          </UI.Box>
          <UI.Box>
            <DeclineButton onClick={() => declineAction()}>
              <ButtonText>No</ButtonText>
            </DeclineButton>
          </UI.Box>
        </UI.Box>
      </UI.Modal>
    </UI.ModalWrapper>
  )
}

export default ConfirmModal
