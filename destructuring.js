//usando recursos do ES2015 - EcmaScript 2015

const pessoa = {
    nome: 'Beatriz',
    idade: 42,
    pais: "Brasil",
    Estado: "São Paulo",
    Endereco: {
        rua: 15,
        Logradouro: "Apartamento"
    }
};

const {nome, idade} = pessoa;
console.log(nome, idade);
//utilizando destructuring para extrair dados específicos de um objeto.

let {nome: n, idade: i} = pessoa;
console.log(n, i);
//extraindo dados de um objeto e adicionando dentro de duas variáveis