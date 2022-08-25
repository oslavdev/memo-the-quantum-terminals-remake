import React from 'react'
import {DialoguesMemo, DialogueType} from "@/app/Dialogues"
import useGenerateLevelMemo from '@/utils/terminal_1/useGenerateLevelMemo'

import LayoutTerminalOne from '@/components/Layout/Terminal__1'

import Dialogues from '@/components/Dialogues'
import Header from '@/components/Header'
import GameBoard from '@/components/Board'
import ConfirmModal from '@/components/ConfirmModal'

const GameStatuses = {
  STAND_BY: "STAND_BY",
  DIALOGUE: "DIALOGUE",
}

function generateLevelRecursively(currentGame){
  let result = null
  do {
    const level_get = useGenerateLevelMemo(currentGame.level)
    result = [...level_get]

    if (!level_get.includes(undefined)) {
      return currentGame
    }
  } while (result.includes(undefined))
}


export default function Memo(){

  const [loading, setLoading] = React.useState<boolean>(true)
  const [gameStatus, setGameStatus] = React.useState<string>(GameStatuses.STAND_BY)
  const [currentDialogue, setCurrentDialogue] = React.useState<DialogueType|null>(null)
  const [confirmation, setConfirmation] = React.useState<boolean>(false)

  const mockedGame = JSON.parse(localStorage.getItem('game'))

  React.useEffect(() =>{
    if (mockedGame?.id) {
      const current = DialoguesMemo.find((dialogue) => dialogue.level === mockedGame.level)
      if(current){
        setCurrentDialogue(current)
        setLoading(false)
        setGameStatus(GameStatuses.DIALOGUE)
      }
    }
  }, [])

  function onConfirm(){
    setConfirmation(false)
  }

  function onDecline(){
   setConfirmation(false)
  }

  function onFinishDialogue(){
    setConfirmation(true)
    setCurrentDialogue(null)
  }

  if(loading){
    return null
  }

  return(
    <LayoutTerminalOne logo>
      <Header blur={gameStatus === GameStatuses.DIALOGUE} time="00:00:00" />
      <GameBoard
        blur={gameStatus === GameStatuses.DIALOGUE}
        gameStatus={gameStatus}
      />
      {currentDialogue && (
        <Dialogues
          dialogue={currentDialogue.text}
          character={currentDialogue.character}
          onFinishDialogue={onFinishDialogue}
        />
      )}
     {confirmation && (
       <ConfirmModal
        onConfirm={onConfirm}
        onDecline={onDecline}
        header="Are you ready?"
        text="Confirm to start the game."
       />
     )}
    </LayoutTerminalOne>
  )
}
