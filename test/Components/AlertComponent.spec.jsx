import React from 'react';
import { mount } from 'enzyme';

import AlertComponent from '../../src';

describe('test <AlertComponent />',() => {
  it('should render without errors',() => {
    mount(<AlertComponent />);
  });
});
