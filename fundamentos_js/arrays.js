const valores = [1.2, 3.3, 4, 5.1] //array declarado de forma literal, com 4 posições
console.log(valores[0], valores[3]); //aqui posso imprimir dois indices especificos do array
console.log(valores); //aqui poss imprimir o array inteiro

valores[5] = 1.1; //dessa maneira posso fazer a inserção de um indice no array de forma manual
console.log(valores);
console.log(valores.length); //usando a função length posso fazer a contagem de indices presentes no array

valores.push("aleatório", null, {id: 3}); //utilizando a função push é possível adicionar indices ao array, os arrays por serem estruturas heterogêneas, aceitam diversos tipos de valores. EX: Object, null, NaN
console.log(valores);

console.log(valores.pop()); //Remove o último elemento do array e retorna o valor removido, se o array estiver vazio, undefined é retornada e o array não é modificado.
console.log(valores);
// delete valores[1]; //funão para remover um indice especifico de um array
console.log(valores);