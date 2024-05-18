function contar(){
    var inicio = window.document.getElementById("ini")
    var fim = window.document.getElementById("fim")
    var passo = document.getElementById("pas")
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        alert(`erro`)
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            // CONTAGEM CRESCENTE
                    for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}` }
            // CONTAGEM REGRESSIVA
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } 
            res.innerHTML += `\u{1F3C1}`
        }
    }

