import './MapComponent.css';
import React, { Component } from 'react';
import {AppConstants} from "../../AppConstants";

class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: props['cities'],
            zoom: props['zoom'],
            lat: props['lat'],
            lng: props['lng']
        }
    }

    componentDidMount() {
        this.renderMap();
    }

    renderMap() {
        let markers = [];

        const google = window.google;
        const MarkerClusterer = window.MarkerClusterer;

        const { cities, zoom, lat, lng } = this.state;
        const latLng = { lat: lat, lng: lng };
        const map = new google.maps.Map(document.getElementById('map'), {
            center: latLng,
            scrollwheel: false,
            zoom: zoom,
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