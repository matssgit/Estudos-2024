let num = document.querySelector('input#num')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
    
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        valores.sort()
        let menor = valores[0]
        let maior = valores[tot-1]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            media = soma / tot
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}