import './EnvironmentalComponent.css';
import React, { Component } from 'react';

class EnvironmentalComponent extends Component {

    render() {
        return (
            <section id="environmentalBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">
                                Compromisso Sócio Ambiental
                            </h1>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 text-center">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor pulvinar purus pellentesque placerat. Ut convallis nisi vel nisi tincidunt, vestibulum ultricies magna aliquam.
                                        Integer ut pharetra metus. Praesent fermentum fringilla nibh eget ultricies. Duis est purus, porta eu tempus ac, pulvinar sit amet augue. Integer tempor dolor at felis dapibus, vitae laoreet sem semper. Nunc eu lobortis justo. Maecenas dapibus convallis ullamcorper. Curabitur vehicula mauris sit amet facilisis scelerisque.
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor pulvinar purus pellentesque placerat. Ut convallis nisi vel nisi tincidunt, vestibulum ultricies magna aliquam.</p>
                                    <button className="btn btn-default">Saiba Mais</button>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="environmentalBlockParallaxe" />
            </section>
        )
    }
}

export default EnvironmentalComponent;