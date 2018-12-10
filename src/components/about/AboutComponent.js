import './AboutComponent.css';
import React, { Component } from 'react';

class AboutComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { company: props['company'] };
    }

    render() {
        const { company } = this.state;
        return (
            <section id="aboutBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <h3>{ company['title'] }</h3>
                                    <hr/>
                                    <span dangerouslySetInnerHTML={{ __html: company['description_home'] }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src="./teste-lava-sul-double-shadow.png" id="aboutBlockImage" alt="Lava Sul"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutComponent;