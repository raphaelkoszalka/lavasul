import './WorkWithUsPage.css';
import React, { Component } from 'react';
import LoaderComponent from "../../components/loader/LoaderComponent";

class WorkWithUsPage extends Component {


  constructor() {
    super();
    this.state = {}; // WorkWithUsPage.defaultState();
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

export default WorkWithUsPage;