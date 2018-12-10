import './CompanyPage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";
import {AppConstants} from "../../AppConstants";
import HttpRequest from "../../services/HttpService";

class CompanyPage extends Component {

    request = new HttpRequest();

    constructor() {
        super();
        this.state = { isLoading: true };
    }

    componentWillMount() {
        this.request.get(AppConstants.ENDPOINT_COMPANY).then( (res) => {
            this.setState({ isLoading: false, content: JSON.parse(res['text']) });
        });
    }

    render() {
        const { isLoading } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }

        return (
            <section id="companySection">
                <div id="companyCover">
                    <div id="companyCoverOverlay">
                        <img
                            id="companyCoverBrandImage"
                            src="./brand/lavasul_white.png"
                            alt="LavaSul Higienização Têxtil"
                        />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel">
                                <div className="panel-body">
                                    <h1 className="text-center">LavaSul</h1>
                                    <h2 id="subTitle" className="text-center">Higienização Têxtil</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }

}

export default CompanyPage;