// Escopo é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal(){
    let animal = "Gato"
}

criarAnimal()
// console.log(animal)

function avaliarNota(nota){
    if (nota > 60) {
        var aprovado = true
        let situacao = "aprovado"
    } else {
        var aprovado = false
        let situacao = "reprovado"
    }

    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
}

// avaliarNota(83)
// avaliarNota(39)

function ola() {
    var texto = "Olá, mundo"
}

// console.log(texto)

console.log(nome)
console.log(sobrenome)

var nome = "Matheus"
var sobrenome = "Silva"

console.log(nome)
console.log(sobrenome)