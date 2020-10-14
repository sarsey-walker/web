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

/*image gallery*/

function selectImage(event){
    const button = event.currentTarget;

    // remover .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {button.classList.remove("active")});
    //selecionar imagem selecionada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    //atualizar conrainer de imagem

    imageContainer.src = image.src;
    //adcionar classe .active para esse votao
    button.classList.add('active');
}