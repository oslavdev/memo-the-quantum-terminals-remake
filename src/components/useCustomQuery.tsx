import * as Apollo from '@apollo/client'
import * as React from 'react'

import State from '@/context/state'

export const useCustomQuery = (
  name: string, 
  query: Apollo.DocumentNode
) => {
  
  const { dispatch } = React.useContext(State)
  const { loading, error, data } = Apollo.useQuery(query)

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
