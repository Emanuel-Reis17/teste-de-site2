// Responsividade do menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
hamburger.addEventListener("click", function() {
    if (menu.style.display == "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
})


// Opções de serviços & planos
function chamada(){
    alert('[ALERTA!] Fora de serviço no momento, por favor tente mais tarde')
} 

// Validar o formulário
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