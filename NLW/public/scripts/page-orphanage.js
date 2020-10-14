const op = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//criate map
var mymap = L.map('mapid', op).setView([-19.8998366,-43.9991507], 14);


//criate and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(mymap);

//criate icon
const icon = L.icon({
    iconUrl: "./public/img/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


//criate and add marker
L.marker([-19.8998366,-43.9991507], { icon }).addTo(mymap);