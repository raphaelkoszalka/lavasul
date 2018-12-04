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
        // TOTALLY NOT PROUD OF THIS
        // SHOULD BE ONE FUNCTION BUT REACT IS CALLING ON RUN TIME
        // WHEN ELEMENTS DOESN'T EXIST YET
        this.navigateToCompanySection = this.navigateToCompanySection.bind(this);
        this.navigateToMovieSection = this.navigateToMovieSection.bind(this);
        this.navigateToServicesSection = this.navigateToServicesSection.bind(this);
        this.navigateToPositiveAmbientPoint = this.navigateToPositiveAmbientPoint.bind(this);
        this.navigateToRecentBlog = this.navigateToRecentBlog.bind(this);
    }

    static defaultState() {
        return { isLoading: true, content: {} }
    }

    componentWillMount() {
        this.request.get(AppConstants.ENDPOINT_HOME).then( (res) => {
            this.setState({ isLoading: false, content: JSON.parse(res['text']) });
        });
    }

    // should be just one function, fix this
    navigateToCompanySection() {
        this.scroller.scrollToResolver(document.getElementById('companyHomeSection'));
    }
    // should be just one function, fix this
    navigateToMovieSection() {
        this.scroller.scrollToResolver(document.getElementById('institutionalVideo'));
    }
    // should be just one function, fix this
    navigateToServicesSection() {
        this.scroller.scrollToResolver(document.getElementById('services'));
    }
    // should be just one function, fix this
    navigateToPositiveAmbientPoint() {
        this.scroller.scrollToResolver(document.getElementById('positiveAmbientPoint'));
    }
    // should be just one function, fix this
    navigateToRecentBlog() {
        this.scroller.scrollToResolver(document.getElementById('recentBlog'));
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
            <div id="homePage">
                <SliderComponent slides={ content['slides'] } />

                <section id="institutionalVideo">
                    <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                        <InstitutionalMovieComponent />
                    </div>
                </section>

                <section id="positiveAmbientPoint">
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                        <div className="panel">
                            <div className="panel-body">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default HomePage;