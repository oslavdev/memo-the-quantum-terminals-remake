export type GameMemoType = {
  score: number
  strike: number
  mistakes: number
  userId: string
  id: string
}

export type UserType = {
  id: string
  username: string
  email: string
  created_at: Date
  firstName?: string
  secondName?: string
  password?: string
}

export type INITIAL_REGISTER_FORM_STATE = {
  email: string
  password: string
  confirm_password: string
  username: string
}
