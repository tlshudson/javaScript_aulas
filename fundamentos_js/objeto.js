//assim como a declaração de arrays[] utilizamos o par de CHAVES{} para definir OBJETOS.
//OBJETOS são conjuntos/grupos de chaves = PAR : VALOR como no exemplo abaixo
//há algumas possibilidades de criação de objetos, listei algumas a seguir

const prod1 = {}; //primeiro declarar o objeto com seu tipo e abrir e fechar suas chaves {}
prod1.nome = "ovo"; //neste exemplo temos um par = chave(nome) valor declarado para esta chave("ovo")
prod1.sobrenome = "da silva";

console.log(prod1); //posso imprimir todo o objeto de uma só vez
console.log(prod1.nome /*+ prod1.sobrenome*/); //posso imprimir pares específicos do objeto
console.log(prod1.sobrenome);

const prod2 = { //podemos declarar um objeto com diversos pares de chaves e valores de uma única vez e imprimi-los de diversas vezes como abaixo:
    apelido: "branco de neve",
    raça: "branco",
    tipo: "mongol"
};

console.log(prod2);

//no exemplo abaixo declarei um objeto PAI testeObj, que tem como objetos outros objetos FILHOS lkkkkkkkkk
let testeObj = {
    obj1: "teste1",
        obj2:{
            teste2: "teste2.2",
            obj3:{
                maisumteste3: "maisumteste3.3"
            }
    }
};

console.log(testeObj);