import './WorkWithUsPage.css';
import React, { Component } from 'react';

class WorkWithUsPage extends Component {

    constructor() {
        super();
        this.state = { isLoading: true };
    }

    postWorkWithUsForm() {

    }

    render() {
        return (
            <section id="companySection">
                <div id="companyCover">
                    <div id="companyCoverOverlay">
                        <img
                            id="companyCoverBrandImage"
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
                                        Trabalhe Conosco
                                    </h1>
                                    <h4 id="subTitle" className="text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </h4>
                                    <hr/>
                                    <div className="row">
                                        <form action="">
                                            <div className="col-md-8">
                                                <input name="nome" type="text" className="form-control" placeholder="Nome Completo" />
                                            </div>
                                            <div className="visible-sm visible-xs clearfix" />
                                            <hr className="visible-sm visible-xs" />
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
                                            <div className="visible-sm visible-xs clearfix" />
                                            <hr className="visible-sm visible-xs" />
                                            <div className="col-md-6">
                                                <input name="telefone" type="phone" className="form-control" placeholder="Telefone" />
                                            </div>
                                            <div className="clearfix" />
                                            <hr/>
                                            <div className="col-md-4">
                                                <input name="nascimento" type="date" className="form-control" placeholder="Data de Nascimento"/>
                                            </div>
                                            <div className="visible-sm visible-xs clearfix" />
                                            <hr className="visible-sm visible-xs" />
                                            <div className="col-md-4">
                                                <input name="horario" type="text" className="form-control" placeholder="Disponibilidade de horário"/>
                                            </div>
                                            <div className="visible-sm visible-xs clearfix" />
                                            <hr className="visible-sm visible-xs" />
                                            <div className="col-md-4">
                                                <input name="vaga" type="text" className="form-control" placeholder="Vaga pretendida"/>
                                            </div>
                                            <div className="clearfix" />
                                            <hr/>
                                            <div className="col-md-6 col-md-offset-3">
                                                <button type="submit" className="btn btn-block btn-info">Enviar E-mail</button>
                                            </div>
                                        </form>
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

export default WorkWithUsPage;