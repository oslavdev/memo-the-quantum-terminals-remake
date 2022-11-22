import { gql } from '@apollo/client'

export const meQuery = gql`
  query meQuery {
    me {
      id
      email
      username
      createdAt
    }
  }
`
