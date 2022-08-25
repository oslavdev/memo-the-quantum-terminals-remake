import React from 'react'
import * as ReactRouter from 'react-router-dom';
import * as Apollo from '@apollo/client'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Header2, Paragraph } from '@/UI/Text/Text'
import { Box } from '@/UI/Boxes'
import { Button } from '@/UI/Buttons/Primary'
import { pathLogin } from '@/app/config/paths'
import { confirmQuery } from '@/app/graphql/mutations/confirm'

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
