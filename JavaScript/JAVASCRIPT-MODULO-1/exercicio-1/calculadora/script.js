let valor1 = parseInt(prompt('Insira o primeiro valor que será calculado: '))
let valor2 = parseInt(prompt('Insira o segundo valor que será calculado: '))

let soma = (valor1) + (valor2)
let sub = (valor1) - (valor2)
let mult = (valor1) * (valor2)
let div = (valor1) / (valor2)

window.alert(`
- Você inseriu o valor 1: ${valor1}
- Você inseriu o valor 2: ${valor2}
- A soma entre os valores é: ${soma}
- A subtração entre os valores é: ${sub}
- A multiplicação dos valores é: ${mult}
- A divisão entre os valores é: ${div}`)