import React from 'react'
import { useMutation } from "@apollo/client";
import * as ReactRouter from 'react-router-dom';
import LayoutMenu from "@/components/Layout/Layout_menu";
import Auth from '@/components/Forms/Auth';
import State from "@/app/context/state/State";
import { loginMutation } from "@/app/graphql/mutations/login";
import { QUERY_ERROR } from '@/app/reducers/root';
import { pathLobby } from '@/app/config/paths';

const INITIAL_STATE = {
  email: "",
  password:""
}

function Login() {

  const navigate = ReactRouter.useNavigate();
  const [formData, setFormData] = React.useState(INITIAL_STATE);
  const { _, dispatch } = React.useContext(State);
  
  const [login, { loading, data }] = useMutation(loginMutation);

  React.useEffect(() => {
    if (data && data.login) {
      if (data.login.user) {
        navigate(pathLobby()) //activation sent page
        setFormData(INITIAL_STATE); //reset formdata
      }
      else if (data.login.error) {
        dispatch({ type: QUERY_ERROR, payload: data.error }); //dispatch error
        setFormData(INITIAL_STATE)
      }
    }
   
    return () => {
      setFormData(INITIAL_STATE)
    }
  }, [data])

  const onSubmit = async (): Promise<any> => {
    login({
      variables: {
        ...formData
      }
    });
  };

  const onChange = (name: string, e: any) => {
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  };

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
  ];

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

export default Login;
