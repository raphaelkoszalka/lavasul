import './InstitutionalMovieComponent.css';
import React, { Component } from 'react';

class InstitutionalMovieComponent extends Component {


    render() {
        return (
            <div className="video-container" id="mainSlider">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0fWPhRDnb6U"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        )
    }

}

export default InstitutionalMovieComponent;
