import React from 'react'
import {Outlet, Navigate } from 'react-router-dom'

import { meQuery, ME_QUERY } from '@/app/graphql/user'
import { useCustomQuery } from '@/useQuery'
import { pathLobby } from '@/app/config/paths'


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
