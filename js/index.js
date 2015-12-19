$('.main.menu').visibility({
    type: 'fixed'
});

$('.main.menu  .ui.dropdown').dropdown({
    on: 'hover'
});

L.mapbox.accessToken = 'pk.eyJ1Ijoic3RodXB1a2FyaSIsImEiOiJTMHJvNmxJIn0.0zMDZmH4RHXzcwwYTBycxQ';

var map = L.mapbox.map('map', 'mapbox.light', {
        zoomControl: false
    })
    .setView([17.3840500, 78.4563600], 5);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
            78.4563600,
            17.3840500
        ]
    },
    properties: {
        'marker-size': 'small',
        'marker-color': '#8e44ad',
        'marker-symbol': 'star'
    }
}).addTo(map);
