const soma = function (x, y) {
    return x + y;
}

const imprimirResultado = function(a, b, operacao=soma){
    console.log(operacao(a, b));
}

imprimirResultado(2, 3);

//exemplo de duas funções anônimas, uma delas que retornará resultado de uma operação de outra função anônima