// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulo(a, b, c) {
    if (a == b && b == c) {
        console.log("equilátero");
    } else if(a == b && b != c){
        console.log("isósceles");
    } else{
        console.log("escaleno");
        
    }
}

triangulo(1, 1, 1); //equilátero
triangulo(1, 1, 2); //equilátero
triangulo(1, 3, 2); //escaleno