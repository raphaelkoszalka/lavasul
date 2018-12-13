import './ContactPage.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";

class CompanyPage extends Component {

    request = new HttpRequest();

    constructor() {
        super();
    }

    render() {

        return (
            <section id="contactSection">
                <div id="contactCover">
                    <div id="contactCoverOverlay">
                        <img
                            id="partnerCoverBrandImage"
                            src="./brand/lavasul_white.png"
                            alt="LavaSul Higienização Têxtil"
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default CompanyPage;