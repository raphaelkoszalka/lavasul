import './ServicesPage.css';
import React, { Component } from 'react';
import { AppConstants } from "../../AppConstants";
import LoaderComponent from "../../components/loader/LoaderComponent";
import HttpRequest from "../../services/HttpService";

class ServicesPage extends Component {

    request = new HttpRequest();

    constructor() {
        super();
        this.state = { isLoading: true };
    }

    componentWillMount() {
        this.request.get(AppConstants.ENDPOINT_SERVICE).then( (res) => {
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

export default ServicesPage;