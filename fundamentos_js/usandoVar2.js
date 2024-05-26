//mais um exemplo do uso de variáveis do tipo VAR em escopo global. No exemplo abaixo irei declarar uma variável em escopo global e no bloco de código abaixo, irei declarar novamente esta variável com outro valor. 

var nome = "Mascaco";

{
    var nome = "Macaco";
    console.log(nome);
}

console.log(nome);

//como previsto, VAR ignorou os escopos de blocos de código e sobrescreveu o valor que declarei na linha 3. É importante evitar declarar variáveis VAR em escopo global, pois elas podem ser sobrescritas a qualquer momento. 
//RESULTADO foi impresso o valor declarado na linha 6, 2 VEZES seguidas;