let valorIni = parseFloat(prompt("Qual a quantidade inicial de dinheiro disponível?"))
let valorFin = 0
let valorAlt = ""

do {
    valorAlt = (prompt(`O valor Inicial é de R$${valorIni}, selecione uma das opções abaixo para adicionar ou remover dinheiro: 
    1 - Adicionar: 
    2 - Remover: 
    3 - Sair: `))

    switch (valorAlt) {
        case "1":
            valorAlt = parseFloat(prompt("Quando você deseja adicionar?"))
            valorFin += valorAlt
            alert(`Você adicionou R$${valorAlt} no seu valor inicial.`)
            break
        case "2":
            valorAlt = parseFloat(prompt("Quando você deseja remover?"))
            valorFin -= valorAlt
            alert(`Você removeu R$${valorAlt} do seu valor inicial`)
            break
        case "3": 
            alert(`Você optou por sair do programa...
            Valor inicial: R$${valorIni}
            Valor final após as alterações: R$${valorIni + valorFin}`)
            break
        default:
            alert("Opção inválida.")
            break
    }
} while (valorAlt !== "3");