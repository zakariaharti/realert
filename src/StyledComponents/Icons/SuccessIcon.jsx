import React from 'react';
import styled, { keyframes } from 'styled-components';

import StyledIcon from '../index';

const rotatePlaceholder = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
`;

const animateSuccessTip = keyframes`
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
`;

const animateSuccessLong = keyframes`
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
`;

const StyledSuccessIcon = styled(StyledIcon)`
   :root {
     --swal-green: #A5DC86;
     --swal-green-light: rgba(165, 220, 134, 0.2);
   }

   border-color: var(--swal-green);

  &::before,
  &::after {
    content: '';
    border-radius: 50%;
    position: absolute;
    width: 60px;
    height: 120px;
    background: white;
    transform: rotate(45deg);
  }

  &::before {
    border-radius: 120px 0 0 120px;
    top: -7px;
    left: -33px;
    transform: rotate(-45deg);
    transform-origin: 60px 60px;
  }

  &::after {
    border-radius: 0 120px 120px 0;
    top: -11px;
    left: 30px;
    transform: rotate(-45deg);
    transform-origin: 0px 60px;
    animation: ${rotatePlaceholder} 4.25s ease-in;
  }

  .ring {
    width: 80px;
    height: 80px;
    border: 4px solid var(--swal-green-light);
    border-radius: 50%;
    box-sizing: content-box;
    position: absolute;
    left: -4px;
    top: -4px;
    z-index: 2;
  }

  .hide-corners {
    width: 5px;
    height: 90px;
    background-color: white;
    padding: 1px;
    position: absolute;
    left: 28px;
    top: 8px;
    z-index: 1;
    transform: rotate(-45deg);
  }

  line {
    height: 5px;
    background-color: var(--swal-green);
    display: block;
    border-radius: 2px;
    position: absolute;
    z-index: 2;
  }

  line--tip {
    width: 25px;
    left: 14px;
    top: 46px;
    transform: rotate(45deg);
    animation: ${animateSuccessTip} 0.75s;
  }
  line--long {
    width: 47px;
    right: 8px;
    top: 38px;
    transform: rotate(-45deg);
    animation: ${animateSuccessLong} 0.75s;
  }
`;

const SuccessIcon = () => (
  <StyledSuccessIcon>
    <span className="line line--long" />
    <span className="line line--tip" />

    <div className="ring" />
    <div className="hide-corners" />
  </StyledSuccessIcon>
);

export default SuccessIcon;
