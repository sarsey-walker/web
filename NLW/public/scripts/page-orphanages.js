
//criate map
var mymap = L.map('mapid').setView([-19.8998366,-43.9991507], 14);


//criate and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(mymap);

//criate icon
const icon = L.icon({
    iconUrl: "./public/img/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

//criate popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/img/arrow-white.svg"> </a>');



//criate and add marker
L.marker([-19.8998366,-43.9991507], { icon }).addTo(mymap).bindPopup(popup);