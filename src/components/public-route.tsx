import * as React from 'react'

import { ME_QUERY, meQuery } from '@/app/graphql/user'
import {Navigate, Outlet} from 'react-router-dom'

import { pathLobby } from '@/app/config/paths'
import { useCustomQuery } from '@/components/useCustomQuery'

const PublicRoute = () => {
  const { data, error } = useCustomQuery(ME_QUERY, meQuery)
  const mockedUser: string = localStorage.getItem('user')

  if(error){
    return <Navigate to="/unknown-error" />
  }

  if (data?.me === null && !mockedUser) {
    return <Outlet />
  }

  return <Navigate to={pathLobby()} replace={true} />
}

export default PublicRoute
