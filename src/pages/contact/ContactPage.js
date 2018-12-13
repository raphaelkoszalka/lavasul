import './ContactPage.css';
import React, { Component } from 'react';
import MapComponent from "../../components/map/MapComponent";

class CompanyPage extends Component {

    render() {
        const map = [{
            map: {
                lat: -27.192245,
                lng: -48.633878
            }
        }];

        return (
            <section id="contactSection">
                <div id="contactCover">
                    <div id="contactCoverOverlay">
                        <img
                            id="partnerCoverBrandImage"
                            src="./brand/lavasul_white.png"
                            alt="LavaSul Higienização Têxtil"
                        />
                    </div>
                </div>
                <div className="clearfix" />
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel">
                                <div className="panel-body">
                                    <h1 className="text-center">
                                        Entre em contato
                                    </h1>
                                    <h4 id="subTitle" className="text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </h4>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <MapComponent
                                                zoom={16}
                                                cities={map}
                                                lat={-27.191998}
                                                lng={-48.634114}
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <form action="">
                                                <div className="col-md-8">
                                                    <input name="nome" type="text" className="form-control" placeholder="Nome Completo" />
                                                </div>
                                                <div className="col-md-4">
                                                    <input name="email" type="email" className="form-control" placeholder="E-mail" />
                                                </div>
                                                <div className="clearfix" />
                                                <hr/>
                                                <div className="col-md-12">
                                                    <input name="endereco" type="text" className="form-control" placeholder="Endereço" />
                                                </div>
                                                <div className="clearfix" />
                                                <hr/>
                                                <div className="col-md-6">
                                                    <input name="cidade" type="cidade" className="form-control" placeholder="Cidade" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input name="telefone" type="phone" className="form-control" placeholder="Telefone" />
                                                </div>
                                                <div className="clearfix" />
                                                <hr/>
                                                <div className="col-md-12">
                                                    <textarea placeholder="Mensagem" className="form-control" name="" id="" cols="30" rows="5" />
                                                </div>
                                                <div className="clearfix" />
                                                <hr/>
                                                <div className="col-md-6 col-md-offset-3">
                                                    <button type="submit" className="btn btn-block btn-info">Enviar E-mail</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="clearfix" />
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                    <hr/>
                </div>
            </section>
        )
    }
}

export default CompanyPage;