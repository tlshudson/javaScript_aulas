//formas como objetos podem ser declaraddos no ECMAScript

//Shortand Properties (Propriedades Abreviadas)
const a = 1;
const b = 2;
const c = 3;

//forma 'antiga' (pré-ES6/2016)
const obj1 = { a: a, b: b, c: c};

//Forma 'nova' e preferida (Shortand Properties - ES6/2016)
const obj2 = { a, b, c};
console.log(obj1, obj2);


//Computed Property Names (Nomes de Propriedade Computados)
//Como usar uma variável para definir o nome da chave de um objeto
const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr; //Acessa o objeto usando a variável como chave
console.log(obj3); // { nota: 7.87 }

//Forma 'nova' (Computed Property Names - ES6/ES2015)
const obj4 = {[nomeAttr]: valorAttr}; //Usa colchetes [] dentro da declaração literal
console.log(obj4);

//Shorthand Method Syntax (Sintaxe Abreviada do Métodos)
// Forma 'tradicional' (o método é uma propriedade cuja valor é uma função)
const obj5 = {
    funcao1: function() {
        //....
    },
// Forma 'nova' (Shorthand Method Syntax - ES6/ES2015)
    funcao2(){
        //....
    }
}
console.log(obj5);
