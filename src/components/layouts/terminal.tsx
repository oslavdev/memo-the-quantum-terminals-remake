import * as React from 'react'
import * as UI from "@/components/UI"

import LogoMinified from '@/components/logo-mobile'
import Snow from '@/components/falling-snow'

export default function TerminalOne({
  children,
  logo,
}: {
  children: React.ReactNode
  logo?: boolean
}) {
  return (
    <UI.Box
      position="fixed"
      w="100%"
      h="100%"
      backgroundSrc="/public/images/terminal_1/BG.png"
      backgroundPosition="left 103%"
      backgroundRepeat="no-repeat"
      backgroundSize="28%"
    >
      <UI.Box
        zIndex={10}
        overflow="hidden"
        disp="flex"
        fd="column"
        jc="center"
        ai="center"
        margin="0 auto"
        w="450px"
        h="100%"
      >
        {logo ? <LogoMinified /> : null}
        {children}
      </UI.Box>
      <Snow />
    </UI.Box>
  )
}
