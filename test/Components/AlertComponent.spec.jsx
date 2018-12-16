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
    alertData.timeout = 400;

    const AlertMounted = mount(<AlertComponent {...alertData} />);
    const ExpectedAlert = mount(<ExpectedAlertComponent {...alertData} />);

    expect(AlertMounted.html()).toEqual(ExpectedAlert.html());
  });

  it('should render success icon',() => {
    alertData.isOpen = true;
    alertData.icon = "success";

    const AlertMounted = mount(<AlertComponent {...alertData} />);
    const ExpectedAlert = mount(<ExpectedAlertComponent {...alertData} />);

    expect(AlertMounted.html()).toEqual(ExpectedAlert.html());
  });

  it('should not render icon if null',() => {
    alertData.isOpen = true;
    alertData.icon = null;

    const AlertMounted = mount(<AlertComponent {...alertData} />);
    const ExpectedAlert = mount(<ExpectedAlertComponent {...alertData} />);

    expect(AlertMounted.html()).toEqual(ExpectedAlert.html());
  });

  it('should render html title when allowHTML is true',() => {
    alertData.isOpen = true;
    alertData.allowHTML = true;
    alertData.title = '<strong>title here!</strong>';

    const AlertMounted = mount(<AlertComponent {...alertData} />);
    const ExpectedAlert = mount(<ExpectedAlertComponent {...alertData} />);

    expect(AlertMounted.html()).toEqual(ExpectedAlert.html());
  });

  it('should render title when allowHTML is false',() => {
    alertData.isOpen = true;
    alertData.allowHTML = false;
    alertData.title = 'title here!';

    const AlertMounted = mount(<AlertComponent {...alertData} />);
    const ExpectedAlert = mount(<ExpectedAlertComponent {...alertData} />);

    expect(AlertMounted.html()).toEqual(ExpectedAlert.html());
  });

  it('should render html content when allowHTML is true',() => {
    alertData.isOpen = true;
    alertData.allowHTML = true;
    alertData.content = '<strong>content here!</strong>';

    const AlertMounted = mount(<AlertComponent {...alertData} />);
    const ExpectedAlert = mount(<ExpectedAlertComponent {...alertData} />);

    expect(AlertMounted.html()).toEqual(ExpectedAlert.html());
  });

  it('should render content when allowHTML is false',() => {
    alertData.isOpen = true;
    alertData.allowHTML = false;
    alertData.content = 'content here!';

    const AlertMounted = mount(<AlertComponent {...alertData} />);
    const ExpectedAlert = mount(<ExpectedAlertComponent {...alertData} />);

    expect(AlertMounted.html()).toEqual(ExpectedAlert.html());
  });
});
