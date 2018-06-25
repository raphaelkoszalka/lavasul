import 'GalleryComponent.css';
import React, { Component } from 'react';
import HttpRequest from "../../services/HttpService";
import {AppConstants} from "../../AppConstants";

class GalleryComponent extends Component {

  var request = new HttpRequest();

  constructor() {
    super();
  }

  componentWillMount() {
    request.get(AppConstants.ENDPOINT_GALLERY).then( (res) => console.log(res) );
  }

  componentDidMount() {

  }

  render() {
    return (
        <div></div>
    )
  }

}

export default GalleryComponent;