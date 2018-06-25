import './HeaderComponent.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import {AppConstants} from "../../AppConstants";
import LoaderComponent from "../loader/LoaderComponent";

class HeaderComponent extends Component {

  request = new HttpRequest();

  constructor() {
    super();
    this.state = HeaderComponent.defaultState();
  }

  static defaultState() {
    return { isLoading: true }
  }

  componentWillMount() {
    this.request.get(AppConstants.ENDPOINT_GALLERY).then( (res) => {
      this.setState({ isLoading: false });
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

export default HeaderComponent;