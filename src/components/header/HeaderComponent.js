import './HeaderComponent.css';
import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <nav>
                <div className="col-md-9">
                    <img src="./brand/logo_giga.png" id="brand-image" alt=""/>
                    <ul id="headerDesktopMenu">
                        <li>Contato</li>
                        <li>Trabalhe Conosco</li>
                        <li>Serviços</li>
                        <li>Parceiros</li>
                        <li>Blog</li>
                        <li>A Lava Sul</li>
                        <li>Home</li>
                    </ul>
                </div>
                <div className="col-md-3 social-icons">
                    <img className="social-icon" src="./icons/facebook.svg" alt=""/>
                </div>
            </nav>
        )
    }
}

export default HeaderComponent;