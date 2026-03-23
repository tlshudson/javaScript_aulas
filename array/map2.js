const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.98 }',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array só com valores!

const conversorJson = json => JSON.parse(json);
const precoProduto = produto => produto.preco;
const newCarrinho = carrinho.map(conversorJson).map(precoProduto);

console.log(newCarrinho);
