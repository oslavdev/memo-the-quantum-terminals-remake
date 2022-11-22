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

function CellGen (
  ref, 
  onClickCell, 
  isDisabled,
  level
) {
  let components = []
  for (let i = 1; i < MAP_SIZE + 1; i++) {

    const isIncludes = Boolean(level?.includes(i))
    const baseDelay = 0.01;
    const index: number = isIncludes ? level.indexOf(i) : 0;
    const delay: number = baseDelay + (index/2);

    components = [
      ...components,
      <Cell disabled={isDisabled} onClick={() => onClickCell(i)} key={i}  data-attr={i}>
        {Boolean(level?.includes(i)) && (
          <UI.Anchor 
             ref={el => ref.current[level.indexOf(i)] = el} 
             delay={delay}
          />
        )}
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


function SvgPath(props){

  const firstRef = props.refs
  const secondRef = props.refs

  // console.log(firstRef)
  // console.log(secondRef)

  return(
    <svg style={{position:'absolute'}} height="210" width="500">
      <line x1="0" y1="0" x2="200" y2="200" style={{stroke:'white', strokeWidth:2}} />
    </svg>
  )
}

interface GameBoardProps{
  dialogueStatus: boolean
  gameStatus: "offline" | "stand by" | "play"
  level: number[]
  onClickCell: (item: number) => void
}

export default function GameBoard(props:GameBoardProps) {

  const itemsRef = React.useRef<any>()
  const isDisabled = props.gameStatus != "play"
  
  return (
    <UI.Box blur={props.dialogueStatus} mt={20}>
      <Board>
        {props.gameStatus === 'offline' ? <Offline /> : null}
        {props.gameStatus === 'stand by' ? <StandBy /> : null}
        {CellGen(itemsRef, props.onClickCell, isDisabled, props.level).map((el) => el)}
        {itemsRef?.current?.length > 0 && props.level?.map((el, i) =>(
          <SvgPath 
            refs={itemsRef}
            path={props.level} 
            current={el} 
            key={i} 
          />
        ))}
      </Board>
    </UI.Box>
  )
}
