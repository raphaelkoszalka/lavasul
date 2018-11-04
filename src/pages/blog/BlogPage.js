import './BlogPage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";

class BlogPage extends Component {


    constructor() {
        super();
        this.state = {}; // CompanyPage.defaultState();
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

export default BlogPage;