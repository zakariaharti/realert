import React, { Component } from 'react';

import AlertComponent from './AlertComponent';

/**
 * Alert component class
 *
 * @author zakariaharti
 */
class Alert extends Component {

  constructor(props){
    super(props);

    /**
     * state of the component
     */
    this.state = {
      isOpen: this.props.isOpen,
      timer: setTimeout(() => {
  
      }, this.props.dismissAfter),
    };

    this.close.bind(this);
  }

  /**
   * invoking onAdd with the component is mounted on the DOM
   */
  componentDidMount(){
    const { onAdd } = this.props;
    if(onAdd && typeof onAdd === "function"){
      onAdd(this);
    }
  }

  /**
   * updating state based on props changes
   */
  componentDidUpdate(prevProps) {
    const {
      isOpen,
      dismissAfter
    } = this.props;
    if (prevProps.isOpen !== isOpen) {
      this.setState({ isOpen: isOpen });
    }
    if (prevProps.dismissAfter !== dismissAfter) {
      this.setState({
        timer: setTimeout(() => {

         }, this.props.dismissAfter)
      });
    }
  }

  /**
   * cleaning timeout
   */
  componentWillUnmount(){
    clearTimeout(this.state.timer);

    const { onRemove } = this.props;
    if(onRemove && typeof onRemove === "function"){
      onAdd(this);
    }
  }

  /**
   * close the alert
   */
  close(){
    if(this.state.isOpen){
      this.setState({ isOpen: false });
    }
  }

  render() {
    const { isOpen } = this.state.isOpen;
    const {
      title,
      content,
      level,
      icon,
      allowHTML,
      buttons,
    } = this.props;
    return (
      <AlertComponent
        isOpen={this.state.isOpen}
        title={title}
        content={content}
        level={level}
        icon={icon}
        allowHTML={allowHTML}
        buttons={buttons}
      />
    );
  }
}

Alert.defaultProps = {
  dismissAfter: 0
};

export default Alert;
