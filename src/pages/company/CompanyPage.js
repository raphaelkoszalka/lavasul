import './CompanyPage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";
import {AppConstants} from "../../AppConstants";
import HttpRequest from "../../services/HttpService";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import MapComponent from "../../components/map/MapComponent";

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
        const { isLoading, content } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }

        const gallery = [];

        content['gallery'][0]['gallery'].forEach((img) => {
            gallery.push({
                original: img['sizes']['large'],
                thumbnail: img['sizes']['thumbnail']
            });
        });

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
                                    <h1 className="text-center">
                                        {content['title']}
                                    </h1>
                                    <h2 id="subTitle" className="text-center">
                                        {content['subtitle']}
                                    </h2>
                                    <hr/>
                                    <div dangerouslySetInnerHTML={{__html: content['description_home']}} />
                                    <h1 className="text-center">Nossa Empresa</h1>
                                    <hr/>
                                    <div className="col-md-8 col-md-offset-2">
                                        <ImageGallery items={gallery} />
                                        <hr/>
                                    </div>
                                    <div className="clearfix" />
                                    <h1 className="text-center">Cidades Atendidas</h1>
                                    <hr/>
                                    <MapComponent
                                        zoom={8}
                                        cities={content['cities']}
                                        lat={-26.952079}
                                        lng={-48.633443}
                                    />
                                    <hr/>
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