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

import SuccessIcon from '../StyledComponents/Icons';

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
    <CSSTransition
      in={isOpen}
      timeout={timeout || 300}
      classNames="realert-overlay"
      unmountOnExit
    >
      <StyledAlertWrapper>
        <StyledAlertOverlay>
              <CSSTransition
                in={isOpen}
                timeout={timeout || 300}
                classNames="realert-container"
                unmountOnExit
              >
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
              </CSSTransition>
        </StyledAlertOverlay>
      </StyledAlertWrapper>
    </CSSTransition>
  );
};

export default AlertComponent;
