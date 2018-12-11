import './MapComponent.css';
import React, { Component } from 'react';
import {AppConstants} from "../../AppConstants";

class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { cities: props['cities' ]}
    }

    componentDidMount() {
        this.renderMap();
    }

    renderMap() {
        let markers = [];

        const google = window.google;
        const MarkerClusterer = window.MarkerClusterer;

        const { cities } = this.state;
        const latLng = { lat: -26.952079, lng: -48.633443 };
        const map = new google.maps.Map(document.getElementById('map'), {
            center: latLng,
            scrollwheel: false,
            zoom: 8,
            styles: AppConstants.MAP_STYLE
        });
        cities.forEach((city) => {
            const position = {
                lat: parseFloat(city['map']['lat']),
                lng: parseFloat(city['map']['lng'])
            };
            const marker = new google.maps.Marker({ position: position, map: map });

            markers.push(marker);
        });

        new MarkerClusterer(map, markers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });
    }

    render() {
        return (
            <section id="mapBlock">
                <div id="map" />
            </section>
        )
    }

}

export default MapComponent;