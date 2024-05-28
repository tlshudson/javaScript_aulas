//declaração de uma variável para um array vazio.
const funcs = [];

for(let i = 0; i < 10; i++){
    funcs.push(function(){ //dados são inseridos no array funcs através de uma função anônima que adiciona elementos do contador for em forma de arrays em funcs.
        console.log(i);
    })
}

//neste caso a variável que que recebe os valores declarados recebe o valor direto da função e os retorna pelo simples fato da variável LET estar declarada no mesmo bloco de código que a função anônima
funcs[2]();
funcs[8]();