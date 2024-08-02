//aula sobre estrutura de controle e repetição IF ELSE IF
//múltiplas condicionais if podem ser aninhados quando necessárias
//o código abaixo mostra uma função que utiliza uma função para comparar valores em um intervalo de valores

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim;
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log("Quadro de honra");
        } else if(nota.entre(7, 8.99)){
            console.log("Aprovado");
        } else if(nota.entre(4, 6.99)){
            console.log("Recuperação");
        } else if(nota.entre(0, 3.99)){
            console.log("Reprovado");
        } else{
            console.log("Nota innválida");
        }

        console.log("Fim@!");
}

imprimirResultado(10);
imprimirResultado(3);
imprimirResultado(7);
imprimirResultado(8);
imprimirResultado(6.75);
imprimirResultado(-1);
imprimirResultado(0);
