import React, { Component } from 'react';

import Alert from '../src';

const mockData = {
  title: "this is title",
  content: "this is content",
  level: "this is level",
  icon: "success",
  allowHTML: false,
};

class PlayGround extends Component {

  constructor(props){
    super(props);

    /**
     * state of the component
     */
    this.state = {
      isOpen: false,
    };
  }

  render(){
    return(
      <div>
        <button onClick={() => {this.setState({ isOpen: !this.state.isOpen })}}>open me!</button>

        <Alert
          isOpen={this.state.isOpen}
          {...mockData}
        />
      </div>
    );
  }
}

export default PlayGround;
