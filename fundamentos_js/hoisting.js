//Aula sobre Hoisting, um dos padrões encontrados na linguagem JavaScript
//Traduzido do português significa içamento, eleveção. Ato de declarar variáveis depois delas terem sido invocadas, por exemplo.
//segue abaixo um exemplo de hoisting;

console.log(funcs(6, 5, 1));

function funcs(a, b, c){
    return a + b + c;
}
// a razão para a saída de código se dá pelo fato de JavaScript elevar(içar) a função para o topo do código.