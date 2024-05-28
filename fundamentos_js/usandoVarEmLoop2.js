//declaração de uma variável para um array vazio.
const funcs = [];

for(var i = 0; i < 10; i++){
    funcs.push(function(){ //dados são inseridos no array funcs através de uma função anônima que adiciona elementos do contador for em forma de arrays em funcs.
        console.log(i);
    })
}

//porém como a variável var está definida globalmente ao invés de funcs receber o valor dois contado a pela função, ele recebe o número 10 que é a quantidade total que o laço for lançou através do contador
funcs[2]();