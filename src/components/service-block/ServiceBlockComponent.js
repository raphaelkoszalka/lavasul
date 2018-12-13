import './ServiceBlockComponent.css';
import React, { Component } from 'react';

class ServiceBlockComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { services: props['services'] }
    }

    render() {
        const { services } = this.state;

        return(
            <section id="servicesBlock">
                <div className="row">
                    <a href="/servicos">
                        <div className="col-md-6 service-block">
                            <h3 className="text-center">{services[0]['title']}</h3>
                        </div>
                        <div className="col-md-6 service-block">
                            <h3 className="text-center">{services[1]['title']}</h3>
                        </div>
                    </a>
                </div>
            </section>
        );
    }
}

export default ServiceBlockComponent;