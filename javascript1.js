let map;
let marker;

function initMap() {
    map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    marker = L.marker([51.505, -0.09]).addTo(map);
}

document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const lat = parseFloat(document.getElementById('lat').value);
    const lng = parseFloat(document.getElementById('lng').value);

    if (!isNaN(lat) && !isNaN(lng)) {
        const newPosition = [lat, lng];
        map.setView(newPosition);
        marker.setLatLng(newPosition);
    }
});

// Initialize map after the page is fully loaded
window.onload = initMap;
