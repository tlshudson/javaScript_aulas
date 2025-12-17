const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};
console.log(JSON.stringify(obj));
//Retorno {"a":1,"b":2,"c":3} -> não traz função pq é um modelo de dados

// console.log(JSON.parse("{a: 1, b: 2, c: 3}"));
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));
//Retorna { a: 1, b: 2, c: 3 }, que é um objeto literal que passei para ser trazido em formato de JSON
