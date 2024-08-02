//A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.
const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Quadro de Honra");
        break

        case 8: 
        case 7:
            console.log("Aprovado");
        break;

        case 6: case 5: case 4:
            console.log("Recuperação");
        break;

        case 3: case 2: case 1:
            console.log("Reprovado");
        break;
        default:
            console.log("Entrada de nota inválida");
    }
}

imprimirResultado(8);
imprimirResultado(8.99);
imprimirResultado(22);