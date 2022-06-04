var map = L.map("map").setView([34.65245169997602, -1.9646322727203371], 16);

L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=6KElTCjp60Yp0A1W1NzU",
  {
    attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

// Adding icon to the marker
var myIcon = L.icon({
  iconUrl: "imgs/restaurant-map.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

// Adding marker
var marker = L.marker([34.65053499929365, -1.9646322727203371], {
  icon: myIcon,
}).addTo(map);

// Adding Popups
marker.bindPopup(`
  <center>
    <span class="h4 mt-2" style="display:inline-block">Complex Nametest</span>
    <br/>
    <span class="h6" >welcom to our complex</span>
    <br/>
    <span class="text-muted mt-2" style="display:inline-block">Addr: Route Jerada, Sidi Moussa Lemhaya</span>
    <br/>
    <span class="text-muted mt-2" style="display:inline-block">Tel : +212 678-910112</span>
    <br/>
    <a class="btn main-btn card-btn rounded-pill mt-2 text-white" href="https://www.google.com/maps/dir/?api=1&destination=M22P%2B56G%2C%20Sidi%20Moussa%20Lemhaya%2C%20Morocco" target="_blank">go to your map</a>
  </center>
`).openPopup();

// Adding GeoJSON
var myGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-1.96521484, 34.65160981],
            [-1.96586657, 34.65090657],
            [-1.96391139, 34.6496672],
            [-1.96353897, 34.65012674],
            [-1.96521484, 34.65160981],
          ],
        ],
      },
      id: "e76f5c29-1959-4f94-bd86-70e2a7c65b3b",
      properties: null,
    },
  ],
};

L.geoJSON(myGeoJSON).addTo(map);

// {lat: 34.65053499929365, lng: -1.9646322727203371}
// to chose icons: https://www.flaticon.com/search?word=map%20marker%20restaurant
// the link of the current icon: https://www.flaticon.com/premium-icon/restaurant_5695138?term=map%20marker%20restaurant&related_id=5695138
