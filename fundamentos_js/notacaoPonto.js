//nesta aula veremos conceitos de acessbildade a funções nativas do JS(API), objetos e classe através da NOTAÇÃO.PONTO rs
//também conhecidos como acessores de propriedade, temos benefícios de legibilidade e leitura do código, tornando-o mais fácil de ser entendido através da notação ponto, seguem abaixo exemplos de acessibilidade através desse acessor.
console.log(Math.ceil(6.1)); //exemplo de acessor da API Math com a função ceil, nativa do Js
console.log(Math.ceil); //impressão da função;


//abaixo temos a declaração de um objeto constante que posteriormente será instaciado pela notação.ponto para criar e acessar um par chave/valor;
const obj6 = {};
obj6.nome = "exemplo";
console.log(obj6.nome);


//exemplo de outra declaração de um objeto que será uma função. Acessada e convertida publicamente através da palavra-chave this, que irá referenciar a função Obj publicamente em outras partes do código;
//esta função ao ser chamada, irá receber um parâmetro, que através do this poderá ser instaciado com outros valores
function Obj(nome){
    this.nome = nome;
}
const obj2 = new Obj("Cadeira");
console.log(obj2.nome);
//aqui foi criada uma constante que foi instanciada a partir do Objeto "Obj" que é uma função que através do acessor "this.nome" poderá construir várias instâncias com vários valores de acordo com a estrutura definida.
