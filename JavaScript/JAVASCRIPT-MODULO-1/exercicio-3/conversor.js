let valor = parseFloat(prompt("Insira uma medida em metros: "))
let convert = prompt(
    'Digite uma das opções abaixo que deseja converter o valor digitado:' + 
    '\n1 - Milimetro (mm)' + 
    '\n2 - Centímetro (cm)' + 
    '\n3 - Decímetro (dm)' + 
    '\n4 - Decâmetro (dam)' + 
    '\n5 - Hectômetro (hm)' + 
    '\n6 - Quilômetro (km)')

switch (convert) {
    case "1":
        let mm = valor * 1000
        alert(`O valor ${valor} metros em milímetros é: ${mm}mm`)
        break
    case "2":
        let cm = valor * 100
        alert(`O valor ${valor} metros em centímetros é: ${cm}cm`)
        break
    case "3":
        let dm = valor * 10
        alert(`O valor ${valor} metros em decímetros é: ${dm}dm`)
        break
    case "4":
        let dam = valor / 10
        alert(`O valor ${valor} metros em decâmetros é: ${dam}dam`)
        break
    case "5":
        let hm = valor / 100
        alert(`O valor ${valor} metros em hectômetros é: ${hm}hm`)
        break
    case "6":
        let km = valor / 1000
        alert(`O valor ${valor} metros em quilômetros é: ${km}km`)
        break
    default:
        alert("Opção inválida! Programa encerrado.")
}