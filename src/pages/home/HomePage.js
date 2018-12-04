import './HomePage.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import { AppConstants } from "../../AppConstants";
import LoaderComponent from "../../components/loader/LoaderComponent";
import SliderComponent from "../../components/slider/SliderComponent";
import InstitutionalMovieComponent from "../../components/institutional-movie/InstitutionalMovieComponent";
import Scroller from "../../services/ScrollerService";
import ServiceBlockComponent from "../../components/service-block/ServiceBlockComponent";

class HomePage extends Component {

    request = new HttpRequest();
    scroller = new Scroller();

    constructor() {
        super();
        this.state = HomePage.defaultState();
    }

    static defaultState() {
        return { isLoading: true, content: {} }
    }

    componentWillMount() {
        this.request.get(AppConstants.ENDPOINT_HOME).then( (res) => {
            this.setState({ isLoading: false, content: JSON.parse(res['text']) });
        });
    }

    createMarkup() {
        return {__html: this.state['content']['company']['description_home']};
    };

    render() {
        const { isLoading, content } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }

        return (
            <section id="homePage">

                <section id="sliderBlock">
                    <SliderComponent slides={ content['slides'] } />
                </section>

                <section id="servicesBlock">
                    <ServiceBlockComponent services={ content['service'] } />
                </section>

            </section>
        )
    }

}

export default HomePage;