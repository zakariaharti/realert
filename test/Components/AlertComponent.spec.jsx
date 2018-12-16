import React from 'react';
import { mount, shallow } from 'enzyme';

import AlertComponent from '../../src';
import { ExpectedAlertComponent } from '../../src/helpers/expectedComponents';
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

  it('should mount with initial isOpen prop',() => {
    let AlertMounted = null;
    alertData.isOpen = false;

    AlertMounted = mount(<AlertComponent {...alertData} />);

    expect(AlertMounted.prop('isOpen')).toEqual(false);

    alertData.isOpen = true;

    AlertMounted = mount(<AlertComponent {...alertData} />);

    expect(AlertMounted.prop('isOpen')).toEqual(true);
  });

  it('should not render title if not provided',() => {
    let AlertMounted = null;
    alertData.title = null;

    AlertMounted = mount(<AlertComponent {...alertData} />);

    expect(AlertMounted.prop('title')).toEqual(null);
  });

  it('should render without errors',() => {
    alertData.isOpen = true;
    alertData.timeout = 0;

    const AlertMounted = mount(<AlertComponent {...alertData} />);
    const ExpectedAlert = mount(<ExpectedAlertComponent {...alertData} />);

    expect(AlertMounted.html()).toEqual(ExpectedAlert.html());
  });
});
