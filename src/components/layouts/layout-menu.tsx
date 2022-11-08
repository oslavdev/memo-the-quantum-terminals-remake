import * as React from 'react'
import * as UI from "@/components/UI"

import Logo from '@/components/logo-mobile'
import Snow from '@/components/falling-snow'

export default function LayoutMenu({
  children,
  logo,
}: {
  children: React.ReactNode
  logo?: boolean
}) {




  return (
    <>
    <UI.Box
      position="fixed"
      w="100%"
      h="100%"
      backgroundSrc="/public/images/menu/bg_big.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
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
        {logo ? <Logo /> : null}
        {children}

      </UI.Box>
      <Snow />

    </UI.Box>
    </>
  )
}
