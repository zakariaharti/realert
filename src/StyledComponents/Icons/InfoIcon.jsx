import React from 'react';
import styled, { keyframes } from 'styled-components';

import {StyledIcon} from '../index';

const StyledInfoIcon = styled(StyledIcon)`
border-color: var(--realert-blue);

/* "i"-letter body */
&::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 29px;
  left: 50%;
  bottom: 17px;
  border-radius: 2px;
  margin-left: -2px;
  background-color: var(--realert-blue);
}
/* "i"-letter dot */
&::after {
  content: "";
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-left: -3px;
  top: 19px;
  background-color: var(--realert-blue);
  left: 50%;
}
`;

export default StyledInfoIcon;
