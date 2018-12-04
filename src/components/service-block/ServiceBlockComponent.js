import './ServiceBlockComponent.css';
import React, { Component } from 'react';

class ServiceBlockComponent extends Component {

    render() {
        return(
            <div className="row">
                <div className="col-md-6 service-block">
                    <h3 className="text-center">Locação de Enxoval</h3>
                </div>
                <div className="col-md-6 service-block">
                    <h3 className="text-center">Higiênização Têxtil</h3>
                </div>
            </div>
        );
    }

}

export default ServiceBlockComponent;