import * as React from 'react'

import State from "@/context/state";
import { useMutation } from "@apollo/client";

/**
 * 
 * @param name string
 * @param query 
 * @returns 
 */
export const useCustomMutation = (
  name:string,
  query:any
) => {

  const { dispatch } = React.useContext(State);
  const [register, {loading, error, data} ] = useMutation(query);

  // Dispatch errors
  React.useEffect(() => {
    if (error) {
      dispatch({ type: "MUTATION_ERROR", payload: data });
    }
  }, [error]);

  // Dispatch data
  React.useEffect(() => {
    if (data) {
      dispatch({ type: name, payload: data });
    }
  }, [data]);

  return {
    loading,
    error,
    data,
    register
  }
}
