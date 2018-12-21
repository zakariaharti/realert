import React from 'react';
import { CSSTransition } from 'react-transition-group';
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

import {
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  InfoIcon
} from '../StyledComponents/Icons';

const getContent = (content) => {
  return {
    __html: content
  }
};

const AlertComponent = (props) => {
  const {
    isOpen,
    title,
    content,
    icon,
    allowHTML,
    buttons,
    timeout,
    overlayStyles,
    containerStyles,
    titleStyles,
    contentStyles,
    footerStyles,
    buttonStyles,
    alignButtons
  } = props;


  return (
    <StyledAlertWrapper>

      <CSSTransition
        in={isOpen}
        timeout={timeout || 300}
        classNames="realert-overlay"
        unmountOnExit
      >
         <StyledAlertOverlay styles={overlayStyles}>

            <CSSTransition
              in={true}
              timeout={300}
              classNames="realert-container"
              unmountOnExit
            >

              <StyledAlertContainer styles={containerStyles}>
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
                        <StyledTitle styles={titleStyles} dangerouslySetInnerHTML={{__html: title}} />
                      ) : !allowHTML && title ? (
                        <StyledTitle styles={titleStyles}>{title}</StyledTitle>
                      ) : null
                  }

                  {
                      allowHTML && content ? (
                        <StyledContent styles={contentStyles} dangerouslySetInnerHTML={{__html: content}} />
                      ) : !allowHTML && content ? (
                        <StyledContent styles={contentStyles}>{content}</StyledContent>
                      ) : null
                  }

                  {
                      typeof buttons !== 'undefined' &&
                      buttons !== false && buttons.length ?
                       <StyledAlertFooter styles={footerStyles} align={alignButtons || 'right'}>
                         {
                           buttons.map(btn => (
                             <StyledAlertButtonsContainer key={uuid()}>
                               <StyledAlertButton
                                 styles={buttonStyles}
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

            </CSSTransition>

          </StyledAlertOverlay>
      </CSSTransition>

    </StyledAlertWrapper>
  );
};

export default AlertComponent;
