import React from 'react'
import State from '@/app/context/state/State'
import * as Apollo from '@apollo/client'

export const useCustomQuery = (name: string, query: any) => {
  const { dispatch } = React.useContext(State)
  const { loading, error, data } = Apollo.useQuery(query)

  // Dispatch errors
  React.useEffect(() => {
    if (error) {
      dispatch({ type: 'QUERY_ERROR', payload: data })
    }
  }, [error])

  // Dispatch data
  React.useEffect(() => {
    if (data) {
      dispatch({ type: name, payload: data })
    }
  }, [data])

  return {
    loading,
    error,
    data,
  }
}
