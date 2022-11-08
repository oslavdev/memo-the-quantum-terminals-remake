import * as Apollo from '@apollo/client'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom';

import { Header2, Paragraph } from '@/components/UI/text'

import { Box } from '@/components/UI/box'
import { Button } from '@/components/UI/buttons/primary'
import LayoutMenu from '@/components/layouts/layout-menu'
import { confirmQuery } from '@/app/graphql/mutations/confirm'
import { pathLogin } from '@/app/config/paths'

export default function Activation() {
  const [activated, setActivated] = React.useState<boolean>(false)
  const [confirmUser, { data }] = Apollo.useMutation(confirmQuery)

  const navigate = ReactRouter.useNavigate()
  const location = ReactRouter.useLocation()

  React.useEffect(() => {
    const { search } = location
    if (search != '') {
      const code = search.substring(1)
      confirmUser({
        variables: {
          token: code,
        },
      })
    }
  }, [])

  React.useEffect(() => {
    if (data && data?.confirmUser) {
      setActivated(true)
    }
    return () => {
      setActivated(false)
    }
  }, [data])

  return (
    <LayoutMenu logo>
      {!location.search ? (
        <Paragraph>No activation code found</Paragraph>
      ) : activated ? (
        <Box>
          <Box>
            <Header2>Congratulations!</Header2>
          </Box>
          <Box mt={20}>
            <Paragraph>Your account has been activated</Paragraph>
          </Box>
          <Box mt={30}>
            <Button text="Login" onClick={() => navigate(pathLogin())} />
          </Box>
        </Box>
      ) : (
        <Paragraph>Checking activation code. Please wait.</Paragraph>
      )}
    </LayoutMenu>
  )
}
