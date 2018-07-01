import './SliderComponent.css';
import React, { Component } from 'react';

class SliderComponent extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = SliderComponent.defaultState();
  }

  static defaultState() {
    return { slides: [], active: {}, listStyle: {} }
  }

  componentWillMount() {
    this.setState( { active: this.props.slides[0] } );
  }

  componentDidMount() {
    this.initiateSlideRotation(this.props);
  }

  initiateSlideRotation(props) {
    let position = 0;
    setInterval( () => {
      position++;
      if (props.slides[position]) {
        this.setState( { active: props.slides[position] });
        return;
      }
      position = 0;
      this.setState( { active: props.slides[position] });
    }, 10000);

  }

  render() {
    const { active } = this.state;
    const listStyle = {

    };

    console.log(listStyle);

    return (
        <section>
          <div className="slides">
            <ul>
              <li className="fadeInRightBig" key={active['ID']} style={listStyle}></li>
            </ul>
          </div>
          <div className="clearfix"></div>
          {/*<div id="next">*/}
          {/*<h1><i className="fas fa-caret-right"></i></h1>*/}
          {/*</div>*/}
          {/*<div id="prev">*/}
          {/*<h1><i className="fas fa-caret-left"></i></h1>*/}
          {/*</div>*/}
        </section>
    )
  }
}

export default SliderComponent;

