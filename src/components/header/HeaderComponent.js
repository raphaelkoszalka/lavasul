import './HeaderComponent.css';
import React, { Component } from 'react';

class HeaderComponent extends Component {

  render() {
    return (
        <div id="menu">
          <div className="col-md-10 col-md-offset-1">
            <nav>
              <div className="row">
                <div className="col-md-3">
                  <img src="./brand/logo_giga.png" id="brand-image" alt=""/>
                </div>
                <div className="col-md-9"></div>
              </div>
            </nav>
          </div>
        </div>
    )
  }

}

export default HeaderComponent;