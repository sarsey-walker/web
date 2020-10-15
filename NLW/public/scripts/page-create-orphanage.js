
//criate map
var mymap = L.map('mapid').setView([-19.8998366,-43.9991507], 14);


//criate and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(mymap);

//criate icon
const icon = L.icon({
    iconUrl: "./public/img/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

//criate and add marker
mymap.on('click', (event) => {


    var lat = event.latlng.lat;
    var lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    // remove icon
    marker && mymap.removeLayer(marker);
    //add icon
    marker = L.marker([lat, lng], {icon}).addTo(mymap);
});

//add photo
function addPhotoField(){
    //pegar o container de fotos
    let container = document.querySelector('#images');
    //pegar o container para duplicar o new image
    let fieldsContainer = document.querySelectorAll('.new-upload');
    //realizar o clone da ultima img add
    let newField = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    //verifica se campo esta vazio
    let input = newField.children[0];

    if(input.value == ""){
        return
    }
    //limpar campo
    input.value = "";
    //add clone ao container #imagens
    container.appendChild(newField);
}

function deleteField(event){
    let span = event.currentTarget;
    let fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2){
        //limpar o campo
        span.parentNode.children[0].value = "";
        return
    }
    //deletar o campo
    span.parentNode.remove();
}
//select yes or not
function toggleSelect(event){
    //retirar a class .active dos botoes
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active')
    });

    //colocar class .active no botao clicado
    let button = event.currentTarget;
    button.classList.add('active');

    //atualizar o menu input hidden com o valor selecionado
    let input = document.querySelector('[name="open-weekend"]');

    input.value = button.dataset.value;
}