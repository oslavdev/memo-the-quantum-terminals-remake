import React from 'react'

import useGenerateLevelMemo from '@/utils/terminal_1/useGenerateLevelMemo'

import LayoutTerminalOne from '@/components/Layout/Terminal__1'

import Dialogues from '@/components/Dialogues'
import Header from '@/components/Header'
import GameBoard from '@/components/Board'

import { useModalDispatch } from '@/context/confirmModal'
import { useStartGameState } from '@/context/startGame'
import { LoadingFallback } from '@/components/loading-fallback'

type Dialogue = {
  level: number
  text: string[]
  character: string
}

// TODO: keep dialogues on the back end side
const DialoguesMemo: Dialogue[] = [
  {
    level: 1,
    character: 'Lasley',
    text: [
      'Hello, my name is Lasley! I will guide you in this terminal.',
      'Welcome to Terminal #1. We are glad you made it here. We are ready to proceed to the first exercise',
      'The rules are simple.',
      'On the screen will appear white dots. You need to memorize their location and order in which they appear',
      'When they disappear, the game starts. You need to click on square cells where were dots in exact same order. It is important',
      "You will have limited time. So don't waste it.",
      'Remember. Keep your mind clean and everything will be alright.',
      'If you make a mistake, the game will start again.',
    ],
  },
  {
    level: 2,
    character: 'Lasley',
    text: [
      'Congratulations!',
      'You completed your first puzzle. Keep on going and succes will not keep you waiting',
    ],
  },
  {
    level: 5,
    character: 'Lasley',
    text: ['You are doing great!'],
  },
]

const MemoTwo = () => {
  const CURRENT__GAME = 'memo'

  const [loading, setLoading] = React.useState<boolean>(true) // page loading
  const [level, setLevel] = React.useState(null) // generated level
  const [gameStatus, setGameStatus] = React.useState<string>('offline') // start game | offline | stand by | play |
  const [dialogueStatus, setDialogueStatus] = React.useState<null | Dialogue>(null)

  const mockedGame = JSON.parse(localStorage.getItem('game'))

  const dispatchConfirmModal = useModalDispatch()

  const stateStartGame = useStartGameState()

  React.useEffect(() => {
    if (stateStartGame && mockedGame && mockedGame.length > 0) {
      setGameStatus('stand by')
      
      // Generate level
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

    if (mockedGame?.id) {
      
      /* Get anonim user dialogue */
      const dialogue: Dialogue = DialoguesMemo.find(
        (dial) => dial.level === mockedGame.level,
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
        stateStartGame={stateStartGame}
        level={level}
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

export default MemoTwo
