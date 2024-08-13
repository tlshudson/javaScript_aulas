//são funções que possui uma sintaxa curta, que variam entre poucas linhas e que podem, às vezes, não receberem parâmetros padrões, sem blocos padrões de funções, retornos implícitos, entre outros.
//função arrow é conhecida como função anônima.

//segue como 1º exemplo uma função com escopo padrão
let dobro = function (a) {
    return 2 * a;
}
console.log(dobro(2));

//1º exemplo de uma arrow function(Função em seta)
dobro = (a) => {
    return 2 * a;
}
console.log(dobro(Math.PI));

//exemplo de uma arrow function em uma única linha com retorno implícito, ou seja, precisa ser impresso no console ou atribuído em alguma variável para ser impresso
dobro = a => 2 * a;
console.log(dobro(4))


//mais exemplos de arrows Functions, sem parâmetro definido e com somente 1(um) parâmetro definido.
let ola = function () {
    return "Olá!";
}
//console.log(ola());
ola = () => "Olá"; //sem parâmetro definido
ola = _ => "Olá"; //possui um parâmetro definido
