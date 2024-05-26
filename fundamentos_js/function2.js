//Armazenando uma função em uma variável, com isso basta chamar a função e passar os parâmetros, pois no escopo da função já está definida a impressão do resultado da operação entre os parâmetros;
const imprimirSoma = function(a, b){
    console.log(a + b);
};

imprimirSoma(2, 5);

//uma função arrow possui uma sintaxe mais curta quando comparada com uma função padrão, utilizada para chamadas rápidas com retorno, não pode ser utilizada como função construtora
//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
};
console.log(soma(1, 2));

//Função implícita dessa vez mais simples, sem nome e com o escopo definido na mesma linha
const subtracao = (a, b) => a - b;
console.log(subtracao(10, 8));
