import * as React from 'react'
import * as UI from "@/components/UI"

import { Timer } from '@/components/UI/terminals/terminal-one/timer'

export default function StopWatch({ dialogueStatus, time }) {
  return (
    <UI.Box h="100px">
      <UI.Box blur={dialogueStatus} mb={5}>
        <UI.Paragraph size="2.4rem" center>
          Time Left
        </UI.Paragraph>
      </UI.Box>
      <UI.Box blur={dialogueStatus}>
        <Timer>00:00:00</Timer>
      </UI.Box>
    </UI.Box>
  )
}
