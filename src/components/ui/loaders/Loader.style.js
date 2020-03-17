import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;

export const Loader = styled.div`
  animation: ${rotateAnimation} 1s linear infinite;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  box-shadow: 0 4px 0 0 #656974;
  transform-origin: 50% calc(50% + 2px);
  box-sizing: content-box;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;