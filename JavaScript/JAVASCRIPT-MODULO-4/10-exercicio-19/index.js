const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do post", "Lorem ipsum dolor sic...")

post.AddComment("Isaac Pontes", "Muito Bom!")
post.AddComment("Lucas", "Achei interessante.")

console.log(john)
console.log(post)
