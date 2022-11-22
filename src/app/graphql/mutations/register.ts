import { gql } from '@apollo/client'

export const REGISTER_MUTATION = 'REGISTER_MUTATION'
export const registerMutation = gql`
  mutation Mutation(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      ... on FieldError {
        success
        error {
          field
          message
          status
        }
      }
      ... on SuccessResponse {
        success
        user {
          username
          id
          email
        }
      }
    }
  }
`
