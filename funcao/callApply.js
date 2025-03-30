//definição do escopo da função
function getPreco(imposto = 0, moeda = "R$") {
    //definição do retorno da função, feita com concatenação no estilo Template Literais, que une as variáveis com ${} e interpola os valores
  return `${moeda} ${this.preco * (1 - this.desc) * (1 - imposto)}`;
}

//definição de um Objeto
const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco
};

//exemplificação de definição global de duas variáveis e a chamada dentro da função
global.preco = 20;
global.desc = 0.1;
console.log(getPreco());

//objeto sendo passado e aplicado na função criada
console.log(produto.getPreco());

//criação de outro objeto para exemplificação
const carro = { preco: 25200, desc: 0.20}

//aplicação do objeto dentro da função com o método call sem passagem de parâmetros, logo os parâmetros utilizados serão os definidos no escopo da função
console.log(getPreco.call(carro));

//aplicação do objeto dentro da função com o método call com passagem de parâmetro opcionais depois do objeto
console.log(getPreco.call(carro, 0.12, '$'));


//aplicação do objeto dentro da função com o método apply sem passagem de parâmetros, logo os parâmetros utilizados serão os definidos no escopo da função
console.log(getPreco.apply(carro));

//aplicação do objeto dentro da função com o método apply com passagem de parâmetro opcionais depois do objeto DENTRO DE ARRAYS E SEPARADOS COM VÍRGULA DO OBJETO
console.log(getPreco.apply(carro, [0.12, '$']));
