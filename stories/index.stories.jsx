import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import PlayGround from './PlayGround';

const mockData = {
  title: "this is title",
  content: "this is content",
  level: "this is level",
  icon: "",
  allowHTML: false,
};

const stories = storiesOf('relaert',module).addDecorator(withInfo);

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
