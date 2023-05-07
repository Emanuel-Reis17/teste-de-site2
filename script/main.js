function menu(){
    let item = document.querySelector('span#menu')
    if (window.innerWidth == '650px'){
        item.style.display = 'none'
    }
}

function compra(){
    alert('~[ALERTA] Compra Indisponível no momento, tente novamente  mais tarde.')
}

function chamada(){
    alert('[ALERTA!] Fora de serviço no momento, por favor tente mais tarde')
} 