import './ServiceBlockComponent.css.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import {AppConstants} from "../../AppConstants";
import LoaderComponent from "../loader/LoaderComponent";

class ServiceBlockComponent extends Component {

    request = new HttpRequest();

    constructor() {
        super();
        this.state = {} // ContactFormComponent.defaultState();
    }

    static defaultState() {
        return { isLoading: true }
    }

    componentWillMount() {
    }

    render() {
        const { isLoading } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }
        return (<h1>content</h1>)
    }

}

export default ServiceBlockComponent;