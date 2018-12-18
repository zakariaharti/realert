import React from 'react';
import { CSSTransition } from 'react-transition-group';
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
    level,
    icon,
    allowHTML,
    buttons,
    timeout,
    /*dismissOnClickOutside,
    dismissOnEsc,
    dangerMode,
    dismissAfter*/
  } = props;


  return (
    <StyledAlertWrapper>

      <CSSTransition
        in={isOpen}
        timeout={timeout || 300}
        classNames="realert-overlay"
        unmountOnExit
      >
         <StyledAlertOverlay>

            <CSSTransition
              in={true}
              timeout={300}
              classNames="realert-container"
              unmountOnExit
            >

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

            </CSSTransition>

          </StyledAlertOverlay>
      </CSSTransition>

    </StyledAlertWrapper>
  );
};

export default AlertComponent;
