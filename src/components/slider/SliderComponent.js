import './SliderComponent.css';
import React, { Component } from 'react';
import Scroller from "../../services/ScrollerService";

class SliderComponent extends Component {

    slideRotation;
    scroller = new Scroller();

    constructor(props) {
        super(props);
        let position = 0;
        props['slides'].forEach((slide) => {
            slide.position = position;
            position++;
        });
        this.state = {
            active: SliderComponent.getIntegerBetweenArrayLength(0, props['slides'].length - 1),
            slides: props['slides']
        }
    }

    static listItemReturn(slide, active, style) {
        return active === slide.position ? <li className="homeCover" id={ 'slide_' + slide.position } key={ slide.id } style={ style } /> : null;
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
        const { active, slides } = this.state;
        let activeTitle = '';
        let activeSubTitle = '';
        let activeLink = '';

        const listItems = slides.map( (slide) => {
            const style = {
                backgroundImage: 'url(' + slide['cover']['url'] + ')',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed'
            };
            activeTitle = slide['title'];
            activeSubTitle = slide['sub_title'];
            activeLink = slide['post_link'];
            return SliderComponent.listItemReturn(slide, active, style);
        });

        return (
            <section id="sliderSection">
                <div id="callToActionOverlay">
                    <div className="text-center">
                        <h1 className="callToActionFont" id="callToActionTitle">{activeTitle}</h1>
                        <h3 id="callToActionSubtitle" className="callToActionFont">{activeSubTitle}</h3>
                        <div id="callToActionLineDivider" />
                        <a href={activeLink} target="_blank">
                            <button id="callToActionButton">Leia Mais</button>
                        </a>
                    </div>
                </div>
                <div className="slides">
                    <ul>{listItems}</ul>
                </div>
            </section>
        )
    }

}

export default SliderComponent;

