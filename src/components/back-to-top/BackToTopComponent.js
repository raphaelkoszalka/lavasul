import './BackToTopComponent.css';
import React, { Component } from 'react';
import Scroller from "../../services/ScrollerService";

class BackToTopComponent extends Component {

    scroller = new Scroller();

    constructor() {
        super();
        this.navigateToTop = this.navigateToTop.bind(this);
    }

    navigateToTop() {
        const topOfTheWorld = document.getElementById('topOfTheWorld');
        this.scroller.scrollToResolver(topOfTheWorld);
    }

    render() {
        return (
            <div id="backToTop" onClick={this.navigateToTop}>
                <img src="./icons/arrow-top.svg" alt=""/>
            </div>
        )
    }
}

export default BackToTopComponent;