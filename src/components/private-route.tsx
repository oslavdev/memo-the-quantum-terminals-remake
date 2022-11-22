import * as ApolloClient from '@apollo/client'
import * as Paths from '@/app/config/paths'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import { meQuery } from '@/app/graphql/user'

interface RouteProps {
  children: React.ReactElement
}

const PrivateRoute = (props: RouteProps) => {

  const response = ApolloClient.useQuery(meQuery)
  const mockedUser: string = localStorage.getItem('user')


  if(response.error){
    return <ReactRouter.Navigate to="/unknown-error" />
  }

  if (response?.data?.me != null || mockedUser) {
    return props.children
  }

  return <ReactRouter.Navigate to={Paths.pathHome()} />
}

export default PrivateRoute
