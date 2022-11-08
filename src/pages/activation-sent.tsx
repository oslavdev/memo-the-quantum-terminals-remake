import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import { Header2, Paragraph } from '@/components/UI/text'

import { Box } from '@/components/UI/box'
import { Button } from '@/components/UI/buttons/primary'
import LayoutMenu from '@/components/layouts/layout-menu'
import { pathLogin } from '@/app/config/paths'

export default function ActivationSent() {
  const navigate = ReactRouter.useNavigate()

  return (
    <LayoutMenu logo>
      <Box center>
        <Header2>Please confirm your email</Header2>
        <Box mt={20}>
          <Paragraph>Activation code was sent to your email.</Paragraph>
        </Box>
        <Box mt={40}>
          <Button text="Login" onClick={() => navigate(pathLogin())} />
        </Box>
      </Box>
    </LayoutMenu>
  )
}
