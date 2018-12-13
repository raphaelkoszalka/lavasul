import './ServicesPage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";
import {AppConstants} from "../../AppConstants";
import HttpRequest from "../../services/HttpService";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class ServicesPage extends Component {

    constructor() {
        super();
        this.state = { isLoading: true };
    }

    componentWillMount() {
        HttpRequest.get(AppConstants.ENDPOINT_SERVICE).then( (res) => {
            this.setState({ isLoading: false, content: JSON.parse(res['text']) });
        });
    }

    render() {
        const { isLoading, content } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }

        const gallery_one = [];
        const gallery_two = [];

        content[0]['service_gallery'].forEach((img) => {
            gallery_one.push({
                original: img['sizes']['large'],
                thumbnail: img['sizes']['thumbnail']
            });
        });

        content[1]['service_gallery'].forEach((img) => {
            gallery_two.push({
                original: img['sizes']['large'],
                thumbnail: img['sizes']['thumbnail']
            });
        });

        return (
            <section id="servicesSection">
                <div id="servicesCover">
                    <div id="servicesCoverOverlay">
                        <img
                            id="servicesCoverBrandImage"
                            src="./brand/lavasul_white.png"
                            alt="LavaSul Higienização Têxtil"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <div className="panel servicesPanel">
                                <div className="panel-body">
                                    <h1 className="text-center">
                                        {content[0]['title']}
                                    </h1>
                                    <hr/>
                                    <span dangerouslySetInnerHTML={{__html: content[0]['description']}} />
                                    <hr/>
                                    <div className="col-md-8 col-md-offset-2">
                                        <ImageGallery items={gallery_one} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="panel servicesPanel">
                                <div className="panel-body">
                                    <h1 className="text-center">
                                        {content[1]['title']}
                                    </h1>
                                    <hr/>
                                    <span dangerouslySetInnerHTML={{__html: content[1]['description']}} />
                                    <hr/>
                                    <div className="col-md-8 col-md-offset-2">
                                        <ImageGallery items={gallery_two} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <hr/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ServicesPage;