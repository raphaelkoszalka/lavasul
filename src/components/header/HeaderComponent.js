import './HeaderComponent.css';
import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div id="navWrapper">
                <nav>
                    <div className="col-md-9">
                        <a href="/home">
                            {/*<div id="brand"></div>*/}
                            <img src="./brand/logo_giga.png" id="brand-image" alt=""/>
                        </a>
                        <ul id="headerDesktopMenu">
                            <a href="/contato"><li>Contato</li></a>
                            {/*<a href="/trabalhe-conosco"><li>Trabalhe Conosco</li></a>*/}
                            <a href="/servicos"><li>Serviços</li></a>
                            <a href="/parceiros"><li>Parceiros</li></a>
                            <a href="/blog"> <li>Blog</li></a>
                            <a href="/lavasul"><li>A Lava Sul</li></a>
                            <a href="/home"><li>Home</li></a>
                        </ul>
                    </div>
                    <div className="col-md-3 social-icons">
                        <img className="social-icon" src="./icons/facebook.svg" alt=""/>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderComponent;