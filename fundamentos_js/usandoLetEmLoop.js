//agora o mesmo exemplo só que definindo a variável com LET

for(let i = 0; i < 11; i++){
    console.log(i);
}
//como esperado o laço de repettição imprimiu todos os valores menor que 11.
//agora vamos tentar imprimir o valor desta variável fora do escopo do laço de repetição

// console.log("o valor de i é: " + i); //como esperado este comando retornou o erro de (i is not defined) pelo motivo da variável não estar disponível fora do escopo do laço de repetição declarado na linha 3