// Google Maps API example
let map;
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: 'Current Location'
    });
}

document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const lat = parseFloat(document.getElementById('lat').value);
    const lng = parseFloat(document.getElementById('lng').value);

    if (!isNaN(lat) && !isNaN(lng)) {
        const newPosition = { lat: lat, lng: lng };
        map.setCenter(newPosition);
        marker.setPosition(newPosition);
    }
});

// Initialize map after the page is fully loaded
window.onload = initMap;
