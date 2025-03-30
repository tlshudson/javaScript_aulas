const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}, ${nome}`);
}

//objeto fabricantes é percorrido através do ForEach que passa a chamada callback(função de retorno) que retorna os índices percorridos dentro do objeto Fabricantes
fabricantes.forEach(imprimir);

//O .forEach() irá iterar sobre cada item da lista e executar a função de callback para cada um:
//Primeira iteração: fabricante = "Ford" → console.log("Ford")
fabricantes.forEach((fabricante) => console.log(fabricante));
