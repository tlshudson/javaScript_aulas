const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); //remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); //adiciona um elemento ao final do array
console.log(pilotos);

pilotos.shift() //remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton'); //adiciona um valor no início da lista
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//remover
pilotos.splice(3, 1); //removeu o 'Massa' da lista
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //Cria um novo array a partir do índice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) // Cria um novo array usando o intervalo de locais definido
console.log(algunsPilotos2);
