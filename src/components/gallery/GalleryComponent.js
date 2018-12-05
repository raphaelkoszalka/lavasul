import './GalleryComponent.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import LoaderComponent from "../loader/LoaderComponent";

class GalleryComponent extends Component {

  request = new HttpRequest();

  constructor() {
    super();
    this.state = {}; //GalleryComponent.defaultState();
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

export default GalleryComponent;