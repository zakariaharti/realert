import React from 'react';
import { mount, shallow } from 'enzyme';

import AlertComponent from '../../src';
import { getAlert } from '../../src/helpers/mock';
import {
  StyledAlertContainer,
  StyledAlertWrapper,
  StyledAlertOverlay
} from '../../src/StyledComponents';
import SuccessIcon from '../../src/StyledComponents/Icons';

describe('test <AlertComponent />',() => {
  let alertData = null;

  beforeEach(() => {
    alertData = getAlert();
  });

  it('should render without errors',() => {
    mount(<AlertComponent />);
  });

  it('should mount with initial isOpen prop',() => {
    let AlertMounted = null;
    alertData.isOpen = false;

    AlertMounted = mount(<AlertComponent {...alertData} />);

    expect(AlertMounted.prop('isOpen')).toEqual(false);

    alertData.isOpen = true;

    AlertMounted = mount(<AlertComponent {...alertData} />);

    expect(AlertMounted.prop('isOpen')).toEqual(true);
  });
});
