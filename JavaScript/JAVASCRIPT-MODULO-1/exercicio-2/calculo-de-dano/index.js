let persoAtk = prompt('Insira o nome do personagem do ataque: ')
let powerAtk = parseFloat(prompt('Insira em números o poder de ataque do personagem: '))

let persoDef = prompt('Insira o nome do personagem da defesa: ')
let powerDef = parseFloat(prompt('Insira em números a quantidade de pontos de vida do personagem: '))

let shild = prompt('O personagem da defesa possui escudo?\n Digite Sim/Nao')

let damage = ''
let damageCaused = 0

if (powerAtk > powerDef && shild == 'Nao') {
    damage = powerDef - powerAtk
    alert(`O dano causado foi de ${damage} pontos`)
} else if (powerAtk > powerDef && shild == 'Sim') {
    damage = (powerAtk - powerDef) / 2 
    alert(`O dano causado foi de ${damage} pontos`)
} else if (powerAtk <= powerDef){
    alert(`O dano causado foi de 0`)
}

damageCaused = powerDef - damage
window.alert(`- Nome do personagem do ataque: ${persoAtk}
- Pontos de ataque do personagem ${persoAtk}: ${powerAtk} pontos

- Nome do personagem da defesa: ${persoDef}
- Pontos de defesa do personagem ${persoDef}: ${powerDef} pontos

- O dano de ataque causado foi de ${damageCaused} pontos.

- ${persoDef} ainda possui ${damage} de pontos de vida.`)
