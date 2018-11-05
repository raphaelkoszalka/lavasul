import './BlogPage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";
import HttpRequest from "../../services/HttpService";
import {AppConstants} from "../../AppConstants";

class BlogPage extends Component {

    request = new HttpRequest();

    constructor() {
        super();
        this.state = {};
    }

    static defaultState() {
        return { isLoading: true }
    }

    componentWillMount() {
        this.request.get(AppConstants.ENDPOINT_BLOG).then( (res) => {
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

export default BlogPage;