//esta aula mostra duas maneiras de realizar um laço de controle, o convencional a ser utilizado:
let contador = 1;
while (contador <= 10) {
    console.log(`contador = ${contador}`);
    contador++;
}

//maneira de manejar um laço de repetição utilizando a estrutura de controle FOR
for(let i = 1; i <= 10; i++){
    console.log(i);
}


//maneira de percorrer um array sem saber o comprimento do mesmo, utilizando a estrutura de controle FOR
const notas = [2.1, 5.6, 4.8, 9.2, 10.0];
for(let i = 0; i < notas.length; i++){
    console.log(`As notas são: ${notas[i]}`); //impressão da variável notas, utilizando o indíce "i" para navegar entre as mesmas
}
