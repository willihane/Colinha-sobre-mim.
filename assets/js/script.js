/*
Anotações

*DOM* Exemplo da aula:
const botao = document.getElementById() pega o elemento pelo nome do ID
const botao = document.getElementsByClassName('texto') pega os elementos pelo nome da classe
const botao = document.getElementsByName() pega os elementos pelo atributo name
const botao = document.getElementsByTagName pega os elementos pelo nome doa TAG
const botao = document.getElementsByTagNameNS() pega o primeiro elemento pelo nome da TAG

*buscar?*
por Tag: getElementByTagName()
Por Nome: getElementsByName()
Por Id: getElementById()
Por Classe: getElementsByClassName()
por Seletor: querySelector()
por todos os Seletores: querySelectorAll()

*Variaveis no JS*

var  --> variavel de escopo global e que pode modificar o valor
let  --> variavel sem escopo global e que pode mudar o valor
const  --> variavel sem escopo global e que não pode mudar o valor
*/

// Declaração de variaveis: 
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")

let nomeOk = false
let emailOk = false
let assuntoOk = false


function validaNome(){

let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "Red"
        nomeOk = false;
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "Green"
        nomeOk = true
}

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (email.value.match(regex))  {
            txtEmail.innerHTML = "E-mail válido"
            txtEmail.style.color = "Green"
            emailOk = true

        } else {
            txtEmail.innerHTML = "E-mail inválido"
            txtEmail.style.color = "Red"
            emailOk = false
        }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres."
        txtAssunto.style.color = "Red"  //txtAssunto.style.backgroundColor = "#ffff" -> se quiser colocar um background no texto a ser exibido.
        txtAssunto.style.display = "block"
        assuntoOk = false
    
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