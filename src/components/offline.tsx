import * as React from 'react'

import { Box } from '@/components/UI/box'
import { Circle } from '@/components/warning-circle'

export default function Offile() {
  return (
    <Box
      disp="flex"
      jc="center"
      ai="center"
      position="absolute"
      top="0"
      center
      right="0"
      w="100%"
      h="100%"
      zIndex="999"
    >
      <Circle type="offline">Offline</Circle>
    </Box>
  )
}
