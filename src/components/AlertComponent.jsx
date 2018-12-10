import React from 'react';
import styled, { keyframe } from 'styled-components';

/* eslint-disable */

const KeyframeScale = keyframe`
  0% {
    transform: scale(1);
  }
  1% {
    transform: scale(0.5);
  }

  45% {
    transform: scale(1.05)
  }

  80% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1);
  }
`;

const StyledAlertOverlay = styled.div`
  :root {
    --alert-btn-confirm: #7cd1f9;
    --alert-btn-confirm-hover: var(--alert-btn-confirm);
    --alert-btn-confirm-active: var(--alert-btn-confirm);

    --alert-btn-cancel: #EFEFEF;
    --alert-btn-cancel-hover: var(--alert-btn-cancel);
    --alert-btn-cancel-active: var(--alert-btn-cancel);

    --alert-btn-danger: #e64942;
    --alert-btn-danger-hover: var(--alert-btn-danger);
    --alert-btn-danger-active: var(--alert-btn-danger);

    --alert-focus-color: rgba(43, 114, 165, 0.3);
  }

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0;
  overflow-y: auto;
  background-color: rgba(0,0,0,.4);
  z-index: 10000;
  pointer-events: none;
  opacity: 0;
  transition: opacity .3s;
`;

const StyledAlertContainer = styled.div`
  width: 478px;
  pointer-events: none;
  background-color: #fff;
  text-align: center;
  border-radius: 5px;
  position: static;
  margin: 20px auto;
  display: inline-block;
  vertical-align: middle;
  transform: scale(1);
  transform-origin: 50% 50%;
  z-index: 10001;
  transition: opacity .2s,-webkit-transform .3s;

  @media all and (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

const StyledTitle = styled.div`
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
  text-transform: none;
  position: relative;
  display: block;
  padding: 13px 16px;
  font-size: 27px;
  line-height: normal;
  text-align: center;
  margin-bottom: 0px;

  &:first-child {
    margin-top: 26px;
  }
  &:not(:first-child) {
    padding-bottom: 0;
  }
  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

const StyledContent = styled.div`
  font-size: 16px;
  position: relative;
  float: none;
  line-height: normal;
  vertical-align: top;
  text-align: left;
  display: inline-block;
  margin: 0;
  padding: 0 10px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.64);
  max-width: calc(100% - 20px);
  overflow-wrap: break-word;
  box-sizing: border-box;

  &:first-child {
    margin-top: 45px;
  }
  &:last-child {
    margin-bottom: 45px;
  }
`;

const StyledAlertFooter = styled.div`
  text-align: right;
  padding-top: 13px;
  margin-top: 13px;
  padding: 13px 16px;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const StyledAlertButtonsContainer = styled.div`
  margin: 5px;
  display: inline-block;
  position: relative;
`;

const StyledAlertButton = styled.button`
  background-color: var(--alert-btn-confirm);
  color: white;
  border: none;
  box-shadow: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 24px;
  margin: 0;
  cursor: pointer;

  &:not([disabled]):hover {
    background-color: var(--alert-btn-confirm-hover);
  }
  &:active {
    background-color: var(--alert-btn-confirm-active);
  }
  &:focus {
    outline: none;
    box-shadow:
      0px 0px 0px 1px white,
      0px 0px 0px 3px rgba(43, 114, 165, 0.29);
  }
  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;

const AlertComponent = (props) => {
  const {
    isOpen,
    title,
    content,
    level,
    icon,
    allowHTML,
    buttons,
    dismissOnClickOutside,
    dismissOnEsc,
    dangerMode,
    dismissAfter
  } = props;

  return (
    <StyledAlertOverlay>
      <StyledAlertContainer>

      </StyledAlertContainer>
    </StyledAlertOverlay>
  );
};

export default AlertComponent;
