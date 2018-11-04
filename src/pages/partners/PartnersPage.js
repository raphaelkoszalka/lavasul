import './PartnersPage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";
import {AppConstants} from "../../AppConstants";
import HttpRequest from "../../services/HttpService";

class PartnersPage extends Component {

    request = new HttpRequest();

    constructor() {
        super();
        this.state = {}; // CompanyPage.defaultState();
    }

    static defaultState() {
        return { isLoading: true }
    }

    componentWillMount() {
        this.request.get(AppConstants.ENDPOINT_PARTNER).then( (res) => {
            this.setState({ isLoading: false, content: JSON.parse(res['text']) });
            console.log(this.state);
        });
    }

    render() {
        const { isLoading } = this.state;

        if (isLoading) {
            return (<LoaderComponent />);
        }
        return (<h1>content</h1>)
    }

}

export default PartnersPage;