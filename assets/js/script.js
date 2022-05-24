/*
Case sensitive = reconhece letras maiusculas e minusculas.

Buscar 
por Tag: getElementByTagName()
Por Nome: getElementsByName()
Por Id: getElementById()
Por Classe: getElementsByClassName()
por Seletor: querySelector()
por todos os Seletores: querySelectorAll()

*/

// Declaração de variaveis: 
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){

let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "Red"
} else {
    txtNome.innerHTML = "Nome válido"
    txtNome.style.color = "Green"
    nomeOk = true
}

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

        if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
            txtEmail.innerHTML = "E-mail inválido"
            txtEmail.style.color = "Red"
        } else {
            txtEmail.innerHTML = "E-mail válido"
            txtEmail.style.color = "Green"
            emailOk = true
        }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres."
        txtAssunto.style.color = "Red"  //txtAssunto.style.backgroundColor = "#ffff" -> se quiser colocar um background no texto a ser exibido.
        txtAssunto.style.display = "block"
    
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }

}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Por favor, preencha o formulário corretamente antes de enviar!")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal () {
    mapa.style.width = "max(40vw, 500px)"
    mapa.style.height = "auto"
}