const produtos = [
  { nome: "Notebook", preco: 2599, fragil: true },
  { nome: "Ipad Pro", preco: 4122, fragil: true },
  { nome: "Copo de Vidro", preco: 12.5, fragil: true },
  { nome: "Copo de Plástico", preco: 18.76, fragil: false },
];

console.log(
  produtos.filter(function (p) {
    return false;
  })
);

const caro = produto => produto.preco >= 500;
const fragil  = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
