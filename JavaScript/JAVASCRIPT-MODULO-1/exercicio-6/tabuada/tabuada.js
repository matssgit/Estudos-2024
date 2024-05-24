let numero = parseFloat(prompt(
   "Olá, eu sou o Robô da Tabuada!\n" +
   "Digite um número para ser calculado na tabuada: "))

let resultado = ""

for (let fator = 1; fator <= 20; fator++){
   resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}

alert(`O resultado da tabuada de ${numero}: 

${resultado}`)
