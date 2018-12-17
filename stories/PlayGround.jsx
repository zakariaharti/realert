import React from 'react';

class PlayGround extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.openAlert.bind(this);
  }

  openAlert(){
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(){
    return this.props.children(this.state.isOpen, this.openAlert);
  }
}

export default PlayGround;
