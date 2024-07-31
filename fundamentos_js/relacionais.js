//Aula sobre operadores relacionais: Os valores sempre retornarão em Verdadeiro OU Falso, tomar cuidado com os tipo a serem comparados/relacionados.

console.log("Exemplo 01)", '1' == 1); //igual
;console.log("Exemplo 02)", '1' === 1); //estritamente igual
console.log("Exemplo 03)", '3' != 3); //diferente
console.log("Exemplo 04)", '3' !== 3); //estritamente diferente

console.log("Exemplo 05)", 3 < 2); //menor que
console.log("Exemplo 06)", 3 > 2); //maior que
console.log("Exemplo 07)", 3 <= 2); //menor ou igual
console.log("Exemplo 08)", 3 >= 2); //maior ou igual

const d1 = new Date(0);
const d2 = new Date(0);

console.log("Exemplo 09)", d1 === d2) //retorna falso
console.log("Exemplo 10)", d1 == d2) //retorna verdadeiro
console.log("Exemplo 11)", d1.getTime() === d2.getTime())
console.log("Exemplo 12)", undefined == null);
console.log("Exemplo 13)", undefined === null);