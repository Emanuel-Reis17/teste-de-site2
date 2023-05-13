function compra(){
    alert('~[ALERTA] Compra Indisponível no momento, tente novamente  mais tarde.')
}

function chamada(){
    alert('[ALERTA!] Fora de serviço no momento, por favor tente mais tarde')
} 

function validate(){
    const infor = {}
    infor.username = document.querySelector("#user");
    infor.email = document.querySelector("#email");
    infor.password = document.querySelector("#password");

    if (infor.username.value == "" || infor.email.value == "" || infor.password.value == ""){
        alert("[ERRO] Dados inválidos!");
        return false;
    } else {
        alert("Dados cadastrados com sucesso!");
        return true;
    }
}