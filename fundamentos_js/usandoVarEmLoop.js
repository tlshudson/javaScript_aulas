//Esta aula serve para mostrar a declaração e impressão do valor de uma variável do tipo VAR em um escopo de laço de repetição FOR.

for (var i = 0; i < 10; i++){
    console.log(i);
}
//como esperado a função for imprimiu valores de 0-9 que é menor que < 10. E se fizermos a impressão do valor dessa variável, o que retornará?

console.log("i é igual a: " + i);
//a impressão do valor 10 só é dada pois: o laço de repetição só permite a impressão dentro de seu bloco de código um valor menor que 10, logo ele limitou o valor para 10, como ele está programado para imprimir um valor menor que 10, ele descarta este valor e imprime -1 (um a menos). Quando o valor desta variável é chamado no escopo global, ela retorna o valor completo sem limitação do laço de repetição for, logo ela trás 10 como resultado.