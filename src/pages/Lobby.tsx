import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as UI from "@/components/UI"

import { ME_QUERY, meQuery } from '@/app/graphql/user'
import { pathMemo, pathRegister } from '@/app/config/paths'

import { Button } from '@/components/UI/buttons/primary'
import LayoutMenu from '@/components/layouts/layout-menu'
import Loading from '@/components/UI/loading'
import { useCustomQuery } from '@/components/useCustomQuery'

export default function Lobby() {
  
  const navigate = ReactRouter.useNavigate()
  const { loading } = useCustomQuery(ME_QUERY, meQuery)

  const mockedGame = JSON.parse(localStorage.getItem('game'))

  function handleLogout(){
    alert("Logout")
  }

  if (loading || !mockedGame) {
    return (
      <LayoutMenu logo={false}>
        <UI.Box position="absolute" top="50%" center>
          <Loading />
        </UI.Box>
      </LayoutMenu>
    )
  }

  return (
    <LayoutMenu logo>
      {mockedGame && (
        <UI.Box w="290px" center position="absolute" bottom="9%">
          <UI.Paragraph center fade size="1.4rem">
            [Attention] You are playing as anonimous user. If you want to save
            you progress and participate in leaderboards please register.
          </UI.Paragraph>
        </UI.Box>
      )}
      <UI.Box disp="flex" fd="column">
        <UI.Box mb={20}>
          {/* <Button
            text="Register"
            onClick={() => history.push(pathLobby())}
            inactive={mockedGame[0].level === 0}
          /> */}
        </UI.Box>
        <UI.Box mb={20}>
          <Button
            text="Memo"
            onClick={() => navigate(pathMemo())}
          />
        </UI.Box>
        <UI.Box mb={20}>
          <Button
            text="Champions"
            onClick={() => navigate(pathRegister())}
          />
        </UI.Box>
        <UI.Box>
          <Button text="Logout" onClick={handleLogout} />
        </UI.Box>
      </UI.Box>
    </LayoutMenu>
  )
}
