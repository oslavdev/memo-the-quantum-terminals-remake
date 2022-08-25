import React from 'react'
import * as ReactRouter from 'react-router-dom'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Header2, Paragraph } from '@/UI/Text/Text'
import { Box } from '@/UI/Boxes'
import { Button } from '@/UI/Buttons/Primary'
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
