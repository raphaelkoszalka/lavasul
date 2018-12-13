import './FooterComponent.css';
import React, { Component } from 'react';

class FooterComponent extends Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                <img src="./map.svg" alt="Localização"/>
                            </p>
                            <p>
                                Rua Saturnino Antônio Gaspar 883 <br/>
                                Sertão da Santa Luzia – Porto Belo SC | CEP 88.210-000
                            </p>
                            <p>
                                <img src="./phone.svg" alt="Telefone"/>
                            </p>
                            <p>
                                +55 47 4054 9008 / +55 48 4052 9443 / +55 47 3369 1212
                            </p>
                            <p>
                                <img src="./mail.svg" alt="E-mail"/>
                            </p>
                            <p>
                                lavasul@lavasul.com.br
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <a href="https://www.facebook.com/lavasul/" rel="noopener noreferrer" target="_blank">
                                    <div className="col-xs-4 text-center">
                                        <img className="footer-social-icon" src="./facebook.svg" alt=""/>
                                    </div>
                                </a>
                                <a href="https://www.youtube.com/channel/UCn00wpNfsWxcwCKr6rD3GWQ" rel="noopener noreferrer" target="_blank">
                                    <div className="col-xs-4 text-center">
                                        <img className="footer-social-icon" src="./youtube.svg" alt=""/>
                                    </div>
                                </a>
                                <a href="https://www.google.com/maps/place/Lava+Sul+Higieniza%C3%A7%C3%A3o+T%C3%AAxtil/@-27.1922789,-48.6361259,17z/data=!3m1!4b1!4m5!3m4!1s0x94d8ae9eccb24f21:0x2bf9871e19a10a2!8m2!3d-27.1922837!4d-48.6339319" rel="noopener noreferrer" target="_blank">
                                    <div className="col-xs-4 text-center">
                                        <img className="footer-social-icon" src="./google-maps.svg" alt=""/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
            </footer>
        )
    }

}

export default FooterComponent;