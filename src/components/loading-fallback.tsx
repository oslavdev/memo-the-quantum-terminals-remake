import * as React from 'react'
import Loading from '@/UI/Loading'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Box } from '@/UI/Boxes'

export function LoadingFallback(){
    return(
      <LayoutMenu logo={false}>
       <Box position="absolute" top="50%" center>
        <Loading />
      </Box>
    </LayoutMenu>
    )
  }
