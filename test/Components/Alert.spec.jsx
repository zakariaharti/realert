import React from 'react';
import { mount } from 'enzyme';

import { getAlert } from '../../src/helpers/mock';
import Alert from '../../src';
import { ExpectedAlertComponent } from '../../src/helpers/expectedComponents';

describe('test <Alert />',() => {
  let alertData = null;

  beforeEach(() => {
    alertData = getAlert();
  });

  it('should render with initiale state',() => {
    alertData.isOpen = true;

    const Mounted = mount(<Alert {...alertData} />);

    expect(Mounted.state().isOpen).toBe(true);
  });

  it('should render with change state',() => {
    alertData.isOpen = false;
    let Mounted = null;
    Mounted = mount(<Alert {...alertData} />);

    expect(Mounted.state().isOpen).toBe(false);

    alertData.isOpen = true;
    Mounted = mount(<Alert {...alertData} />);

    expect(Mounted.state().isOpen).toBe(true);
  });

  it('should call onAdd on mouning',() => {
    let num = 0;
    alertData.isOpen = true;
    alertData.onAdd = () => num++;

    const Mounted = mount(<Alert {...alertData} />);
    expect(num).toEqual(1);
  });

  it('should call onRemove on unMouning',() => {
    let num = 0;
    alertData.isOpen = true;
    alertData.onRemove = () => num++;

    const Mounted = mount(<Alert {...alertData} />);
    Mounted.unmount();

    expect(num).toEqual(1);
  });

  it('should render AlertComponent',() => {
    alertData.isOpen = true;

    const AlertMounted = mount(<Alert {...alertData} />);
    const ExpectedAlert = mount(<ExpectedAlertComponent {...alertData} />);

    expect(AlertMounted.html()).toEqual(ExpectedAlert.html());
  });
});
