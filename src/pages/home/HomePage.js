import './HomePage.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import { AppConstants } from "../../AppConstants";
import LoaderComponent from "../../components/loader/LoaderComponent";
import SliderComponent from "../../components/slider/SliderComponent";
import InstitutionalMovieComponent from "../../components/institutional-movie/InstitutionalMovieComponent";
import ServiceBlockComponent from "../../components/service-block/ServiceBlockComponent";
import AboutComponent from "../../components/about/AboutComponent";
import EnvironmentalComponent from "../../components/environmental/EnvironmentalComponent";
import BlogComponent from "../../components/blog/BlogComponent";

class HomePage extends Component {

    constructor() {
        super();
        this.state = { isLoading: true, content: {} }
    }

    componentWillMount() {
        HttpRequest.get(AppConstants.ENDPOINT_HOME).then( (res) => {
            this.setState({ isLoading: false, content: JSON.parse(res['text']) });
        });
    }

    render() {
        const { isLoading, content } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }

        return (
            <section id="homePage">
                <SliderComponent slides={ content['slides'] } />
                <ServiceBlockComponent services={ content['service'] } />
                <AboutComponent company={ content['company'] } />
                <InstitutionalMovieComponent />
                <EnvironmentalComponent environmental={ content['environmental'] } />
                <BlogComponent blog={ content['blog'] } />
                <div className="clearfix" />
                <hr/>
            </section>
        )
    }
}

export default HomePage;