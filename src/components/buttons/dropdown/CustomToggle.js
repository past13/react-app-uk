import React, { Component } from 'react';

class CustomToggle extends Component {
    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.props.onClick(e);
    }
  
    render() {
      return (
        <a href="" onClick={this.handleClick}>
          {this.props.children}
        </a>
      );
    }
  }
  
  export default CustomToggle;