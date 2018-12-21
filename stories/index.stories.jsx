import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import PlayGround from './PlayGround';

const mockData = {
  title: "This is title",
  content: "Awesome content text here or custom HTML",
  icon: "success",
  allowHTML: false,
  buttons: [
    {
      label: 'comfirm'
    },
    {
      label: 'cancel',
      type: 'cancel'
    },
    {
      label: 'danger!',
      type: 'danger'
    }
  ]
};

const mockData1 = {
  title: "Awesome title goes here ",
};

const mockData2 = {
  title: "Awesome title goes here ",
  content: "content text goes here"
};

const mockData3 = {
  title: "Awesome title goes here ",
  content: "text here will get a <b>bold</b> font style",
  allowHTML: true
};

const mockData4 = {
  icon: "success",
  title: "Success!",
  content: "text here will get a <b>bold</b> font style",
  allowHTML: true
};

const mockData5 = {
  icon: "info",
  title: "Info!",
  content: "text here will get a <b>bold</b> font style",
  allowHTML: true
};

const mockData6 = {
  icon: "warning",
  title: "Warning!",
  content: "text here will get a <b>bold</b> font style",
  allowHTML: true
};

const mockData7 = {
  icon: "error",
  title: "Error!",
  content: "text here will get a <b>bold</b> font style",
  allowHTML: true
};

const mockData8 = {
  icon: "success",
  title: "Success!",
  content: "You have been successfuly registered",
  allowHTML: false,
  buttons: [
    {
      label: 'Comfirm',
      action: () => action('comfirmed')
    },
    {
      label: 'Cancel',
      type: 'cancel',
      action: () => action('canceled')
    }
  ]
};

const stories = storiesOf('realert',module).addDecorator(withInfo);

stories.add('welcome', () => (
    <PlayGround {...mockData} />
), {
  info: {
    inline: true,
    source: false,
    propTables: false,
    text: `
      ## Description
      see more on [realert](https://github.com/zakariaharti/realert.git)
      ## Installing
          yarn add realert
      ## Example code
           import React from 'react';
           import Alert from 'realert';

           class MyComponent extends React.Component{
             state = {
              isOpen: false,
              alertData: {
                title: "this is title",
                content: "this is content",
                level: "this is level",
                icon: "",
                allowHTML: false,
              }
             };

             myRef = React.createRef();

             close = () => this.myRef.current.close();

             open = () => {
               this.setState({ isOpen: !this.state.isOpen });
             }

             render(){
               return(
                 <div>
                   <button onClick={this.open()}>click me!</button>
                   <div>
                     <Alert
                       ref={this.myRef}
                       isOpen={this.state.isOpen}
                       {...this.state.alertData}
                     />
                   </div>
                </div>
             );
           }
          }
    `
  }
});

const stories2 = storiesOf('realert/Examples',module).addDecorator(withInfo);

stories2.add('with title', () => (
    <PlayGround {...mockData1} />
), {
  info: {
    inline: true,
    source: false,
    propTables: false,
  }
});

stories2.add('title + content', () => (
    <PlayGround {...mockData2} />
), {
  info: {
    inline: true,
    source: false,
    propTables: false,
  }
});

stories2.add('content with custom HTML', () => (
    <PlayGround {...mockData3} />
), {
  info: {
    inline: true,
    source: false,
    propTables: false,
  }
});

stories2.add('with icon (success)', () => (
    <PlayGround {...mockData4} />
), {
  info: {
    inline: true,
    source: false,
    propTables: false,
  }
});

stories2.add('with icon (info)', () => (
    <PlayGround {...mockData5} />
), {
  info: {
    inline: true,
    source: false,
    propTables: false,
  }
});

stories2.add('with icon (warning)', () => (
    <PlayGround {...mockData6} />
), {
  info: {
    inline: true,
    source: false,
    propTables: false,
  }
});

stories2.add('with icon (error)', () => (
    <PlayGround {...mockData7} />
), {
  info: {
    inline: true,
    source: false,
    propTables: false,
  }
});

stories2.add('with buttons', () => (
    <PlayGround {...mockData8} />
), {
  info: {
    inline: true,
    source: false,
    propTables: false,
  }
});
