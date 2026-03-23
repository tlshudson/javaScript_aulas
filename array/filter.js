const produtos = [
  { nome: "Notebook", preco: 2599, fragil: true },
  { nome: "Ipad Pro", preco: 4122, fragil: true },
  { nome: "Copo de Vidro", preco: 12.5, fragil: true },
  { nome: "Copo de Plástico", preco: 18.76, fragil: false },
];

console.log(
  produtos.filter(function (p) {
    function filtroProduto(p) {
      if ((p.fragil = true && p.preco > 100)) {
        console.log("Produtos frágeis e baratos:", p);
      } else {
        console.log("Produtos não encontrados!");
      }
    }
  })
);
