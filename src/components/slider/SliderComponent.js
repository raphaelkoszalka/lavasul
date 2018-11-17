import './SliderComponent.css';
import React, { Component } from 'react';
import Scroller from "../../services/ScrollerService";

class SliderComponent extends Component {

    slideRotation;
    scroller = new Scroller();

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

    static listItemReturn(slide, active, style) {
        return active === slide.position ? <li className="homeCover" id={ 'slide_' + slide.position } key={ slide.id } style={ style }></li> : null;
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

    defaultState() {
        return { active: SliderComponent.getIntegerBetweenArrayLength(0, this.props['slides'].length - 1) }
    }

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
                backgroundImage: 'url(' + slide['cover']['url'] + ')',
                backgroundPosition: 'center center'
            };
            return SliderComponent.listItemReturn(slide, active, style);
        });

        return (
            <section>
                <div id="slideOverlay" />
                <div className="slides">
                    <ul>{listItems}</ul>
                </div>
                <div id="bigLogo">
                    <img src="./brand/lavasul_blue.png" alt=""/>
                </div>
            </section>
        )
    }

}

export default SliderComponent;

