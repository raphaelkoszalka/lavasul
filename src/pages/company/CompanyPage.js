import './CompanyPage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";
import {AppConstants} from "../../AppConstants";
import HttpRequest from "../../services/HttpService";

class CompanyPage extends Component {

    request = new HttpRequest();

    constructor() {
        super();
        this.state = {};
    }

    static defaultState() {
        return { isLoading: true }
    }

    componentWillMount() {
        this.request.get(AppConstants.ENDPOINT_COMPANY).then( (res) => {
            this.setState({ isLoading: false, content: JSON.parse(res['text']) });
            console.log(this.state);
        });
    }

    render() {
        const { isLoading, content } = this.state;

        console.log(typeof content);

        if (isLoading) {
            return (<LoaderComponent />);
        }
        return (
                <div className="col-xs-10 col-xs-offset-1">
                    <div className="panel">
                        <div className="panel-body">
                            <h1 className="sectionTitle text-center">A Lava Sul</h1>
                        </div>
                    </div>
                </div>
        )
    }

}

export default CompanyPage;