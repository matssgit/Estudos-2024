function dobro(x) {
    console.log(`O dobro de ${x} é ${x*2}`)
}

// dobro(23)

function dizerOla(nome = "mundo"){
    alert(`Olá ${nome}`)
}

// dizerOla("Matheus")
// dizerOla()

function soma(a, b, c , d, e) {
    alert(`O resultado da soma é ${a + b + c + d + e}`)
}

// soma(7, 6, 4, 1, 9)

function criarUsuario(nome, email, senha, tipo = 'admin') {
    const usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
 }
function novoUsuario(nome, tipo="admin", email, senha){
    const usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}
criarUsuario("Matheus", "matheus@email.com", "1234")
novoUsuario("Matheus", "admin", "matheus@email.com", "1234")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
  function parametrosDoJeitoCerto(usuario) {
    // ...
  }
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
  parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
  const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
  }
  parametrosDoJeitoCerto(dadosDoUsuario)
