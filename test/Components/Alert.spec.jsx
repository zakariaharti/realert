import React from 'react';
import { mount } from 'enzyme';

import { getAlert } from '../../src/helpers/mock';
import Alert from '../../src';

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

  it('should timer be null if dismissAfter is 0',() => {
    alertData.isOpen = true;
    alertData.dismissAfter = 0;
    let Mounted = null;

    Mounted = mount(<Alert {...alertData} />);

    expect(Mounted.state().timer).toBe(null);
  });
});
