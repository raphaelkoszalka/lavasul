import './PartnerComponent';
import './PartnerComponent.css';
import React, { Component } from 'react';

class PartnerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { partners: props['partners'] };
    }

    render() {
        const { partners } = this.state;

        const partnersPanel = partners.map(function(partner) {
            return (
                <div className="col-md-4" key={partner['id']}>
                    <div className="panel partnerPanel">
                        <div className="panel-body">
                            <h4 className="text-center">{ partner['title'] }</h4>
                            <hr/>
                            <div className="partnerBrandWrapper">
                                <img className="img-partner" src={partner['partner_image']} alt="partner['title']"/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="row">
                {partnersPanel}
            </div>
        )
    }
}

export default PartnerComponent;