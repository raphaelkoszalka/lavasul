import './InstitutionalMovieComponent.css';
import React, { Component } from 'react';

class InstitutionalMovieComponent extends Component {


    render() {
        return (
            <div className="video-background" id="mainSlider">
                <div className="video-foreground" id="aspectRatio">
                    <iframe id="videoFrame"
                            src="https://www.youtube.com/embed/QmYGPXrSDlY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=QmYGPXrSDlY&mute=1"
                            frameBorder="0" allowFullScreen />

                </div>
            </div>
        )
    }

}

export default InstitutionalMovieComponent;
