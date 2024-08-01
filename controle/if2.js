//aula sobre o uso das estruturas de controle IF + ELSE

function checarNota(nota){
    if(nota >= 7){
        console.log("Aprovado!");
    } else {
        console.log("Reprovado");
    }
}

checarNota(5);
checarNota(9);
checarNota("Epa"); //tomar cuidado com entradas de valores diferente da tratativa da função