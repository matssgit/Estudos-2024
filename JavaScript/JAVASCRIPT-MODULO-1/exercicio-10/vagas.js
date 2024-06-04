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
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return `${textoFinal}
        - ${candidato}`
    })
}