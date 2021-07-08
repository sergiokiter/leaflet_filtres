var map;
var markersData = [];
var markersLayers = [];
$( document ).ready(function() {
  setupMap();
  getMarkers();
});

function setupMap() {
  map = L.map('map').setView([51.505, -0.09], 13);

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