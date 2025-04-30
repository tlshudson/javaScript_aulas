// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  //fórmula Juros Simples
  let Ta = taxaJuros / 100;
  let montante = capitalInicial + (capitalInicial * Ta * tempoAplicacao);
  let juros = capitalInicial * Ta * tempoAplicacao
  return [montante, juros];
}
console.log(jurosSimples(600, 12, 5));

// console.log(this.jurosSimples());

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
  this.jurosSimples.montante = M;
  let M = capitalInicial + (i * Ta * tempoAplicacao);

}
