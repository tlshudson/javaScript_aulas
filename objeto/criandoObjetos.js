// Criando Objetos usando a notação literal
const obj1 = {};
console.log(obj1);

//Criando Objetos usando a function new Object em Js
console.log(typeof Object); //Object em Js por si só é uma function
console.log(typeof new Object()); //porém ao chamar a função, ela declara um novo objeto
//estratégia aplicada em um objeto
const obj2 = new Object();
console.log(typeof obj2);

//estratégia de criação de Objetos, criando por meio de funções Construtoras
function Produto(nome, preco, desconto) {
  this.nome = nome; //tornando público o parâmetro nome
  this.getPreco = () => {
    return preco * (1 - desconto);
  };
}
let p1 = new Produto('Caneta', 2, 0.10);
console.log(p1.getPreco());

let p2 = new Produto('Carro', 2, 0.20);
console.log(p2.getPreco(), p1.getPreco());

//utilizando função factory
function criarFuncionario(nome, salariobase, faltas) {
  return{
    
  }
}

const carro = Object.create(null);
carro.nome = 'Mobi';
console.log(carro);

const fromJson = JSON.parse("Teste JSON");
console.log(fromJson.info);
