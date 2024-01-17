/*STRING é uma cadeia de caraceteres, delimitado por "aspas duplas", 'aspas simples' ou `crase` */

const escola = "Cod3r";

console.log(escola); //imprime a variável
console.log(escola.charAt(4)); //imprime o string especificado no índice
console.log(escola.charCodeAt(3)); //retorna o valor da string especificada de acordo com a tabela unicode
console.log(escola.indexOf('3')); //imprime a posição de uma string específica em uma variável

console.log(escola.substring(1)); //imprime uma variável a partir da strig especificada
console.log(escola.substring(0, 3)); //imprime strings específicos da origem até o fim de uma variável

console.log('escola ' .concat(escola).concat("!")); //faz a concatenação de uma cadeia de caracteres + uma variável e por fim uma cadeia de caracteres delimitada por aspas duplas
console.log(escola.replace(3, "ee")); //faz a substituição de uma string específica de uma variável