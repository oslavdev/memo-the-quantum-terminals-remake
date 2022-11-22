import styled, {keyframes} from 'styled-components'

const anchorAppear = keyframes`
  0%{
    opacity: 0;
    transform: scale(0) translate(-50%, -50%);
  }
  50%{
    opacity: 1;
    transform: scale(1.3) translate(-50%, -50%);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
`

export const Anchor = styled.div`
    border: 1px solid #a1e9db;
    box-shadow: 0px 0px 5px 1px #cfe1f3;
    border-radius: 50%;
    color: white;

    background: #1b1a1a;
    width: 20px;
    height: 20px;

    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
    opacity: 0;
    transform: scale(0) translate(-50%, -50%);
    z-index: 999;

    animation: ${anchorAppear};
    animation-delay: ${props => props.delay}s;
    animation-duration: .3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`
