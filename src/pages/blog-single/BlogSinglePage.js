import './BlogSinglePage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";
import HttpRequest from "../../services/HttpService";
import { AppConstants } from "../../AppConstants";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class BlogSinglePage extends Component {

    request = new HttpRequest();

    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentWillMount() {
        this.request.get(AppConstants.ENDPOINT_BLOG_SINGLE + this.props.match.params.id).then( (res) => {
            this.setState({ isLoading: false, content: JSON.parse(res['text']) });
        });
    }

    render() {
        const { isLoading, content } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }

        const gallery = [];

        content['gallery'].forEach((img) => {
            gallery.push({
                original: img['sizes']['large'],
                thumbnail: img['sizes']['thumbnail']
            });
        });

        const coverStyle = {
            backgroundImage: 'url(' + content['cover'] + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: '100%',
            height: '500px',
            position: 'relative',
            marginBottom: '20px'
        };

        return (
            <section id="singleBlogSection">
                <div id="singleBlogCover" style={coverStyle}>
                    <div id="singleBlogCoverOverlay">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <h1 className="callToActionFont">
                                {content['title']}
                            </h1>
                            <div id="callToActionLineDivider" />
                            <h6 className="callToActionFont">
                                {content['date']}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel">
                                <div className="panel-body">
                                    <hr/>
                                    <h2 className="text-center">{content['subtitle']}</h2>
                                    <hr/>
                                    <div className="col-md-12">
                                        <article>
                                            <div dangerouslySetInnerHTML={{ __html: content['description']}} />
                                        </article>
                                    </div>
                                    <div className="clearfix" />
                                    <hr/>
                                    <div className="col-md-6 col-md-offset-3">
                                        <ImageGallery items={gallery} />
                                    </div>
                                    <div className="clearfix" />
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

export default BlogSinglePage;