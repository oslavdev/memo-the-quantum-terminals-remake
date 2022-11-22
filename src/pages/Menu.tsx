import * as React from 'react'
import * as ReactRouter from 'react-router-dom';
import * as UI from '@/components/UI'

import { pathLobby, pathLogin, pathRegister } from '@/app/config/paths'

import LayoutMenu from '@/components/layouts/layout-menu'
import createAnonimUser from '@/utils/create-anonim-user'

export default function Menu() {

  const navigate = ReactRouter.useNavigate()

  const [login, setLogin] = React.useState<boolean>(false)
  const [anonim, setAnonim] = React.useState<boolean>(false);
  const [userName, setUserName] = React.useState<string>("anonim");

  function loginAsAnonimUser () {

    setLogin(true)

    createAnonimUser(userName);
   
    setTimeout(() => {
      navigate(pathLobby())
    }, 1000)
  }

  function handleUserName(e: React.ChangeEvent<HTMLInputElement>){
    setUserName(e.target.value)
  }

  if(anonim && !login){
    return(
      <LayoutMenu logo={false}>
        <UI.Box>
          <UI.Header>Choose username</UI.Header>
        </UI.Box>
        <UI.Box mt={20}>
          <UI.FormInputs.Input value={userName} onChange={(e) => handleUserName(e)}></UI.FormInputs.Input>
        </UI.Box>
        <UI.Box mt={20}>
          <UI.PrimaryButton.Button text={"Confirm"} onClick={loginAsAnonimUser} />
        </UI.Box>
      </LayoutMenu>
    )
  }

  if (login) {
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
