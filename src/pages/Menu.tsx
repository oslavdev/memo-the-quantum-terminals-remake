import * as React from 'react'
import * as ReactRouter from 'react-router-dom';
import * as UI from '@/components/UI'

import { pathLobby, pathLogin, pathRegister } from '@/app/config/paths'

import LayoutMenu from '@/components/layouts/layout-menu'
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
        <UI.Box>
          <UI.Header>Choose username</UI.Header>
        </UI.Box>
        <UI.Box mt={20}>
          <UI.FormInputs.Input value={userName} onChange={(e) => setUserName(e.target.value)}></UI.FormInputs.Input>
        </UI.Box>
        <UI.Box mt={20}>
          <UI.PrimaryButton.Button text={"Confirm"} onClick={()=>loginAsAnonimUser()} />
        </UI.Box>
      </LayoutMenu>
    )
  }

  if (loggin) {
    return (
      <LayoutMenu logo={false}>
        <UI.loading />
      </LayoutMenu>
    )
  }

  return (
    <LayoutMenu logo>
      <UI.Box disp="flex" fd="column">
        <UI.Box mb={20}>
          <UI.PrimaryButton.Button text="Login" onClick={() => navigate(pathLogin())} />
        </UI.Box>
        <UI.Box mb={20}>
          <UI.PrimaryButton.Button
            text="Register"
            onClick={() => navigate(pathRegister())}
          />
        </UI.Box>
        <UI.Box>
          <UI.PrimaryButton.Button text="Go anonim" onClick={() => setAnonim(true)} />
        </UI.Box>
      </UI.Box>
    </LayoutMenu>
  )
}
