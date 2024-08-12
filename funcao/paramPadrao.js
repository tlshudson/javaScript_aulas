//algumas estrategias para definir um parametro padrão a ser recebido pela função.
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}
console.log(soma1(), soma1(2), soma1(3))
//efeitos colaterais ao receber parâmetros 0, retorna undefined.
//percebe-se que ao atribuir somente um parâmetro, a função retorna os valores padrões definidos em seu escopo junto com a soma realizada dentro do escopo.

//2ª maneira de definir parâmetros padrões para funções
//não tão utilizado.
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}
console.log(soma2(), soma2(2, 3), soma2(3, 4, 1))

//valor padrão a partir da versão do ecmascript2015

function funcao3(a = 1, b = 1, c = 1) {
    return a + b + c;   
}

console.log(funcao3(), funcao3(2, 3), funcao3(3, 3, 3));