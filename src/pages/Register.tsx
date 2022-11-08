import * as Apollo from "@apollo/client";
import * as React from 'react'
import * as ReactRouter from 'react-router-dom';
import * as UI from '@/components/UI';

import Auth from '@/components/forms/auth-form';
import { INITIAL_REGISTER_FORM_STATE } from "@/types";
import LayoutMenu from "@/components/layouts/layout-menu";
import { inputs } from "@/components/forms/inputs/register";
import { pathActivationSent } from '@/app/config/paths';
import { registerMutation } from "@/app/graphql/mutations/register";

const INITIAL_STATE = {
  email: "",
  password: "",
  confirm_password: "",
  username: ""
};

export default function Register() {
  
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
  const onChange = (name: string, e: React.ChangeEvent<HTMLInputElement>): void => {
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
      <UI.Box mt={ 10 }>
        <UI.Paragraph>
          Already has an account?
        </UI.Paragraph>
      </UI.Box>
    </LayoutMenu>
  )
}
