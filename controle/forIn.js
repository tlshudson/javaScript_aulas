//O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.
//exemplo: for(variavel in objeto)...

const notas = [2.2, 4.2, 5, 5.4, 6.3, 9.9]

for(indice in notas){
    console.log(indice)
}