import React from 'react';
import uuid from 'uuid/v1';

/* eslint-disable */

import {
  StyledTitle,
  StyledContent,
  StyledAlertButton,
  StyledAlertFooter,
  StyledAlertWrapper,
  StyledAlertOverlay,
  StyledAlertContainer,
  StyledAlertButtonsContainer
} from '../StyledComponents';

import SuccessIcon from '../StyledComponents/Icons';

const getContent = (content) => {
  return {
    __html: content
  }
};

export const ExpectedAlertComponent = (props) => {
  const {
    isOpen,
    title,
    content,
    level,
    icon,
    allowHTML,
    buttons,
    /*dismissOnClickOutside,
    dismissOnEsc,
    dangerMode,
    dismissAfter*/
  } = props;


  return (
      <StyledAlertWrapper>
        <StyledAlertOverlay>
              <StyledAlertContainer level={level}>
                {
                  icon && icon == "success" ? (
                    <SuccessIcon />
                  ) : null
                }

                {
                  allowHTML && title && title.length ? (
                    <div dangerouslySetInnerHTML={getContent(title)} />
                  ) : title ? (
                    <StyledTitle>{title}</StyledTitle>
                  ) : null
                }

                {
                  allowHTML && content && content.length ? (
                    <div dangerouslySetInnerHTML={getContent(content)} />
                  ) : content ? (
                    <StyledContent>{content}</StyledContent>
                  ) : null
                }

                {
                  typeof buttons !== 'undefined' &&
                  buttons !== false && buttons.length ?
                   <StyledAlertFooter>
                     {
                       buttons.map(btn => (
                         <StyledAlertButtonsContainer key={uuid()}>
                           <StyledAlertButton onClick={btn.action && btn.action}>
                             {btn.label.length && btn.label}
                           </StyledAlertButton>
                         </StyledAlertButtonsContainer>
                       ))
                     }
                   </StyledAlertFooter>
                  : null
                }
              </StyledAlertContainer>
        </StyledAlertOverlay>
      </StyledAlertWrapper>
  );
};
