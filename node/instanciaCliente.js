const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor);
//exemplo de carregamento de cache do node, onde temos funções que atribuem valores aos resultados de variáveis e agora invocamos essas variáveis