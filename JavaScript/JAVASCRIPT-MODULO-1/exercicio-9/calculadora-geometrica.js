let base = ""
let altura = ""
let lado = ""
const pi = 3.14
let raio = ""
let menu = ""

function triangulo(){
    let resultado = (base * altura) / 2
    return resultado
}

function retangulo(){
    let resultado = base * altura
    return resultado
}

function quadrado(){
    let resultado = Math.pow(lado, 2)
    return resultado
}

function trapezio(){
    let resultado = (baseMaior + baseMenor) * altura / 2
    return resultado
}

function circulo(){
    let resultado = pi * Math.pow(raio, 2)
    return resultado
}

do {
    menu = prompt(`Seja bem-vindo(a) à calculadora geométrica! Selecione uma das opções abaixo para realizar seu cálculo: 
    1- Calcular área do triângulo
    2- Calcular área do retângulo 
    3- Calcular área do quadrado 
    4- Calcular área do trapézio 
    5- Calcular área do círculo 
    6- Sair`);

    switch (menu){
        case "1":
            base = parseFloat(prompt("Informe a base do triângulo: "))
            altura = parseFloat(prompt("Informe a altura do triângulo: "))
            resultado = triangulo(base, altura)
            alert(`A área do triângulo é: ${resultado}`)
            break;
        case "2":
            base = parseFloat(prompt("Informe a base do retângulo: "))
            altura = parseFloat(prompt("Informe a base altura do trapézio: "))
            resultado = retangulo(base, altura)
            alert(`A área do retângulo é: ${resultado}`)
            break;
        case "3":
            lado = parseFloat(prompt("Informe a área do quadrado: "))
            resultado = quadrado(lado)
            alert(`A área do quadrado é: ${resultado}`)
            break;
        case "4":
            var baseMaior = parseFloat(prompt("Informe a base maior do trapézio: "))
            var baseMenor = parseFloat(prompt("Informe a base menor do trapézio: "))
            altura = parseFloat(prompt("Informe a altura do trapézio: "))
            resultado = trapezio(baseMaior, baseMenor, altura)
            alert(`A área do trapézio é: ${resultado}`)
            break;
        case "5":
            raio = parseFloat(prompt("Informe a área do círculo: "))
            resultado = circulo(raio)
            alert(`A área do círculo é: ${resultado}`)
            break;
        case "6": 
            alert("Programa Encerrado!")
            break;
        default:
            alert("Opção inválida.")

    }
    
} while (menu !== "6")