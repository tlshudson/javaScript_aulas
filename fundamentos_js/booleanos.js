let isAtivo=  false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo); 

isAtivo = 1;
console.log(!!isAtivo);

//explicação do padrão do valor de variáveis que é sempre verdadeiro
//utilização do ! para inverter o valor uma única vez, já o !! inverte o valor duas vezes, retornando ao seu valor original;


console.log('\nos verdadeiros...');
console.log(!!3); //um número é verdadeiro
console.log(!!-1); //numero negativo é um boolean verdadeiro
console.log(!!' '); //string é verdadeiro
console.log(!![]) //um array vazio é um valor verdadeiro
console.log(!!Infinity); //valor especial que tem valor verdadeiro

console.log("\n os falsos...");
console.log(!!0); //o número 0 por não ter valor é falso
console.log(!!''); //uma string vazia retorna à um valor falso      
console.log(!!null); //a represetação numérica null é um valor falso

//Pequenas operações lógicas com tipo booleano
console.log("\nFinalizando com algumas operações lógicas")
console.log(!!('' || null || 0 || ' ')); //retorna true pois um dos elementos do teste é verdadeiro

let nome = 'Hudson';
console.log(nome || 'Intedeterminado');