//alocação de um objeto constante em um endereço de memória
const pessoa = {nome: 'Pedro'}
pessoa.nome = 'Maria' //é possível alterar o objeto, porém não é possível alterar o a variável constante
console.log(pessoa);

//tentativa de realocação do objeto em outro endereço de memória
// pessoa = {nome: "João"}; vai gerar um erro

//nesta linha o objeto encontra-se congelado, agora também não é mais possível alterar o objeto
Object.freeze(pessoa);
pessoa.nome = { nome: "Tentativa mal sucedida de alteração de objeto"} //a saída continuará como 'Maria'
console.log(pessoa);
