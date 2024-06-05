const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        // 1. nome,  (x candidatos)
        `${textoFinal} += ${indice}.`
        `${textoFinal} += ${vaga.nome}`
        `${textoFinal} +=  (${vaga.candidatos.length} candidatos)`
    })

    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe uma descrição para a vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

    const confirmacao = confirm(
        `Deseja criar uma nova vaga com essas informações?

         Nome: ${nome}
         Descrição: ${descricao}
         Data Limite: ${dataLimite}`)

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga(){
    const indice = prompt("Informe o índice da vaga que deseja exibir:")

    if (indice >= vagas.length || indice < 0) {
        alert("Índice inválido")
    } else {
        return
    }

    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return `${textoFinal}
        - ${candidato}`
    })

    alert(`
    Vaga n.º ${indice}
    Nome: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data Limite: ${vaga.dataLimite}
    Quantidade de candidatos: ${vaga.candidatos.length}
    Candidatos inscritos na vaga: ${candidatosEmTexto}`)
}

function inscreverCandidato(){
    const candidato = prompt("Informe nome do(a) candidato(a")
    const indice = prompt("Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever")
    const vaga = vagas[indice]

    const confirmacao = confirm(`
    Deseja inscrever o candidato ${candidato} na vaga ${indice}?
    Nome: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data Limite: ${vaga.dataLimite}`)

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga(){
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(`
    Tem certeza que deseja excluir a vaga ${indice}?
    Nome: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data Limite: ${vaga.dataLimite}`)

    if (confirmacao){
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

function exibirMenu() {
    const opcao = prompt(`
    Cadastro de Vagas de Emprego
    
    Escolha uma das opções:
    1. Listar vagas disponíveis:
    2. Criar nova vaga
    3. Exibir uma vaga
    4. Inscrever um(a) candidato(a)
    5. Excluir uma vaga
    6. Sair`)

    return opcao
}

function executar(){
    let opcao = ""
}

do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }

  } while (opcao !== "6");

executar()
