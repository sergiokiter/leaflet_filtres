var map;
var markersData = [];
var markersLayers = [];
var nombreHost = "http://localhost/";
var carpetaProyecto = "mapa";
$( document ).ready(function() {
  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setupMap);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function setupMap(position) {
  console.log(position.coords);
  map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  map.zoomControl.setPosition('topright');

  var searchboxControl=createSearchboxControl();
  var control = new searchboxControl({
    sidebarTitleText: 'Restaurant App',
    sidebarMenuItems: {
      Items: []
    }
  });
  control._searchfunctionCallBack = function (search)
  {
    var filteredData = markersData.filter(marker => marker.name.includes(search));
    renderMarkers(filteredData);
  }
  map.addControl(control);
  getMarkers();
}

function getMarkers() {
  console.log(window.location)
  var apiEndpoint = `${window.location.href}/api/apiRestaurants.php`;
  
  $.ajax({
    url: apiEndpoint
  }).done(function(data) {
    markersData = data;
    renderMarkers(markersData);
  });

}

function renderMarkers(markers) {
  markersLayers.forEach(layer => {
    map.removeLayer(layer);
  });

  markers.forEach(marker => {
    var kindsArray = marker.kind_food.split(',');
    var kindsHtml = '';

    kindsArray.forEach(kind => {
      kindsHtml += `<p>${kind}</p>`;
    })

    var markerLayer = new L.Marker([marker.lat, marker.lng]);
    markersLayers.push(markerLayer);
    map.addLayer(markerLayer);
    markerLayer.bindPopup(`
      <h1>${marker.name}</h1>
      <p>${marker.address}</p>
      <h2>Tipo de comida</h2>
      ${kindsHtml}
    `).openPopup();
  });
}