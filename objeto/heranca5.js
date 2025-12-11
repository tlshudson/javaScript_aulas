console.log(typeof String); //Retorna Function -> É uma função construtora
console.log(typeof Array); //Retorna Function -> É uma função construtora
console.log(typeof Object); //Retorna Function -> É uma função construtora
/* Quando você usa new String('oi') ou simplesmente declara um literal let s = 'oi', o JavaScript usa a função construtora String para criar o objeto.
Essas Funções Construtoras possuem uma propriedade crucial chamada prototype.
O prototype é um objeto que contém todos os métodos e propriedades que serão herdados por todas as instâncias criadas por aquela Construtora.*/

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse());
//EXPLICAÇÃO
/* this.split(''): Transforma a string em um array de caracteres.Ex: 'Escola Cod3r' ['E', 's', 'c', 'o', 'l', 'a', ' ', 'C', 'o', 'd', '3', 'r']
.reverse(): Inverte a ordem dos elementos no array (este é o método nativo de Array).Ex: ['r', '3', 'd', 'o', 'C', ' ', 'a', 'l', 'o', 'c', 's', 'E']
.join(''): Junta todos os elementos do array de volta em uma string.Ex: 'r3doC alocsE' */