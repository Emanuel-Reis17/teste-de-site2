function menu(){
    let opts = document.querySelector('#opts')
    if (window.innerWidth <= '650px'){
        opts.value.style.display = 'block'
    }
}

function compra(){
    alert('~[ALERTA] Compra Indisponível no momento, tente novamente  mais tarde.')
}

function chamada(){
    alert('[ALERTA!] Fora de serviço no momento, por favor tente mais tarde')
} 