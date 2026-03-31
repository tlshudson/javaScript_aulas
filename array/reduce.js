const carrinho = [
  { nome: "Borracha", preco: 3.45 },
  { nome: "Caderno", preco: 13.98 },
  { nome: "Kit de Lápis", preco: 41.22 },
  { nome: "Caneta", preco: 7.5 },
];

const resultado = carrinho.map(produto => produto.preco).reduce(acumulador, atual)
console.log(resultado);

