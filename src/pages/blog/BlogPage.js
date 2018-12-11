import './BlogPage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";
import {AppConstants} from "../../AppConstants";
import HttpRequest from "../../services/HttpService";
import "react-image-gallery/styles/css/image-gallery.css";
import BlogComponent from "../../components/blog/BlogComponent";

class CompanyPage extends Component {

    request = new HttpRequest();

    constructor() {
        super();
        this.state = { isLoading: true };
    }

    componentWillMount() {
        this.request.get(AppConstants.ENDPOINT_BLOG).then( (res) => {
            this.setState({ isLoading: false, content: JSON.parse(res['text']) });
        });
    }

    render() {
        const { isLoading, content } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }


        return (
            <section id="blogSection">
                <div id="blogCover">
                    <div id="blogCoverOverlay">
                        <img
                            id="companyCoverBrandImage"
                            src="./brand/lavasul_white.png"
                            alt="LavaSul Higienização Têxtil"
                        />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <BlogComponent blog={ content } />
                        <div className="clearfix" />
                        <div className="col-md-12">
                            <hr/>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default CompanyPage;