import React, { useState, useContext } from 'react'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Box } from '@/UI/Boxes/Box'
import { Button } from '@/UI/Buttons/Primary'
import { useHistory } from 'react-router-dom'
import { pathLogin, pathRegister, pathLobby } from '@/app/config/paths'
import Loading from '@/UI/Loading/Loading'
import createAnonimUser from '@/utils/offline_auth/createAnonimUser'
import { Header } from '@/UI/Text/Text'
import { Input } from '@/UI/Inputs/FormInput'
import State from "@/app/context/state/State";

export default function Menu() {

  const { dispatch } = useContext(State);
  const history = useHistory()

  const [loggin, setLoggin] = useState<boolean>(false)
  const [anonim, setAnonim] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("anonim");

  const loginAsAnonimUser = () => {
    setLoggin(true)

    createAnonimUser("1", userName);
    dispatch({ type:"ADD_ERROR",  payload: "User created" })

    setTimeout(() => {
      history.push(pathLobby())
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
          <Button text="Login" onClick={() => history.push(pathLogin())} />
        </Box>
        <Box mb={20}>
          <Button
            text="Register"
            onClick={() => history.push(pathRegister())}
          />
        </Box>
        <Box>
          <Button text="Go anonim" onClick={() => setAnonim(true)} />
        </Box>
      </Box>
    </LayoutMenu>
  )
}
