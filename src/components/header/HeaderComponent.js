import './HeaderComponent.css';
import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: './brand/lavasul_white.png',
            topMenuId: 'headerDesktopMenu',
            navClass: 'topNav',
            menuIcon: './menu_white.svg'
        };
        this.listenToScroll = this.listenToScroll.bind(this);
    }

    static openMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenuOverlay');
        mobileMenu.classList.toggle('mobileMenuVisible');
    }

    static addMenuClass() {
        const elems = document.querySelectorAll(".menuLi");
        [].forEach.call(elems, (el) => el.classList.remove("activeMenu") );

        let actual = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);

        if (actual === '') {
            actual = 'home';
        }

        const elm = document.getElementById(actual);

        if (elm) {
            elm.classList.add("activeMenu");
            return;
        }

        document.getElementById('blog').classList.add("activeMenu");
    }

    componentDidMount() {
        this.listenToScroll();
        HeaderComponent.addMenuClass();
    }

    listenToScroll() {
        const top = document.getElementById('topOfTheWorld');
        window.addEventListener('scroll', (e) => {
            if (top.scrollTop > 200) {
                this.setState({
                    brand: './brand/lavasul_blue.png',
                    topMenuId: 'afterScrollDesktopMenu',
                    navClass: 'topNavAfterScroll',
                    menuIcon: './menu_grey.svg'
                });
                return;
            }
            this.setState({
                brand: './brand/lavasul_white.png',
                topMenuId: 'headerDesktopMenu',
                navClass: 'topNav',
                menuIcon: './menu_white.svg'
            });
        });
    }


    render() {

        const { topMenuId, brand, navClass, menuIcon } = this.state;

        return (
            <div id="navWrapper">
                <nav className={navClass} id="navMenu">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <a href="/home" id="brand-anchor">
                            <img src={brand} id="brand-image" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9 social-icons">

                        <ul id={topMenuId} className="desktopMenu hidden-xs hidden-sm hidden-md">
                            <a href="/contato"><li className="menuLi" id="contato">Contato</li></a>
                            <a href="/trabalhe-conosco"><li className="menuLi" id="trabalhe-conosco">Trabalhe Conosco</li></a>
                            <a href="/servicos"><li className="menuLi" id="servicos">Serviços</li></a>
                            <a href="/parceiros"><li className="menuLi" id="parceiros">Parceiros</li></a>
                            <a href="/blog"> <li className="menuLi" id="blog">Blog</li></a>
                            <a href="/lavasul"><li className="menuLi" id="lavasul">A Lava Sul</li></a>
                            <a href="/home"><li className="menuLi" id="home">Home</li></a>
                        </ul>
                        <img
                            onClick={HeaderComponent.openMobileMenu}
                            className="social-icon visible-xs visible-sm visible-md"
                            src={menuIcon}
                            alt="Abrir Menu"
                        />
                    </div>
                </nav>
                <div className="mobileMenuOverlay" id="mobileMenuOverlay">
                    <ul id="mobileMenu">
                        <a href="/home"><li>Home</li></a>
                        <a href="/lavasul"><li>A Lava Sul</li></a>
                        <a href="/blog"> <li>Blog</li></a>
                        <a href="/parceiros"><li>Parceiros</li></a>
                        <a href="/servicos"><li>Serviços</li></a>
                        <a href="/trabalhe-conosco"><li>Trabalhe Conosco</li></a>
                        <a href="/contato"><li>Contato</li></a>
                    </ul>
                </div>
            </div>
        )
    }

}

export default HeaderComponent;