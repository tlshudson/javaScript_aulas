// 📌 O que são get e set?
// get: é usado para acessar o valor de uma propriedade, como se fosse uma variável, mas na verdade executa uma função.

// set: é usado para atribuir um valor a uma propriedade, também executando uma função por trás dos panos.

const sequencia = {
    _valor: 1, //A propriedade _valor é uma convenção para indicar que ela é "privada" (ou seja, não deveria ser acessada diretamente).
    get valor() { return  this._valor++ },
    set valor(valor){
        if (valor > this._valor) {
            this._valor= valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;

