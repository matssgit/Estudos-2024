let menu 
let cartas = []
let novaCarta = ""

do {
    menu = prompt(`
    O baralho atualmente contém ${cartas.length} cartas.
    Selecione umas das opções abaixo:
    
    1- Adicionar uma carta: 
    2- Puxar uma carta: 
    3- Sair`)

    switch (menu) {
        case "1":
            novaCarta = prompt("Digite qual carta deseja adicionar ao baralho: ")
            cartas.push(novaCarta)
            alert(`Carta ${novaCarta} adicionada.`)
            break;
        case "2":
            const cartaPuxada = cartas.shift()
                if(!cartaPuxada) {
                    alert("Seu baralho está vazio")
                } else {
                    alert(`Você puxou a carta ${cartas}`)
                }
            break;
        case "3":
            alert("Programa encerrado!")
            break;
        default: 
            alert("Opção inválida!")
    }
} while (menu !== "3")