import './App.css';
import React, { Component } from 'react';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import HomePage from "./pages/home/HomePage";
import CompanyPage from "./pages/company/CompanyPage";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import WorkWithUsPage from "./pages/work-with-us/WorkWithUsPage";
import ContactPage from "./pages/contact/ContactPage";
import BlogPage from "./pages/blog/BlogPage";
import ServicesPage from "./pages/services/ServicesPage";
import PartnersPage from "./pages/partners/PartnersPage";
import BackToTopComponent from "./components/back-to-top/BackToTopComponent";
import BlogSinglePage from "./pages/blog-single/BlogSinglePage";

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
                        <Route path="/blog" exact={true} component={BlogPage} />
                        <Route path="/:id" component={BlogSinglePage} />
                        <Route path="/servicos" exact={true} component={ServicesPage} />
                        <Route path="/parceiros" exact={true} component={PartnersPage} />
                        <Route path="/trabalhe-conosco" exact={true} component={WorkWithUsPage} />
                        <Route path="/contato" exact={true} component={ContactPage} />
                    </Switch>
                </BrowserRouter>
                <FooterComponent />
                <BackToTopComponent />
            </section>
        );
    }
}

export default App;
