import './App.css';
import React, { Component } from 'react';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import HomePage from "./pages/home/HomePage";
import CompanyPage from "./pages/company/CompanyPage";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import ClientsPage from "./pages/clients/ClientsPage";
import GalleryPage from "./pages/gallery/GalleryPage";
import ContactPage from "./pages/contact/ContactPage";

class App extends Component {
  render() {
    return (
        <section>
          <HeaderComponent />
            <BrowserRouter>
              <Switch>
                {/* @todo: loop through RouteArray from Routes */}
                <Route path="/" exact={true} component={HomePage} />
                <Route path="/home" exact={true} component={HomePage} />
                <Route path="/lavasul" exact={true} component={CompanyPage} />
                <Route path="/clientes" exact={true} component={ClientsPage} />
                <Route path="/galeria" exact={true} component={GalleryPage} />
                <Route path="/contato" exact={true} component={ContactPage} />
              </Switch>
            </BrowserRouter>
          <FooterComponent />
        </section>
  );
  }
  }

  export default App;
