import * as React from 'react'

import { DialogueType, DialoguesMemo } from '@/app/config/dialogues'

import Dialogues from '@/components/dialogues'
import GameBoard from '@/components/game-board'
import Header from '@/components/stopwatch'
import LayoutTerminalOne from '@/components/layouts/terminal'
import { LoadingFallback } from '@/components/loading-fallback'
import useGenerateLevelMemo from '@/components/useGenerateLevelMemo'

// import ConfirmModal from '@/components/confirm-modal'

function Memo() {
  
  const [loading, setLoading] = React.useState<boolean>(true) 
  // TODO: refactor to use hook with paused state
  const [level, setLevel] = React.useState<number[]|null>(null) // generated level
  const [gameStatus, setGameStatus] = React.useState<"offline"|"stand by"|"play">('offline') 
  const [dialogueStatus, setDialogueStatus] = React.useState<DialogueType | null>(null)

  const mockedGame = JSON.parse(localStorage.getItem('game'))

  React.useEffect(() => {
    // Generate level
    if (gameStatus === "stand by" && mockedGame) {
      let result = [undefined]
      do {
        const level_get = useGenerateLevelMemo(mockedGame.level)
        result = [...level_get]

        if (!level_get.includes(undefined)) {
          setLevel(level_get)
          setGameStatus('play')
        }
      } while (result.includes(undefined))
    }
  }, [gameStatus])

  React.useEffect(() => {
    if (mockedGame) {
      // Run dialogue
      const dialogue: DialogueType = DialoguesMemo.find(
        (dial) => dial.level === mockedGame.level,
      )

      if (dialogue) {
        // setDialogueStatus(dialogue)
        setGameStatus('stand by')
        setLoading(false)
      }
    }
  }, [])

  function finishDialogue() {
    setDialogueStatus(null)
    // TODO: implement confirmation modal
    setGameStatus('stand by')
  }

  function onClickCell(item: number){
    console.log("Cell is clicked", item)
  }

  if (loading) {
    return <LoadingFallback/>
  }

  return (
    <LayoutTerminalOne logo>
      <Header dialogueStatus={dialogueStatus} time="00:00:00" />
      <GameBoard
        dialogueStatus={Boolean(dialogueStatus)}
        onClickCell={onClickCell}
        gameStatus={gameStatus}
        level={level}
      />
      {dialogueStatus && (
        <Dialogues
          dialogue={dialogueStatus.text}
          character={dialogueStatus.character}
          finishDialogue={finishDialogue}
        />
      )}
      
    </LayoutTerminalOne>
  )
}

export default Memo
