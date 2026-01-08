const nums = [1, 2, 3, 4, 5]
//uso do map para iterar sobre indices de um array
let resultado = nums.map(function(e) {
    return e * 2 //funcao para dobrar os elementos do array
})
console.log(resultado);

// --- EXEMPLO REAL: Transformando Objetos em Strings ---

const carrinho = [
    { nome: 'Caneta', preco: 7.50 },
    { nome: 'Caderno', preco: 25.90 },
    { nome: 'Borracha', preco: 4.20 }
];

// Vamos extrair apenas os preços e formatá-los
const precosFormatados = carrinho.map(produto => {
    return `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
});

console.log(precosFormatados); 
// Saída: ["R$ 7,50", "R$ 25,90", "R$ 4,20"]

// Tamanho: O array resultante do map tem exatamente o mesmo tamanho do array original.

// Imutabilidade: Ele não altera o array original (isso é uma regra de ouro no JS funcional).

// Obrigatório: Você precisa usar a palavra return dentro da função do map. Se esquecer o return, o novo array será preenchido com undefined.

// Uso: É perfeito para converter listas de IDs em nomes, aplicar descontos em preços ou converter dados que vieram do banco de dados para um formato que o usuário consiga ler.