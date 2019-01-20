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
            <BrowserRouter>
                <section>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact={true} component={HomePage} />
                        <Route path="/home" exact={true} component={HomePage} />
                        <Route path="/lavasul" exact={true} component={CompanyPage} />
                        <Route path="/blog" exact={true} component={BlogPage} />
                        <Route path="/higienizacao-textil" exact={true} component={ServicesPage} />
                        <Route path="/lavacao-de-enxoval" exact={true} component={ServicesPage} />
                        <Route path="/servicos" exact={true} component={ServicesPage} />
                        <Route path="/parceiros" exact={true} component={PartnersPage} />
                        <Route path="/trabalhe-conosco" exact={true} component={WorkWithUsPage} />
                        <Route path="/contato" exact={true} component={ContactPage} />
                        <Route path="/:id" component={BlogSinglePage} />
                    </Switch>
                    <FooterComponent />
                    <BackToTopComponent />
                </section>
            </BrowserRouter>
        );
    }
}

export default App;
