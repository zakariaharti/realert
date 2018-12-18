import React from 'react';
import styled, { keyframes } from 'styled-components';

import {StyledIcon} from '../index';

const animateErrorIcon = keyframes`
  from {
    transform: rotateX(100deg);
    opacity: 0;
  }
  to {
    transform: rotateX(0deg);
    opacity: 1;
  }
`;

const animateXMark = keyframes`
0% {
  transform: scale(0.4);
  margin-top: 26px;
  opacity: 0;
}
50% {
  transform: scale(0.4);
  margin-top: 26px;
  opacity: 0;
}
80% {
  transform: scale(1.15);
  margin-top: -6px;
}
100% {
  transform: scale(1);
  margin-top: 0;
  opacity: 1;
}
`;

const StyledErrorIcon = styled(StyledIcon)`
   border-color: var(--realert-red);
   animation: ${animateErrorIcon} 0.5s;

  .x-mark {
    position: relative;
    display: block;
    animation: animateXMark 0.5s;
  }

  .line {
    position: absolute;
    height: 5px;
    width: 47px;
    background-color: var(--realert-red);
    display: block;
    top: 37px;
    border-radius: 2px;
  }
  .line--left {
    transform: rotate(45deg);
    left: 17px;
  }

  .line--right {
    transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 16px;
  }
`;

const ErrorIcon = () => (
  <StyledErrorIcon>
    <span className="x-mark"></span>
    <span className="line line--left"></span>
    <span className="line line--right"></span>
  </StyledErrorIcon>
);

export default ErrorIcon;
