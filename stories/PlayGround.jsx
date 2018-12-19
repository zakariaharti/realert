import React, { Component } from 'react';
import styled from 'styled-components';

import Alert from '../src';

const StyledContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 15px 40px;
  border: 2px solid;
  outline: none;
  text-transform: capitalize;
  color: #ffffff;
  background: #fd387b;
  font-size: 1.4em;
  border-radius: 3px;
  cursor: pointer;
  transition: .1s ease-in;
  &:hover{
    background: #de316c;
  }
  &:focus{
    border-color: #c31852;
  }
`;

const mockData = {
  title: "this is title",
  content: "this is content",
  level: "this is level",
  icon: "info",
  allowHTML: false,
  dimsissAfter: 2000
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
        <StyledContainer>
          <StyledButton
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          >
          click me!
        </StyledButton>

          <Alert {...this.props} />
        </StyledContainer>
      </div>
    );
  }
}

export default PlayGround;
