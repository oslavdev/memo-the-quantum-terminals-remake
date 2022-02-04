import React from 'react'
import * as ReactRouter from 'react-router-dom';
import * as Apollo from "@apollo/client";

import LayoutMenu from "@/components/Layout/Layout_menu";
import { inputs } from "@/components/Forms/inputs/register";
import Auth from '@/components/Forms/Auth';
import { registerMutation } from "@/app/graphql/mutations/register";
import { INITIAL_REGISTER_FORM_STATE } from "./types";
import State from '@/app/context/state/State';
import { QUERY_ERROR } from '@/app/reducers/root';
import { Box } from '@/UI/Boxes/Box';
import { Paragraph } from '@/UI/Text/Text';
import { pathActivationSent } from '@/app/config/paths';

const INITIAL_STATE = {
  email: "",
  password: "",
  confirm_password: "",
  username: ""
};

export default function Register() {
  
  const {_, dispatch} = React.useContext(State);
  const [formData, setFormData] = React.useState<INITIAL_REGISTER_FORM_STATE>(INITIAL_STATE);
  const [register, { loading, data }] = Apollo.useMutation(registerMutation);
  const navigate = ReactRouter.useNavigate();

  React.useEffect(() => {
    if (data && data.register) {
      if (data.register.user) {
        navigate(pathActivationSent()) //activation sent page
        setFormData(INITIAL_STATE); //reset formdata
      }
      else if (data.register.error) {
        dispatch({ type: QUERY_ERROR, payload: data.error }); //dispatch error
        setFormData(INITIAL_STATE)
      }
    }
   
    return () => {
      setFormData(INITIAL_STATE)
    }
  }, [data])

  /* Submit register from */
  const onSubmit =  ():void => {
    register({
      variables: {
        ...formData
      }
    });
  };

  /* Get input values */
  const onChange = (name: string, e: any): void => {
    e.preventDefault();
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  };


  return (
    <LayoutMenu logo>
      <Auth
        loading={loading}
        onSubmit={onSubmit}
        onChange={onChange}
        inputs={inputs(formData)}
        type="Register"
      />
      <Box mt={ 10 }>
        <Paragraph>
          Already has an account?
        </Paragraph>
      </Box>
    </LayoutMenu>
  )
}
