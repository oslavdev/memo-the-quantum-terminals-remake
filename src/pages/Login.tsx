import * as React from 'react'
import * as ReactRouter from 'react-router-dom';

import Auth from '@/components/forms/auth-form';
import LayoutMenu from "@/components/layouts/layout-menu";
import { loginMutation } from "@/app/graphql/mutations/login";
import { pathLobby } from '@/app/config/paths';
import { useMutation } from "@apollo/client";

const INITIAL_STATE = {
  email: "",
  password:""
}

function Login() {

  const navigate = ReactRouter.useNavigate();
  const [formData, setFormData] = React.useState(INITIAL_STATE);
  
  const [login, { loading, data }] = useMutation(loginMutation);

  React.useEffect(() => {
    if (data && data.login) {
      if (data.login.user) {
        navigate(pathLobby()) 
        setFormData(INITIAL_STATE); 
      }
      else if (data.login.error) {
        setFormData(INITIAL_STATE)
      }
    }
   
    return () => {
      setFormData(INITIAL_STATE)
    }
  }, [data])

  function onSubmit() {
    login({
      variables: {
        ...formData
      }
    })
  }

  function onChange (name: string, e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  }

  const inputs = [
    {
      id: 1,
      name: "email",
      label: "E-mail",
      value: formData.email,
      placeholder: "E-mail"
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      value: formData.password,
      placeholder: "Password"
    }
  ]

  return (
    <LayoutMenu logo>
      <Auth
        loading={loading}
        onSubmit={onSubmit}
        onChange={onChange}
        inputs={inputs}
        type="Login"
      />
    </LayoutMenu>
  )
}

export default Login
