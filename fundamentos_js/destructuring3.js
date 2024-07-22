function rand({min = 0, max =1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
//function rand irá trazer um  número aleatório de 0 a 1000, e arredondará este valor para um número inteiro

//na linha abaixo, há um exemplo de desestruturação, em que pego alguns parâmetros da função rand e alteramos para valores desejados
const obj = { max:50, min:40}
console.log(rand(obj));

//fazemos a desestrturação em um escopo mais específico, onde podemos setar apenas o valor mínimo para gerar um valor aleatório;
console.log(rand({min: 955}))

