let num = [5, 8, 2]
num[3] = 6
num.push(7)
num.sort()
console.log(`Nosso vetor é o ${num}`)

/* for(let pos= 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

/*  for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor ${pos} não foi encontrado dentro do vetor!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
