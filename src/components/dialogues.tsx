import * as React from 'react'
import * as UI from '@/components/UI'

import {
  DialogueButton,
  DialogueLasleyCharacter,
  DialogueName,
  DialoguePlaceholder,
  DialogueText,
} from '@/components/UI/terminals/shared/dialogues'

import Typewriter from 'typewriter-effect'

interface DialoguesPropsType {
  character: string
  finishDialogue: () => void
  dialogue: string[]
}

export default function Dialogues(props:DialoguesPropsType) {
  const [start, setStart] = React.useState<boolean>(false)
  const [iteration, setIteration] = React.useState<number>(0)
  const [finishedTyping, setFinished] = React.useState<boolean>(false)
  const [currentLine, setCurrentLine] = React.useState<string | null>(null)

  React.useEffect(() => {
    setCurrentLine(null)
    setTimeout(() => {
      setCurrentLine(props.dialogue[iteration])
    }, 300)
  }, [iteration])

  setTimeout(() => {
    setStart(true)
  }, 2000)

  if (!start) {
    return null
  }

  function _nextLine(){
    setIteration((prevIteration) => prevIteration + 1)
  }

  return (
    <UI.Box
      transform="translate(-50%, -50%)"
      center
      disp="flex"
      jc="center"
      ai="center"
      position="absolute"
      bottom="0"
      right="50%"
      left="50%"
      w="600px"
      h="350px"
      zIndex="999"
    >
      <DialogueLasleyCharacter />
      <DialoguePlaceholder>
        <DialogueName>{props.character}</DialogueName>
        {currentLine ? (
          <DialogueText>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(currentLine)
                  .callFunction(() => {
                    setFinished(true)
                  })
                  .start()
              }}
              options={{
                autoStart: true,
                loop: false,
                cursor: '',
                delay: 0.001,
              }}
            />
          </DialogueText>
        ) : null}
        {finishedTyping ? (
          <DialogueButton
            onClick={() =>
              iteration === props.dialogue.length - 1
                ? props.finishDialogue()
                : _nextLine()
            }
          >
            ...
          </DialogueButton>
        ) : null}
      </DialoguePlaceholder>
    </UI.Box>
  )
}
