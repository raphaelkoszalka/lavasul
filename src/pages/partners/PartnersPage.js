import './PartnersPage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";
import {AppConstants} from "../../AppConstants";
import HttpRequest from "../../services/HttpService";
import PartnerComponent from "../../components/partner/PartnerComponent";

class CompanyPage extends Component {

    constructor() {
        super();
        this.state = { isLoading: true };
    }

    componentWillMount() {
        HttpRequest.get(AppConstants.ENDPOINT_PARTNER).then( (res) => {
            this.setState({ isLoading: false, content: JSON.parse(res['text']) });
        });
    }

    render() {
        const { isLoading, content } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }

        return (
            <section id="partnerSection">
                <div id="partnerCover">
                    <div id="partnerCoverOverlay">
                        <img
                            id="partnerCoverBrandImage"
                            src="./brand/lavasul_white.png"
                            alt="LavaSul Higienização Têxtil"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">Nossos Parceiros</h1>
                            <hr/>
                        </div>
                    </div>
                    <PartnerComponent partners={ content } />
                    <div className="clearfix" />
                    <hr/>
                </div>
            </section>
        )
    }
}

export default CompanyPage;