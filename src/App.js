import './App.css';
import React, { Component } from 'react';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import HomePage from "./pages/home/HomePage";
import CompanyPage from "./pages/company/CompanyPage";
import HashRouter from "react-router-dom/es/HashRouter";

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            {/* @todo: loop through RouteArray from Routes */}
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/home" exact={true} component={HomePage} />
            <Route path="/company" exact={true} component={CompanyPage} />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
