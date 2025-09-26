const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); //traz as chaves do objeto
console.log(Object.values(pessoa)); //traz os valores do objeto
console.log(Object.entries(pessoa)); //Esse método retorna um array de arrays, onde cada sub-array contém um par chave/valor do objeto. Transforma as propriedades do objeto em um formato de lista que facilita, por exemplo, percorrer com forEach ou for...of:

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`);    
})

const dest = { a:2 }
const o1 = { b:3 }
const o2 = { c: 4 }
const o3 = { d: 4, a:4  }

Object.assign(dest, o1, o2, o3); //funçao que acumula todos os atributos chave-valor 
console.log(dest);

