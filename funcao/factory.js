//função fábrica, que retorna um objeto
function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade,
  };
}
// let p2;
console.log(criarPessoa("Maria", 12));
