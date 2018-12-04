import './HeaderComponent.css';
import React, { Component } from 'react';

class HeaderComponent extends Component {

    static openMobileMenu() {
        let mobileMenu = document.getElementById('mobileMenuOverlay');
        mobileMenu.classList.toggle('mobileMenuVisible');
    }

    render() {
        return (
            <div id="navWrapper">
                <nav>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <a href="/home" id="brand-anchor">
                            <img src="./brand/lavasul_white.png" id="brand-image" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 social-icons">

                        <ul id="headerDesktopMenu" className="hidden-xs hidden-sm hidden-md">
                            <a href="/contato"><li id="contactButton">Contato</li></a>
                            <a href="/trabalhe-conosco"><li>Trabalhe Conosco</li></a>
                            <a href="/servicos"><li>Serviços</li></a>
                            <a href="/parceiros"><li>Parceiros</li></a>
                            <a href="/blog"> <li>Blog</li></a>
                            <a href="/lavasul"><li>A Lava Sul</li></a>
                            <a href="/home"><li>Home</li></a>
                        </ul>
                        <img
                            onClick={HeaderComponent.openMobileMenu}
                            id="mobileMenuIcon"
                            className="social-icon visible-xs visible-sm visible-md"
                            src="./icons/menu.svg"
                            alt=""
                        />
                    </div>
                </nav>
                <div className="mobileMenuOverlay" id="mobileMenuOverlay">
                    <ul id="mobileMenu">
                        <a href="/contato"><li>Contato</li></a>
                        <a href="/trabalhe-conosco"><li>Trabalhe Conosco</li></a>
                        <a href="/servicos"><li>Serviços</li></a>
                        <a href="/parceiros"><li>Parceiros</li></a>
                        <a href="/blog"> <li>Blog</li></a>
                        <a href="/lavasul"><li>A Lava Sul</li></a>
                        <a href="/home"><li>Home</li></a>
                    </ul>
                </div>
            </div>
        )
    }

}

export default HeaderComponent;