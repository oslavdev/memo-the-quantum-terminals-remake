import { GameMemoType } from '@/types/game'
import { UserType } from '@/types/user'

/** Create user without registration */

export default function createAnonimUser(ip: string, username = 'anonim') {
  const today = new Date()

  const User: UserType = {
    id: '1',
    username,
    created_at: today,
    email: 'info@info.com',
  }

  const Game: GameMemoType = {
    score: 0,
    mistakes: 0,
    strike: 0,
    userId: '1',
    id: '1',
  }

  localStorage.setItem('user', JSON.stringify(User))
  localStorage.setItem('game', JSON.stringify(Game))
}
