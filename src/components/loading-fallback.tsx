import * as React from 'react'

import { Box } from '@/components/UI/box'
import LayoutMenu from '@/components/layouts/layout-menu'
import Loading from '@/components/UI/loading'

export function LoadingFallback(){
    return(
      <LayoutMenu logo={false}>
       <Box position="absolute" top="50%" center>
        <Loading />
      </Box>
    </LayoutMenu>
    )
  }
