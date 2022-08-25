import React from 'react'
import State from "@/app/context/state/State";
import * as Apollo from "@apollo/client";

export const useCustomMutation = (
  name:string,
  query:any
) => {

  const { dispatch } = React.useContext(State);
  const [register, {loading, error, data} ] = Apollo.useMutation(query);

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
    data
  }
}
