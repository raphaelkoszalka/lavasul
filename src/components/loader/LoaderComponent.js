import './LoaderComponent.css';
import React, { Component } from 'react';

class LoaderComponent extends Component {

  render() {
    return (
        <div id="lds-wrapper">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
    )
  }
}

export default LoaderComponent;