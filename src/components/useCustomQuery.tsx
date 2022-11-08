import * as React from 'react'

import State from '@/context/state'
import { useQuery } from '@apollo/client'

export const useCustomQuery = (name: string, query: any) => {
  const { dispatch } = React.useContext(State)
  const { loading, error, data } = useQuery(query)


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
