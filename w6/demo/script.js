var trayButton = document.querySelector(`aside button:first-child`)

trayButton.addEventListener(`click`, toggle)

function toggle(e) {
   document.querySelector(`.tray`).classList.toggle(`hide`)

}

var button = document.querySelectorAll(`nav button`)

for(var i=0 ; i<button.length ; i++){
    button[i].addEventListener(`click`, butts)
        
}

function butts(e){

    for(let i=0 ; i<button.length ; i++){
        button[i].computedStyleMap.backgroundColor=`#161616`;
    }
    e.target.style.backgroundColor=`#c2c2c2`;
    document.querySelector(`#breadcrums`).innerHTML= `<a href="#">${e.target.textContent}</a>`
}