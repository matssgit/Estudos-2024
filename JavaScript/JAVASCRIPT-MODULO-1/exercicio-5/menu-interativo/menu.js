let menu = ""

do {
    menu = prompt("Escolha seu time do coracao: \n1: Corinthians\n2: Santos\n3: Palmeiras\n4: São Paulo\n5: Encerrar")

    switch (menu) {
        case "1":
            alert("Você escolheu o Corinthians")
            break
        case "2":
            alert("Você escolheu o Santos")
            break
        case "3":
            alert("Você escolheu o Palmeiras")
            break
        case "4":
            alert("Você escolheu o São Paulo")
            break
        case "5":
            alert("Encerrar")
            break
        default:
            alert("Opção Inválida!")
    } 

    /*if (menu == "5") {
        alert("Encerrando o programa...")
    } else {
        alert("Reiniciando o programa...")
    }*/
    
} while (menu !== "5")

    alert ("Finalizando...")