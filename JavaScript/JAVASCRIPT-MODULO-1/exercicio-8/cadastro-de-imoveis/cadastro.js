let imoveis = []
let menu = ""

do {
    menu = prompt(`
    Bem-vindo ao Cadastro de Imóveis
    Total de imóveis cadastrados: ${imoveis.length}
    
    Escolha uma opção:
    1. Novo imóvel
    2. Listar imóveis
    3. Sair`)

    switch(menu) {
        case "1":
            const imovel = {}

            imovel.nome = prompt("Digite o nome do proprietário: ")
            imovel.quartos = parseFloat(prompt("Digite a quantidade de quartos: "))
            imovel.banheiros = parseFloat(prompt("Quantidade de banheiros: "))
            imovel.garagem = prompt("Possui garagem?: Sim/Não")

            const confirma = confirm(`
            Salvar este imóvel?
            
            Proprietário: ${imovel.nome}
            Quartos: ${imovel.quartos}
            Banheiros: ${imovel.banheiros}
            Garagem: ${imovel.garagem}`)

            if (confirma) {
                imoveis.push(imovel)
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert(`
                Imóvel ${i + 1}
                Proprietário: ${imoveis[i].nome}
                Banheiros: ${imoveis[i].banheiros}
                Possui Garagem?: ${imoveis[i].garagem}`)
            }
            break
        case "3":
            alert("Programa encerrado!")
            break
        default:
            "Opção inválida!"
            break
    }

} while (menu !== "3")