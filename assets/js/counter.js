//Creo gli elementi tramite la funzione creazioneElementi in cui ho dichiarato i parametri
let title = creazioneElemento('h1', false, false, 'COUNTER')
let div = creazioneElemento('div', false, 'counter')
let lessButton = creazioneElemento('button', 'less', false, '-');
let number = creazioneElemento('span', false, 'counter', '0');
let addButton = creazioneElemento('button', 'add', false, '+');

document.body.append(title, div)

div.append(lessButton, number, addButton)

function creazioneElemento(tag, id, className, value){
    let elem = document.createElement(tag)
    if(id){
        elem.id = id;
    }
    if(className){
        elem.className = className;
    }
    elem.textContent = value;
    return elem
}

lessButton.addEventListener("click", cambioValore)
addButton.addEventListener("click", cambioValore)

function cambioValore(event){
    if(event.target.id === "less"){
        number.textContent--;
    }else if(event.target.id === "add"){
        number.textContent++;
    }
}


