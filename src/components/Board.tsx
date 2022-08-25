import React from 'react'

import { Box } from '@/UI/Boxes'
import {
  Board,
  Cell,
  Decorator1,
  Decorator2,
  Decorator3,
  Decorator4,
  DecoratorCenter,
} from '@/UI/Terminals/Terminal_1/Board'

import StandBy from '@/components/StandBy'
import Offline from '@/components/Offline'

// TODO: size of the map depends on the level of game type
const size = 30 

const CellGen = () => {
  let components = []
  for (let i = 1; i < size + 1; i++) {
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

export default function GameBoard(props) {

  return (
    <Box blur={props.blur} mt={20}>
      <Board>
        {props.gameStatus === 'offline' ? <Offline /> : null}
        {props.gameStatus === 'stand by' ? <StandBy /> : null}
        {CellGen()}
      </Board>
    </Box>
  )
}
