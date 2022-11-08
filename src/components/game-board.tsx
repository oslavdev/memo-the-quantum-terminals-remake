import * as React from 'react'
import * as UI from "@/components/UI"

import {
  Board,
  Cell,
  Decorator1,
  Decorator2,
  Decorator3,
  Decorator4,
  DecoratorCenter,
} from '@/components/UI/terminals/terminal-one/game-board'

import Offline from '@/components/offline'
import StandBy from '@/components/stand-by'

const MAP_SIZE = 30 

const CellGen = () => {
  let components = []
  for (let i = 1; i < MAP_SIZE + 1; i++) {
    components = [
      ...components,
      <Cell key={i} data-attr={i}>
        <DecoratorCenter>+</DecoratorCenter>
        <Decorator1>+</Decorator1>
        <Decorator2>+</Decorator2>
        <Decorator3>+</Decorator3>
        <Decorator4>+</Decorator4>
      </Cell>,
    ]
  }
  return components
}

export default function GameBoard({ dialogueStatus, gameStatus }) {
  return (
    <UI.Box blur={dialogueStatus} mt={20}>
      <Board>
        {gameStatus === 'offline' ? <Offline /> : null}
        {gameStatus === 'stand by' ? <StandBy /> : null}
        {CellGen().map((el) => el)}
      </Board>
    </UI.Box>
  )
}
