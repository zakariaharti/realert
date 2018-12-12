import React from 'react';
import { CSSTransition } from 'react-transition-group';

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
    dismissOnClickOutside,
    dismissOnEsc,
    dangerMode,
    dismissAfter
  } = props;

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="realert-overlay"
      unmountOnExit
    >
      <StyledAlertWrapper>
        <StyledAlertOverlay>
          {state => (
            <CSSTransition
              in={state == 'entered'}
              timeout={300}
              classNames="realert-container"
              unmountOnExit
            >
              <StyledAlertContainer>
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
              </StyledAlertContainer>
            </CSSTransition>
          )}
        </StyledAlertOverlay>
      </StyledAlertWrapper>
    </CSSTransition>
  );
};

export default AlertComponent;
