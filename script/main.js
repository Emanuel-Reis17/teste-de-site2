function menu() {
    let menu = document.querySelector('span#menu')
    let header = document.querySelector('header')
    let logo = document.querySelector('#logo')
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        header.style.display = 'block'
        header.style.height = 'auto'
        logo.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

function compra(){
    alert('~[ALERTA] Compra Indisponível no momento, tente novamente  mais tarde.')
}