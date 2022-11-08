import * as React from 'react'

import { DialogueType, DialoguesMemo } from '@/app/config/dialogues'

import Dialogues from '@/components/dialogues'
import GameBoard from '@/components/game-board'
import Header from '@/components/stopwatch'
import LayoutTerminalOne from '@/components/layouts/terminal'
import { LoadingFallback } from '@/components/loading-fallback'
import useGenerateLevelMemo from '@/components/useGenerateLevelMemo'
import { useModalDispatch } from '@/context/confirm-modal'
import { useStartGameState } from '@/context/start-game'

const Memo = () => {
  
  const CURRENT__GAME = 'MEMO_GAME'

  const [loading, setLoading] = React.useState<boolean>(true) // page loading
  const [level, setLevel] = React.useState<number[]|null>(null) // generated level
  const [gameStatus, setGameStatus] = React.useState<"offline"|"stand by"|"play">('offline') 
  const [dialogueStatus, setDialogueStatus] = React.useState<null | DialogueType>(null)

  const mockedGame = JSON.parse(localStorage.getItem('game'))

  const dispatchConfirmModal = useModalDispatch()

  const stateStartGame = useStartGameState()

  React.useEffect(() => {
    if (stateStartGame && mockedGame && mockedGame.length > 0) {
      setGameStatus('stand by')
      /* Generate level */
      let result = [undefined]
      const currentGame = mockedGame.find(
        (game) => game.title === CURRENT__GAME,
      )

      do {
        const level_get = useGenerateLevelMemo(currentGame.level)
        result = [...level_get]

        if (!level_get.includes(undefined)) {
          setLevel(level_get)
          setGameStatus('play')
        }
      } while (result.includes(undefined))
    }
  }, [stateStartGame])

  React.useEffect(() => {
    if (mockedGame && mockedGame.length > 0) {
      /* Get anonim user level */
      const currentGame = mockedGame.find(
        (game) => game.title === CURRENT__GAME,
      )

      // Get anonim user dialogue
      const dialogue: DialogueType = DialoguesMemo.find(
        (dial) => dial.level === currentGame.level,
      )
      if (dialogue) {
        setDialogueStatus(dialogue)
        setLoading(false)
      }
    }
  }, [])

  const _finishDialogue = () => {
    setDialogueStatus(null)
    dispatchConfirmModal({
      type: 'ADD__MODAL',
      name: 'Are you ready?',
      message: 'The game is ready to be started',
      confirm: 'DISPATCH__START__GAME',
    })
  }

  if (loading) {
    return <LoadingFallback/>
  }

  return (
    <LayoutTerminalOne logo>
      <Header dialogueStatus={dialogueStatus} time="00:00:00" />
      <GameBoard
        dialogueStatus={dialogueStatus}
        gameStatus={gameStatus}
      />
      {dialogueStatus && (
        <Dialogues
          dialogue={dialogueStatus.text}
          character={dialogueStatus.character}
          _finishDialogue={_finishDialogue}
        />
      )}
    </LayoutTerminalOne>
  )
}

export default Memo
