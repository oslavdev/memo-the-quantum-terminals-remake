import * as React from 'react'
import * as UI from "@/components/UI"

import LayoutMenu from '@/components/layouts/layout-menu'
import Loading from '@/components/UI/loading'

export function LoadingFallback(){
    return(
      <LayoutMenu logo={false}>
       <UI.Box position="absolute" top="50%" center>
        <Loading />
      </UI.Box>
    </LayoutMenu>
    )
  }
