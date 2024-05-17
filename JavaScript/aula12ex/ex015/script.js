function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('ano');
    let res = document.querySelector('div#res');
    
    console.log("Valor do campo de texto:", fano.value); // Verifica o valor do campo de texto
    console.log("Comprimento do valor:", fano.value.length); // Verifica o comprimento do valor
    
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[Erro] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName ('radsex')
        let idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
