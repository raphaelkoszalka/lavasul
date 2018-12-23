import './EnvironmentalComponent.css';
import React, { Component } from 'react';

class EnvironmentalComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { environmental: props['environmental'] };
    }

    render() {

        const { environmental } = this.state;

        return (
            <section id="environmentalBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">
                                { environmental['title'] }
                            </h1>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 text-center">
                                    <span dangerouslySetInnerHTML={ { __html: environmental['intro'] } } />
                                    <a href="/262">
                                        <button className="btn btn-default">Saiba Mais</button>
                                    </a>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="environmentalBlockParallaxe" />
            </section>
        )
    }
}

export default EnvironmentalComponent;