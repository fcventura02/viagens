let map;
let places;
let infoWindow;
let markers = [];
let autocomplete;
const countryRestrict = { country: "br" };
const MARKER_PATH =
  "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");
const countries = {
  br: {
    center: { lat: -12.9984111, lng: -38.5210114 },
    zoom: 18,
  },
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: countries["br"].zoom,
    center: countries["br"].center,
    mapTypeControl: false,
    panControl: false,
  });

  addMarker(countries.br.center, map);
}

function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    map: map,
  });
}
