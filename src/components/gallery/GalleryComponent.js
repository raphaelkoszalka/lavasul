import './GalleryComponent.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import {AppConstants} from "../../AppConstants";

class GalleryComponent extends Component {

  request = new HttpRequest();

  constructor() {
    super();
    this.state = GalleryComponent.defaultState();
  }

  static defaultState() {
    return { isLoading: true, gallery: [] }
  }

  componentWillMount() {
    this.request.get(AppConstants.ENDPOINT_GALLERY).then( (res) => {
      this.setState({ isLoading: false, gallery: JSON.parse(res.text) });
    });
  }

  render() {
    const { isLoading, gallery } = this.state;

    if (isLoading) {
      return (<h1>loading</h1>);
    }
    return (<h1>loaded</h1>)
  }

}

export default GalleryComponent;