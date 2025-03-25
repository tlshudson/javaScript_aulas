const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
//exemplo de um percurso entre objetos de um array atravś de um laço repetição for, onde armazendo usando as notas menores que 7 dentro de um array
let notasBaixas = [];
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas);


//com callback

notasBaixas = notas.filter(function (nota){
    return nota < 7;
})

console.log(notasBaixas)
