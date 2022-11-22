import { GameMemoType, UserType } from '@/types/index'

// Create anonim user without registration

export default function createAnonimUser(username = 'anonim') {
  const User: UserType = {
    id: '19hfbsm@dhfs73jvbfs',
    username,
    created_at: new Date(),
    email: 'info@info.com',
  }

  const Game: GameMemoType = {
    score: 0,
    mistakes: 0,
    strike: 0,
    userId: User.id,
    level: 1,
    id: '13bfhgy3i2r$#hjsvy3vfsd',
  }

  localStorage.setItem('user', JSON.stringify(User))
  localStorage.setItem('game', JSON.stringify(Game))
}
