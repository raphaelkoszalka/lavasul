import './ServiceBlockComponent.css';
import React, { Component } from 'react';

class ServiceBlockComponent extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = { props };
        let position = 0;
        this.state['props']['services'].forEach((service) => {
            service.position = position;
            position++;
        });
    }

    static createMarkup(service) {
        return(
            <div className="col-md-6">
                <div className="panel">
                    <div className="panel-heading">
                        {service['title']}
                    </div>
                    <div className="panel-body">
                        {service['description']}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const services = this.state['props']['services'];

        console.log(services);

        const servicesElements = services.map( (service) => {
            return ServiceBlockComponent.createMarkup(service);
        });

        return(<div>{ servicesElements }</div>);

    }
}

export default ServiceBlockComponent;