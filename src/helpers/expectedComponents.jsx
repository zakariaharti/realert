import React from 'react';
import uuid from 'uuid/v1';

/* eslint-disable */

import {
  StyledExtendedTitle as StyledTitle,
  StyledExtendedContent as StyledContent,
  StyledExtendedAlertButton as StyledAlertButton,
  StyledExtendedAlertFooter as StyledAlertFooter,
  StyledAlertWrapper,
  StyledExtendedAlertOverlay as StyledAlertOverlay,
  StyledExtendedAlertContainer as StyledAlertContainer,
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
    title,
    content,
    icon,
    allowHTML,
    buttons,
    timeout,
    alignButtons
  } = props;


  return (
    <StyledAlertWrapper>

         <StyledAlertOverlay>

              <StyledAlertContainer>
                  {
                    icon && icon == "success" ? (
                        <SuccessIcon />
                      ) : icon == "warning" ? (
                        <WarningIcon />
                      ) : icon == "error" ? (
                        <ErrorIcon />
                      ) : icon == "info" ? (
                        <InfoIcon />
                      ) : null
                  }

                  {
                      allowHTML && title ? (
                        <StyledTitle dangerouslySetInnerHTML={{__html: title}} />
                      ) : !allowHTML && title ? (
                        <StyledTitle>{title}</StyledTitle>
                      ) : null
                  }

                  {
                      allowHTML && content ? (
                        <StyledContent dangerouslySetInnerHTML={{__html: content}} />
                      ) : !allowHTML && content ? (
                        <StyledContent >{content}</StyledContent>
                      ) : null
                  }

                  {
                      typeof buttons !== 'undefined' &&
                      buttons !== false && buttons.length ?
                       <StyledAlertFooter align={alignButtons || 'right'}>
                         {
                           buttons.map(btn => (
                             <StyledAlertButtonsContainer key={uuid()}>
                               <StyledAlertButton

                                 status={btn.type || 'primary'}
                                 onClick={btn.action && btn.action}
                                >
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
