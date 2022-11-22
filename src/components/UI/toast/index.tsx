import styled, {keyframes} from 'styled-components'

const slideInAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateX(100px);
  }
  100%{
    opacity: 1;
    transform: translateY(0)l
  }
`

export const Toast = styled.div`
  position: fixed;
  bottom: 5%;
  left: 5%;
  max-width: 350px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  animation: ${slideInAnimation};
  animation-duration: .5s;
  animation-iteration-count: 1;
  aniamtion-fill-mode: forwards;
`
