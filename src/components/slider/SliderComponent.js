import './SliderComponent.css';
import React, { Component } from 'react';

class SliderComponent extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = SliderComponent.defaultState();
  }

  static defaultState() {
    return { slides: [], active: {} }
  }

  componentWillMount() {
    this.setState( { active: this.props['slides'][1], slides: this.props['slides'] } );
  }

  initiateSlideRotation() {
    setInterval( () => {
      if (this.props.slides[this.props.slides.length + 1]) {
        this.setState( { active: this.props.slides[this.props.slides.length + 1] });
        return;
      }
      this.setState( { active: this.props.slides[0] });
    }, 1000);
  }

  render() {
    const { active } = this.state;
    const listStyle = { background: 'url(' + active['cover']['url'] + ')' };

    this.initiateSlideRotation();

    return (
        <section>
          <div className="slides">
            <ul>
              <li className="fadeInRightBig" key={active['ID']} style={listStyle}></li>
            </ul>
          </div>
          <div className="clearfix"></div>
          <div id="next">
            <h1><i className="fas fa-caret-right"></i></h1>
          </div>
          <div id="prev">
            <h1><i className="fas fa-caret-left"></i></h1>
          </div>
        </section>
    )
  }
}

export default SliderComponent;

