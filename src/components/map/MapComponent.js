import './MapComponent.css';
import React, { Component } from 'react';

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
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#46bcec"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ]
            });


        // pass to ECMASCRIPT 6

        cities.forEach((city) => {
            const position = {
                lat: parseFloat(city['map']['lat']),
                lng: parseFloat(city['map']['lng'])
            };
            const marker = new google.maps.Marker({ position: position, map: map });

            markers.push(marker);
        });

        const markerCluster = new MarkerClusterer(map, markers, {
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