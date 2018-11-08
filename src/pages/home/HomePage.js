import './HomePage.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import { AppConstants } from "../../AppConstants";
import LoaderComponent from "../../components/loader/LoaderComponent";
import SliderComponent from "../../components/slider/SliderComponent";

class HomePage extends Component {

    request = new HttpRequest();

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
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default HomePage;