import * as React from 'react'
import * as ReactRouter from 'react-router-dom';

import { pathLobby, pathLogin, pathRegister } from '@/app/config/paths'

import { Box } from '@/components/UI/box'
import { Button } from '@/components/UI/buttons/primary'
import { Header } from '@/components/UI/text'
import { Input } from '@/components/UI/inputs/from-input'
import LayoutMenu from '@/components/layouts/layout-menu'
import Loading from '@/components/UI/loading'
import State from "@/context/state";
import createAnonimUser from '@/utils/create-anonim-user'

export default function Menu() {

  const { dispatch } = React.useContext(State);
  const navigate = ReactRouter.useNavigate()

  const [loggin, setLoggin] = React.useState<boolean>(false)
  const [anonim, setAnonim] = React.useState<boolean>(false);
  const [userName, setUserName] = React.useState<string>("anonim");

  const loginAsAnonimUser = () => {
    setLoggin(true)

    createAnonimUser("1", userName);
    dispatch({ type:"ADD_ERROR",  payload: "User created" })

    setTimeout(() => {
      navigate(pathLobby())
    }, 1000)
  }

  if(anonim && !loggin){
    return(
      <LayoutMenu logo={false}>
        <Box>
          <Header>Choose username</Header>
        </Box>
        <Box mt={20}>
          <Input value={userName} onChange={(e) => setUserName(e.target.value)}></Input>
        </Box>
        <Box mt={20}>
          <Button text={"Confirm"} onClick={()=>loginAsAnonimUser()} />
        </Box>
      </LayoutMenu>
    )
  }

  if (loggin) {
    return (
      <LayoutMenu logo={false}>
        <Loading />
      </LayoutMenu>
    )
  }

  return (
    <LayoutMenu logo>
      <Box disp="flex" fd="column">
        <Box mb={20}>
          <Button text="Login" onClick={() => navigate(pathLogin())} />
        </Box>
        <Box mb={20}>
          <Button
            text="Register"
            onClick={() => navigate(pathRegister())}
          />
        </Box>
        <Box>
          <Button text="Go anonim" onClick={() => setAnonim(true)} />
        </Box>
      </Box>
    </LayoutMenu>
  )
}
