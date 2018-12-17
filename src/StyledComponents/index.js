import styled, { keyframes, css } from 'styled-components';

export const KeyframeScale = keyframes`
  0% {
    transform: scale(1);
  }
  1% {
    transform: scale(0.5);
  }

  45% {
    transform: scale(1.05);
  }

  80% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1);
  }
`;

export const StyledAlertWrapper = styled.div`
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

  .realert-overlay-enter{
    pointer-events: none;
    opacity: 0;
  }

  .realert-overlay-enter-active{
    pointer-events: none;
    opacity: 1;
  }

  .realert-overlay-exit{
    pointer-events: none;
    opacity: 0.5;
  }

  .realert-overlay-enter-active{
    pointer-events: none;
    opacity: 0;
  }

  .realert-container-enter{
    opacity: 0;
    pointer-events: auto;
  }

  .realert-container-enter-active{
    opacity: 1;
    pointer-events: auto;
    box-sizing: border-box;
    animation: ${KeyframeScale} 0.3s;
    will-change: transform;
  }
`;

export const StyledAlertOverlay = styled.div`
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

  &::before {
    content: ' ';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;

export const StyledAlertContainer = styled.div`
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
  transition: opacity .2s,transform .3s;

  @media all and (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

export const StyledTitle = styled.div`
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

export const StyledContent = styled.div`
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

export const StyledAlertFooter = styled.div`
  text-align: right;
  padding-top: 13px;
  margin-top: 13px;
  padding: 13px 16px;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const StyledAlertButtonsContainer = styled.div`
  margin: 5px;
  display: inline-block;
  position: relative;
`;

export const StyledAlertButton = styled.button`
  background-color: ${(props) => {
    if (props.status === 'cancel') {
      return 'var(--alert-btn-cancel)';
    }
    return 'var(--alert-btn-confirm)';
  }};
  color: ${(props) => {
    if (props.status === 'cancel') {
      return '#555555';
    }
    return 'white';
  }};
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

export const StyledIcon = styled.div`
  width: 80px;
  height: 80px;
  border-width: 4px;
  border-style: solid;
  border-radius: 50%;
  padding: 0;
  position: relative;
  box-sizing: content-box;
  margin: 20px auto;

  &:first-child {
    margin-top: 32px;
  }
`;
