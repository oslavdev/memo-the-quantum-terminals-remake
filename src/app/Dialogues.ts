export type DialogueType = {
  level: number
  text: string[]
  character: string
}

// TODO: keep dialogues on the back end side
export const DialoguesMemo: DialogueType[] = [
  {
    level: 1,
    character: 'Lasley',
    text: [
      'Hello, my name is Lasley! I will guide you in this terminal.',
      'Welcome to Terminal #1. We are glad you made it here. We are ready to proceed to the first exercise',
      'The rules are simple.',
      'On the screen will appear white dots. You need to memorize their location and order in which they appear',
      'When they disappear, the game starts. You need to click on square cells where were dots in exact same order. It is important',
      "You will have limited time. So don't waste it.",
      'Remember. Keep your mind clean and everything will be alright.',
      'If you make a mistake, the game will start again.',
    ],
  },
  {
    level: 2,
    character: 'Lasley',
    text: [
      'Congratulations!',
      'You completed your first puzzle. Keep on going and succes will not keep you waiting',
    ],
  },
  {
    level: 5,
    character: 'Lasley',
    text: ['You are doing great!'],
  },
]
