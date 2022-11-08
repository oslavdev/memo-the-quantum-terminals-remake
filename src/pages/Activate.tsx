import * as Apollo from '@apollo/client'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom';
import * as UI from '@/components/UI'

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
        <UI.Paragraph>No activation code found</UI.Paragraph>
      ) : activated ? (
        <UI.Box>
          <UI.Box>
            <UI.Header2>Congratulations!</UI.Header2>
          </UI.Box>
          <UI.Box mt={20}>
            <UI.Paragraph>Your account has been activated</UI.Paragraph>
          </UI.Box>
          <UI.Box mt={30}>
            <Button text="Login" onClick={() => navigate(pathLogin())} />
          </UI.Box>
        </UI.Box>
      ) : (
        <UI.Paragraph>Checking activation code. Please wait.</UI.Paragraph>
      )}
    </LayoutMenu>
  )
}
