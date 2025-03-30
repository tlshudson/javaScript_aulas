//função construtora de um objeto carro
function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0;
  //definições de atributos

  //metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };
  //definições do método acelerar

  //metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
  //definição do método getvelocidade que pode retornar um atributo privado
}

//definição do "uno" como uma instância do objeto carro
const uno = new Carro();

//"uno" agora pode acessar métodos dentro do Objeto Carro e agora recebeu o "return" de getVelocidadeAtual
uno.acelerar();

//depois de transformado em objeto, uno chama a função anônima getVelocidadeAtual e imprimiu o valor retornado de velocidadeAtual
console.log(uno.getVelocidadeAtual());
