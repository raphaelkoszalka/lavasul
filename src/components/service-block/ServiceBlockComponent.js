import './ServiceBlockComponent.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import {AppConstants} from "../../AppConstants";

class ServiceBlockComponent extends Component {

    request = new HttpRequest();

    constructor(props) {
        super(props);
        this.props = props;
        this.state = { props };
    }

    componentWillMount() {
    }

    render() {
        const services = this.state['props']['services'];

        const blocks = services.map( (block) => {
            console.log(block);
            return (<h1>services</h1>);
        });

        return (<h1>services block</h1>);
    }

}

export default ServiceBlockComponent;