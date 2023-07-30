const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);

//Função para verificar se é um número inteiro
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

//sentença para calcular uma média
const avaliacao1 = 9.237;
const avaliacao2 = 8.376;

const total = avaliacao1 * peso1
 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); //toFixed é utilizada para mostrar um determinado número de casas decimais
console.log(typeof media);
console.log(typeof Number); //"Number"(function) é ≠ "number"(tipo)