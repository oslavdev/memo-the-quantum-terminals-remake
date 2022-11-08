import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as UI from "@/components/UI"

import { Button } from '@/components/UI/buttons/primary'
import LayoutMenu from '@/components/layouts/layout-menu'
import { pathLogin } from '@/app/config/paths'

export default function ActivationSent() {
  const navigate = ReactRouter.useNavigate()

  return (
    <LayoutMenu logo>
      <UI.Box center>
        <UI.Header2>Please confirm your email</UI.Header2>
        <UI.Box mt={20}>
          <UI.Paragraph>Activation code was sent to your email.</UI.Paragraph>
        </UI.Box>
        <UI.Box mt={40}>
          <Button text="Login" onClick={() => navigate(pathLogin())} />
        </UI.Box>
      </UI.Box>
    </LayoutMenu>
  )
}
