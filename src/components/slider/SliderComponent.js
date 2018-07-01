import './SliderComponent.css';
import React, { Component } from 'react';

class SliderComponent extends Component {

  slideRotation;

  constructor(props) {
    super(props);
    this.props = props;
    let position = 0;
    this.props['slides'].forEach((slide) => {
      slide.position = position;
      position++;
    });
    this.state = this.defaultState();
  }

  defaultState() {
    return { active: SliderComponent.getIntegerBetweenArrayLength(0, this.props['slides'].length - 1) }
  }

  static listItemReturn(slide, active, style) {
    return active === slide.position ? <li className="fadeIn" id={ 'slide_' + slide.position } key={ slide.id } style={ style }></li> : null;
  }

  static getIntegerBetweenArrayLength(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentDidMount() {
    this.slideRotation = setInterval(() => {
      const { active } = this.state;
      const { slides } = this.props;
      if (slides[active + 1]) {
        this.setState({ active: active + 1 });
        return;
      }
      this.setState({ active: 0 });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.slideRotation);
  }

  render() {
    const { slides } = this.props;
    const { active } = this.state;
    const listItems = slides.map( (slide) => {
      const style = {
        background: 'url(' + slide['cover']['url'] + ')',
        backgroundSize: 'cover !important',
        backgroundPosition: 'center center'
      };
      return SliderComponent.listItemReturn(slide, active, style);
    });
    const caretStyle = {
      color: '#FFF',
      fontSize: '4em'
    };

    return (
        <section>
          <div className="slides">
            <ul>{listItems}</ul>
          </div>
          <div className="clearfix"></div>
          <div id="next">
            <h1 style={caretStyle}><i className="fas fa-caret-right"></i></h1>
          </div>
          <div id="prev">
            <h1 style={caretStyle}><i className="fas fa-caret-left"></i></h1>
          </div>
        </section>
    )
  }
}

export default SliderComponent;

