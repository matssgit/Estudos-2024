let nome1 = prompt('Qual o nome do primeiro veículo?')
let velocidade1 = parseFloat(prompt('Qual a velocidade do primeiro veículo?'))
let nome2 = prompt('Qual o nome do segundo veículo?')
let velocidade2 = parseFloat(prompt('Qual a velocidade do segundo veículo?'))

if (velocidade1 > velocidade2) {
    alert(`O veículo ${nome1} é mais rápido que o veículo ${nome2}
    Velocidade do ${nome1}: ${velocidade1}
    Velocidade do ${nome2}: ${velocidade2}`)
} else if (velocidade1 < velocidade2) {
    alert(`O veículo ${nome2} é mais rápido que o veículo ${nome1}
    Velocidade do ${nome2}: ${velocidade2}
    Velocidade do ${nome1}: ${velocidade1}`)
} else {
    alert(`A velocidade do veículo ${nome1} e ${nome2} são iguais!
    Velocidade de ambos: ${velocidade1}`)
}