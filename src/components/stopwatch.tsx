import * as React from 'react'

import { Box } from '@/components/UI/box'
import { Paragraph } from '@/components/UI/text'
import { Timer } from '@/components/UI/terminals/terminal-one/timer'

export default function StopWatch({ dialogueStatus, time }) {
  return (
    <Box h="100px">
      <Box blur={dialogueStatus} mb={5}>
        <Paragraph size="2.4rem" center>
          Time Left
        </Paragraph>
      </Box>
      <Box blur={dialogueStatus}>
        <Timer>00:00:00</Timer>
      </Box>
    </Box>
  )
}
