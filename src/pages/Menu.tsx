import * as React from 'react'
import * as ReactRouter from 'react-router-dom';
import * as UI from '@/components/UI'

import LayoutMenu from '@/components/layouts/layout-menu'
import { pathMemo } from '@/app/config/paths'

export default function Menu() {

  const navigate = ReactRouter.useNavigate()

  return (
    <LayoutMenu logo>
      <UI.Box disp="flex" fd="column">
        <UI.Box>
          <UI.PrimaryButton.Button text="Start" onClick={() => navigate(pathMemo())} />
        </UI.Box>
      </UI.Box>
    </LayoutMenu>
  )
}
