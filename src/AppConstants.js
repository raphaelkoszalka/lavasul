export class AppConstants {

  static BASE_URL = 'http://api-lavasul.cochise.com.br/wp-json';
  static API_VERSION = '/cochise/v1';

  static ENDPOINT_HOME = AppConstants.BASE_URL + AppConstants.API_VERSION + '/home/';
  static ENDPOINT_BLOG = AppConstants.BASE_URL + AppConstants.API_VERSION + '/blog/';
  static ENDPOINT_BLOG_SINGLE = AppConstants.BASE_URL + AppConstants.API_VERSION + '/blog/single/';
  static ENDPOINT_CITY = AppConstants.BASE_URL + AppConstants.API_VERSION + '/city/';
  static ENDPOINT_CLIENT = AppConstants.BASE_URL + AppConstants.API_VERSION + '/client/';
  static ENDPOINT_COMPANY = AppConstants.BASE_URL + AppConstants.API_VERSION + '/company/';
  static ENDPOINT_EMPLOYER = AppConstants.BASE_URL + AppConstants.API_VERSION + '/employer/';
  static ENDPOINT_GALLERY = AppConstants.BASE_URL + AppConstants.API_VERSION + '/gallery/';
  static ENDPOINT_PARTNER = AppConstants.BASE_URL + AppConstants.API_VERSION + '/partner/';
  static ENDPOINT_SERVICE = AppConstants.BASE_URL + AppConstants.API_VERSION + '/service/';
  static ENDPOINT_SLIDE = AppConstants.BASE_URL + AppConstants.API_VERSION + '/slide/';
  static ENDPOINT_TESTIMONIAL = AppConstants.BASE_URL + AppConstants.API_VERSION + '/testimonial/';

  static MAP_STYLE = [
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
  ];
}