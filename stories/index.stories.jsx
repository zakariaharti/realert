import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Alert from '../src';
import PlayGround from './PlayGround';

const mockData = {
  title: "this is title",
  content: "this is content",
  level: "this is level",
  icon: "",
  allowHTML: false,
};

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp="" />);

storiesOf('example', module)
  .add('basic', () => (
    <PlayGround>
      {(isOpen, openAlert) => (
        <button onClick={openAlert}>open me!</button>

        <Alert
          isOpen={isOpen}
          {...mockData}
        />
      )}
    </PlayGround>
  ));
