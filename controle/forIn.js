//O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.
//exemplo: for(variavel in objeto)...

const notas = [2.2, 4.2, 5, 5.4, 6.3, 9.9]

for(indice in notas){
    console.log(`Notas ${indice}: ${notas[indice]}`);
}
//modelo de navegação usando for In

const pessoa = {
    nome: "Hudson",
    idade: 54,
    Patrimonio: 3203000,
    filhos: 3
}

for(let atributos in pessoa){
    console.log(pessoa[atributos])
}
//usando ForIn para percorrer um objeto, "maneira fácil e rápida de visualizar um ou mais objetos"