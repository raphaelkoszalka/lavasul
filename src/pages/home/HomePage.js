import './HomePage.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import { AppConstants } from "../../AppConstants";
import LoaderComponent from "../../components/loader/LoaderComponent";
import SliderComponent from "../../components/slider/SliderComponent";
import InstitutionalMovieComponent from "../../components/institutional-movie/InstitutionalMovieComponent";
import Scroller from "../../services/ScrollerService";

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
            console.log(this.state);
        });
    }

    navigateToCompanySection() {
        this.scroller.scrollToResolver(document.getElementById('companyHomeSection'));
    }

    navigateToMovieSection() {
        this.scroller.scrollToResolver(document.getElementById('companyHomeSection'));
    }

    navigateToServicesSection() {
        this.scroller.scrollToResolver(document.getElementById('companyHomeSection'));
    }

    navigateToPositiveAmbientPoint() {
        this.scroller.scrollToResolver(document.getElementById('companyHomeSection'));
    }

    navigateToRecentBlog() {
        this.scroller.scrollToResolver(document.getElementById('companyHomeSection'));
    }

    render() {
        const { isLoading, content } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }


        return (
            <div>
                <SliderComponent slides={ content['slides'] } />
                <section id="companyHomeSection">
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                        <div className="panel">
                            <div className="panel-body">
                                <p className="text-center">
                                    <img id="widthCompanyTitle" src="./brand/lavasul_blue.png" alt=""/>
                                </p>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6 text-justify">
                                        {content['company']['description_home']}
                                        <hr />
                                        <button className="btn btn-block btn-info"> Saiba Mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="institutionalVideo">
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                        <div className="panel">
                            <div className="panel-body">

                            </div>
                        </div>
                    </div>
                </section>
                <section id="services">
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                        <div className="panel">
                            <div className="panel-body">

                            </div>
                        </div>
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
                <section id="recentBlog">
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                        <div className="panel">
                            <div className="panel-body">

                            </div>
                        </div>
                    </div>
                </section>
                <img onClick={this.navigateToMovieSection} src="./icons/circle-down.svg" className="arrowMovie" />
                <img onClick={this.navigateToCompanySection} src="./icons/circle-down.svg" className="arrowCompany" />
                <img onClick={this.navigateToServicesSection} src="./icons/circle-down.svg" className="arrowServices" />
                <img onClick={this.navigateToPositiveAmbientPoint} src="./icons/circle-down.svg" className="arrowPositive" />
            </div>
        )
    }

}

export default HomePage;