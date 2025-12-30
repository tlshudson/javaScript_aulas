const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'};
console.log(quaseArray);
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false        
    })
//Object.defineProperty: É um método para criar ou modificar propriedades de um objeto com controle total.

//value: Define o que a propriedade faz. Aqui, ele criou uma função que retorna apenas os valores do objeto (Rafael, Ana, Bia), ignorando as chaves (0, 1, 2).

//enumerable: false: Isso é fundamental! Significa que, quando você fizer um loop ou imprimir o objeto, a função toString não vai aparecer na lista de propriedades. Ela fica "escondida", agindo como um metadado.

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Ana', 'Bia'];
console.log(quaseArray.toString(), meuArray);

