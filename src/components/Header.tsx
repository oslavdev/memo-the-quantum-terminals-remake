import React from 'react'
import { Timer } from '@/UI/Terminals/Terminal_1/Timer'
import { Box } from '@/UI/Boxes'
import { Paragraph } from '@/UI/Text/Text'

export default function Header(props){
  return (
    <Box h="100px">
      <Box blur={props.blur} mb={5}>
        <Paragraph size="2.4rem" center>
          Time Left
        </Paragraph>
      </Box>
      <Box blur={props.blur}>
        <Timer>00:00:00</Timer>
      </Box>
    </Box>
  )
}
