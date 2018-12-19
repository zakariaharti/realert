import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import AlertComponent from './AlertComponent';
import GlobalStyles from '../StyledComponents/GlobalStyles';

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
    };

    this.close.bind(this);
  }

  /**
   * invoking onAdd with the component is mounted on the DOM
   */
  componentDidMount(){
    const {
      onAdd,
    } = this.props;
    if(onAdd && typeof onAdd === "function"){
      onAdd();
    }
  }

  /**
   * updating state based on props changes
   */
  componentDidUpdate(prevProps) {
    const {
      isOpen,
    } = this.props;
    if (prevProps.isOpen !== isOpen) {
      this.setState({ isOpen: isOpen });
    }
  }

  /**
   * cleaning timeout
   */
  componentWillUnmount(){
    clearTimeout(this.state.timer);

    const { onRemove } = this.props;
    if(onRemove && typeof onRemove === "function"){
      onRemove();
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
      <Fragment>
        <GlobalStyles />

        <AlertComponent
          isOpen={this.state.isOpen}
          title={title}
          content={content}
          level={level}
          icon={icon}
          allowHTML={allowHTML}
          buttons={buttons}
        />
      </Fragment>
    );
  }
}

Alert.defaultProps = {
  isOpen: false,
  dismissAfter: 0,
};

export default Alert;
