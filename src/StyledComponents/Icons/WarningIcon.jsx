import React from 'react';
import styled, { keyframes } from 'styled-components';

import {StyledIcon} from '../index';

const pulseWarning = keyframes`
  from {
    border-color: #F8D486;
  }
  to {
    border-color: var(--realert-orange);
  }
`;

const StyledWarningIcon = styled(StyledIcon)`
  border-color: var(--realert-orange);
  animation: ${pulseWarning} 0.75s infinite alternate;

  /* Exclamation mark */
  .icon--warning__body {
   position: absolute;
   width: 5px;
   height: 47px;
   left: 50%;
   top: 10px;
   border-radius: 2px;
   margin-left: -2px;
   background-color: var(--realert-orange);
  }

  .icon--warning__dot {
   position: absolute;
   width: 7px;
   height: 7px;
   border-radius: 50%;
   margin-left: -4px;
   left: 50%;
   bottom: -11px;
   background-color: var(--realert-orange);
  }
`;

const WarningIcon = () => (
  <StyledWarningIcon>
    <span className="icon--warning__body">
        <span className="icon--warning__dot"></span>
    </span>
  </StyledWarningIcon>
);

export default WarningIcon;
