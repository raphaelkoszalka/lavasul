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
    this.automaticRotateSlide();
  }

  componentWillUnmount() {
    clearInterval(this.slideRotation);
  }

  automaticRotateSlide() {
    this.slideRotation = setInterval(() => this.rotateSlideToNext(), 10000);
  }

  // @todo: fix method (resulting in stack overflow)
  // manuallyRotateSlide(toNext) {
  //   clearInterval(this.slideRotation);
  //   const { active } = this.state;
  //   const { slides } = this.props;
  //   // cheaper to check boolean then string
  //   if (toNext) {
  //     if (slides[active + 1]) {
  //       this.setState({ active: active + 1 });
  //       return;
  //     }
  //     return;
  //   }
  //   if (active >= 0) {
  //     this.setState({ active: active -1 });
  //     return;
  //   }
  //   this.setState({ active: 0  });
  // }

  rotateSlideToNext() {
    const { active } = this.state;
    const { slides } = this.props;
    if (slides[active + 1]) {
      this.setState({ active: active + 1 });
      return;
    }
    this.setState({ active: 0 });
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
    const sectionStyle = { marginBottom: '750px !important' };

    return (
        <section style={sectionStyle}>
          <div className="slides">
            <ul>{listItems}</ul>
          </div>
        </section>
    )
  }
}

export default SliderComponent;

