function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.6972888, lng: 37.6396888},
        scrollwheel: false,
        zoom: 12,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: {lat: 55.7565107, lng: 37.6126253},
        map: map,
        icon: "/assets/img/map_marker.png",
        zoom: 10,
        title: 'Hello World!'
    });

    var styles = [
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
                    "color": "#61dac9"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];
    map.setOptions({styles: styles});
}
