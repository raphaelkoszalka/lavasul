import './FooterComponent.css';
import React, { Component } from 'react';
import LoaderComponent from "../loader/LoaderComponent";

class FooterComponent extends Component {


  constructor() {
    super();
    this.state = {}; // FooterComponent.defaultState();
  }

  static defaultState() {
    return { isLoading: true }
  }

  componentWillMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (<LoaderComponent />);
    }
    return (<h1>content</h1>)
  }

}

export default FooterComponent;