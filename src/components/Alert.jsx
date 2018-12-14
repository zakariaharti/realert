import React, { Component } from 'react';

class Alert extends Component {
  state = {
    isOpen: this.props.isOpen,
  };

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;
    if (prevProps.isOpen !== isOpen) {
      this.setState({ isOpen: isOpen });
    }
  }

  render() {
    return (
      <p>gh</p>
    );
  }
}

export default Alert;
