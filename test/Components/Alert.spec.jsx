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
});
