//variáveis do tipo VAR tem escopo global e escopo de função, variáveis do tipo LET tem escopo global, escopo de função e escopo de bloco de código, ela é mais restrita e resolve problemas de sobrescrita como encontrados na aula de usandoVar1. 
//No exemplo abaixo veremos a declaração de uma variável em escopo global, VAR, em seguida dentro de um bloco de código veremos uma variável sendo declarada com let. Como esperado os valores não irão se sobrescrever, pois let procura dentro de seu escopo o valor declarado e quando chamado para impressão, imprime este valor com sucesso.

var numero = 2;
{
    let numero = 3;
    console.log(numero);
}
console.log(numero);
